import './NavBarSuperior.css'
import { User } from 'lucide-react'

function NavBarSuperior() {
 return (
<> 
<header>
<div className='img_logo'>
    <img src="/assets/images/logo_horizontal.png" alt="Logo HidroLink horizontal" />
</div>
<div className='buttons-rightside'>
    <button type='button'><User size={30}/></button>
    <button type='button'>Sair</button>
</div>
</header>

</>
    )
}

export default NavBarSuperior