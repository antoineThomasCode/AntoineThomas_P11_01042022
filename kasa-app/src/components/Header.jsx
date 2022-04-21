import logo from '../assets/images/logo-kasa-salmon.png'
import '../scss/App.scss'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
            <Link to='/'>
                <img src={logo} className='header-logo' alt='logo kasa'/> 
            </Link>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/about'>A Propos</Link>
            </nav>
         </header>
    );
}
export default Header