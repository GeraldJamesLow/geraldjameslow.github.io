import { useNavigate } from 'react-router-dom'

type BackButtonProps = {
  children?: React.ReactNode
  variant?: 'default' | 'danger' | 'back'
}

export function BackButton({
  children = 'Go Back',
  variant = 'back',
}: BackButtonProps) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className={`nav-button nav-button--${variant}`}
      onClick={() => navigate(-1)}
    >
      {children}
    </button>
  )
}