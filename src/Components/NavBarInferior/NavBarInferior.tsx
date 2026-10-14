import './NavBarInferior.css'
import { NavLink, useLocation } from 'react-router-dom'
import { Home, Droplets, Cloud, TrendingUpDown, Newspaper } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function NavBarInferior() {
  const location = useLocation()
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const atualizarIndicador = () => {
      const activeLink = navRef.current?.querySelector<HTMLElement>('.active')
      // Em rotas fora da navbar (ex.: /configuracoes) o indicador some
      setIndicatorStyle(
        activeLink
          ? { left: activeLink.offsetLeft, width: activeLink.offsetWidth }
          : { left: 0, width: 0 }
      )
    }

    atualizarIndicador()
    window.addEventListener('resize', atualizarIndicador)
    return () => window.removeEventListener('resize', atualizarIndicador)
  }, [location])

  return (
    <nav>
      <div className="Pages" ref={navRef}>
        <div 
          className="indicador-deslizante" 
          style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }} 
        />
        
        <NavLink to="/home" className="nav-item">
          <Home size={22} /> Início
        </NavLink>
        <NavLink to="/monitoramento" className="nav-item">
          <Droplets size={22} /> Monitoramento
        </NavLink>
        <NavLink to="/clima" className="nav-item">
          <Cloud size={22} /> Clima
        </NavLink>
        <NavLink to="/relatorios" className="nav-item">
          <TrendingUpDown size={22} /> Relatórios
        </NavLink>
        <NavLink to="/noticias" className="nav-item">
          <Newspaper size={22} /> Notícias
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBarInferior