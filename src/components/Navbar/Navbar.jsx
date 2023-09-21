import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { HOME, ASSISTANT, ASSISTANTS, CONFIGURATION } from '../../constants/routes'
import './navbar.styles.scss'

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <nav className={isMobile ? 'navbar navbar-expand-lg navbar-light bg-light' : 'navbar navbar-expand-lg navbar-dark bg-dark nav-h'}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={HOME}>{isMobile && <img className='logo' src='https://cdn-ua.hostingreactor.com/ua_www/cache/wp-content/uploads/2020/12/Logo_svg.svg' alt='universidad_autonoma_logo' />}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={isMobile ? 'collapse navbar-collapse' : 'collapse navbar-collapse d-flex justify-content-center'} id="navbarNavDropdown">
          <ul className='navbar-nav'>
            {!isMobile && <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link btn-link px-4 active' : 'nav-link btn-link px-4'} aria-current="page" to={HOME}>&gt; Home</NavLink>
            </li>}
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link std-link'} aria-current="page" to={ASSISTANT}>Asistente</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link std-link'} to={ASSISTANTS}>Selecciona tu asistente</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link std-link'} to={CONFIGURATION}>Configuraciones</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
