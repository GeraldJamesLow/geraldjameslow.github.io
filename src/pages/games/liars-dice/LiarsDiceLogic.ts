export type DieValue = 1 | 2 | 3 | 4 | 5 | 6

export type DieCountRow = {
  dieValue: DieValue
  count: number
}

export function rollDie(): DieValue {
  return (Math.floor(Math.random() * 6) + 1) as DieValue
}

export function rollDice(numberOfDice: number): DieValue[] {
  if (!Number.isInteger(numberOfDice)) {
    throw new Error('Number of dice must be an integer.')
  }

  if (numberOfDice < 1) {
    throw new Error('Number of dice must be at least 1.')
  }

  return Array.from({ length: numberOfDice }, () => rollDie())
}

export function countDice(dice: DieValue[]): DieCountRow[] {
  const dieValues: DieValue[] = [1, 2, 3, 4, 5, 6]

  return dieValues.map((dieValue) => ({
    dieValue,
    count: dice.filter((die) => die === dieValue).length,
  }))
}