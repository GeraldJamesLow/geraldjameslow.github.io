import { Link } from 'react-router-dom'

type NavButtonProps = {
  to: string
  children: React.ReactNode
  variant?: 'default' | 'danger'
}

export function NavButton({
  to,
  children,
  variant = 'default',
}: NavButtonProps) {
  return (
    <Link className={`nav-button nav-button--${variant}`} to={to}>
      {children}
    </Link>
  )
}