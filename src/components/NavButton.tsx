import { Link } from 'react-router-dom'

type NavButtonProps = {
  to: string
  children: React.ReactNode
}

export function NavButton({ to, children }: NavButtonProps) {
  return (
    <Link className="nav-button" to={to}>
      {children}
    </Link>
  )
}