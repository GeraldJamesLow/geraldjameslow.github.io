import { BackButton } from '../../../components/BackButton'
import { NavButton } from '../../../components/NavButton'
import { PageMeta } from '../../../components/PageMeta'
import {
  countDice,
  rollDice,
  type DieValue,
} from './LiarsDiceLogic'
import { DiceCountTable } from './DiceCountTable'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './LiarsDice.css'

const DEFAULT_DICE_COUNT = 5
const MIN_DICE_COUNT = 1
const MAX_DICE_COUNT = 20

function parseDiceCount(value: string | null): number {
  if (value === null || value.trim() === '') {
    return DEFAULT_DICE_COUNT
  }

  const parsed = Number(value)

  if (!Number.isInteger(parsed)) {
    return DEFAULT_DICE_COUNT
  }

  return Math.min(Math.max(parsed, MIN_DICE_COUNT), MAX_DICE_COUNT)
}

export function LiarsDice() {
  const [searchParams, setSearchParams] = useSearchParams()
  const diceCount = parseDiceCount(searchParams.get('diceCount'))
  const [diceCountInput, setDiceCountInput] = useState(String(diceCount))

  const [dice, setDice] = useState<DieValue[]>([])
  const [warning, setWarning] = useState<string | null>(null)

  useEffect(() => {
    setDiceCountInput(String(diceCount))
  }, [diceCount])

  const diceCountRows = countDice(dice)

  function getValidDiceCountFromInput(): number {
    const trimmedValue = diceCountInput.trim()

    if (trimmedValue === '') {
      return DEFAULT_DICE_COUNT
    }

    const parsed = Number(trimmedValue)

    if (!Number.isInteger(parsed)) {
      return DEFAULT_DICE_COUNT
    }

    return Math.min(Math.max(parsed, MIN_DICE_COUNT), MAX_DICE_COUNT)
  }

  function commitDiceCountInput() {
    const trimmedValue = diceCountInput.trim()

    if (trimmedValue === '') {
      updateDiceCount(DEFAULT_DICE_COUNT)
      setWarning(`Dice count cannot be empty. Reset to ${DEFAULT_DICE_COUNT}.`)
      return
    }

    const parsed = Number(trimmedValue)

    if (!Number.isInteger(parsed)) {
      updateDiceCount(DEFAULT_DICE_COUNT)
      setWarning(`Please enter a whole number. Reset to ${DEFAULT_DICE_COUNT}.`)
      return
    }

    if (parsed < MIN_DICE_COUNT) {
      updateDiceCount(MIN_DICE_COUNT)
      setWarning(`Dice count cannot be less than ${MIN_DICE_COUNT}. Reset to ${MIN_DICE_COUNT}.`)
      return
    }

    if (parsed > MAX_DICE_COUNT) {
      updateDiceCount(MAX_DICE_COUNT)
      setWarning(`Dice count cannot be greater than ${MAX_DICE_COUNT}. Reset to ${MAX_DICE_COUNT}.`)
      return
    }

    updateDiceCount(parsed)
    setWarning(null)
  }

  function handleDiceCountInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDiceCountInput(event.target.value)
    setWarning(null)
  }

  function handleDiceCountInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      commitDiceCountInput()
      event.currentTarget.blur()
    }
  }

  function updateDiceCount(nextDiceCount: number) {
    const safeDiceCount = Math.min(
      Math.max(nextDiceCount, MIN_DICE_COUNT),
      MAX_DICE_COUNT,
    )

    setSearchParams({
      diceCount: String(safeDiceCount),
    })
  }

  function handleRoll() {
    const validDiceCount = getValidDiceCountFromInput()

    updateDiceCount(validDiceCount)
    setDice(rollDice(validDiceCount))
  }

  return (
    <main className="page">
      <PageMeta title="Liar's Dice" favicon='public/noto-emojis-game-die.svg' />

      <section className="hero">
        <div className="hero-content">
          <h1>Liar&apos;s Dice</h1>

          <div className="dice-controls">
            <label className="dice-count-label">
              <span>Dice Count:</span>

              <input
                className="dice-count-input"
                type="number"
                inputMode="numeric"
                min={MIN_DICE_COUNT}
                max={MAX_DICE_COUNT}
                value={diceCountInput}
                onChange={handleDiceCountInputChange}
                onBlur={commitDiceCountInput}
                onKeyDown={handleDiceCountInputKeyDown}
              />
            </label>

            {warning !== null && (
              <p className="dice-warning" role="alert">
                {warning}
              </p>
            )}

            <div className="dice-stepper">
              <button
                type="button"
                className="dice-stepper-button"
                onClick={() => updateDiceCount(diceCount - 1)}
                disabled={diceCount <= MIN_DICE_COUNT}
                aria-label="Decrease dice count"
              >
                -
              </button>

              <button
                type="button"
                className="dice-stepper-button"
                onClick={() => updateDiceCount(diceCount + 1)}
                disabled={diceCount >= MAX_DICE_COUNT}
                aria-label="Increase dice count"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            className="nav-button nav-button--primary"
            onClick={handleRoll}
          >
            Roll {diceCount} Dice
          </button>

          {dice.length > 0 && (
            <>
              <p>Roll Result: {dice.join(', ')}</p>
              <DiceCountTable rows={diceCountRows} />
            </>
          )}

          <hr className="section-divider" />

          <div className="nav-button-group">
            <BackButton />
            <NavButton to="/" variant="danger">
              Return Home
            </NavButton>
          </div>
        </div>
      </section>
    </main>
  )
}