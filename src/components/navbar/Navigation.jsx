import './navbar.css'
import { NavLink } from "react-router-dom";
import logo from '../../assets/profiri3d.png'

export default function Navigation() {
  return (
    <div>
        <div className='nav-menu'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='nav-link'>
              <NavLink className='underline' to="/">Acasă</NavLink>
              <NavLink className='underline' to="/">Cerere de ofertă</NavLink>
            </div>
        </div>
    </div>
  )
}
