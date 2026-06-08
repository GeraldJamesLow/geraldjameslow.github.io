import { BackButton } from '../../components/BackButton'
import { NavButton } from '../../components/NavButton'
import { PageMeta } from '../../components/PageMeta'

export function Games() {
  return (
    <main className="page">
      <PageMeta title="Games" />

      <section className="hero">
        <h1>Select Your Game</h1>

        <div className="hero-content">
          <p>There is only one game for now lol</p>

          <div className="nav-button-group">
            <NavButton to="/games/liars-dice">Liar&apos;s Dice</NavButton>
          </div>

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