import './NavBarSuperior.css'
import { Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function NavBarSuperior() {
  const navigate = useNavigate()

  return (
    <>
      <header>
        <div className='img_logo'>
          <img src="/assets/images/hidrolinklogo.png" alt="Logo HidroLink horizontal" />
        </div>
        <div className='buttons-rightside'>
          <button
            type='button'
            onClick={() => navigate('/configuracoes')}
            aria-label='Configurações'
          >
            <Settings size={24} />
          </button>
          <button
            type='button'
            onClick={() => navigate('/')}
          >
            Sair
          </button>
        </div>
      </header>
    </>
  )
}

export default NavBarSuperior