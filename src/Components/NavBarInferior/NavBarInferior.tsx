import './NavBarInferior.css'
import { Home , Droplets , Cloud , TrendingUpDown , Newspaper} from 'lucide-react'

function NavBarInferior() {
 return (
<> 
<nav>
<div className='Pages'>
<button> <Home size={22} />Início</button>
<button> <Droplets size={22} />Monitoramento</button>
<button> <Cloud size={22} /> Clima</button>
<button><TrendingUpDown size={22} />  Relatórios</button>
<button><Newspaper size={22} /> Notícias</button>

</div>


</nav>



</>

 )
}

export default NavBarInferior