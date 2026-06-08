import { NavButton } from "../components/NavButton";
import { PageTitle } from "../components/PageTitle";

export function Home() {
  return (
    <main className="page">
      <PageTitle title="Gerald Low | Home" />

      <section className="hero">
        <h1>Gerald Low's Portfolio</h1>
        <div className="hero-content">
          <a href="https://www.linkedin.com/in/gerald-james-low/">LinkedIn</a>
          <p>WIP</p>
          <NavButton to="/games">Games</NavButton>
        </div>
      </section>
    </main>
  )
}