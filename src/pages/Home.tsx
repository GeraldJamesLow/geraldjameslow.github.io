import { NavButton } from "../components/NavButton";
import { PageTitle } from "../components/PageTitle";

export function Home() {
  return (
    <main className="page">
      <PageTitle title="Gerald Low | Home" />

      <section className="hero">
        <h1>Gerald's Portfolio</h1>
        <div className="hero-content">
          <p>WIP</p>
          <NavButton to="/notfound">Not Found</NavButton>
        </div>
      </section>
    </main>
  )
}