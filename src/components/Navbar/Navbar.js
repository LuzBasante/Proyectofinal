import '../Navbar/Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar dark navbar-expand-lg">
        <div className="navbar container-fluid ">
        <Link id="item" to = '/'> <img className='logo1'  src={logo} /> </Link>
          <div className="m-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li  className='menu' >
                <Link id="item" to = '/'>
                <p id="p">INICIO</p>
                </Link>
              </li>
              <li className='menu'  >
              <Link id="item" to = '/category/Cremas'>
                <p id="p">CREMAS</p>
                </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/Perfumes'>
                <p id="p">LOCIONES</p>
              </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/Labiales'>
                <p id="p">LABIALES</p>
              </Link>
              </li>
            </ul>
          </div>
          <a>
            <CartWidget />
          </a>
        </div>
      </nav>
    )
    
}

export default Navbar