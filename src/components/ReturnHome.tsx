import { NavButton } from './NavButton'

type ReturnHomeProps = {
  label?: string
}

export function ReturnHome({ label = 'Return Home' }: ReturnHomeProps) {
  return (
    <NavButton to="/" variant="danger">
      {label}
    </NavButton>
  )
}