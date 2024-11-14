import "./style.scss"
import Logo from '../../assets/Logo.png'
import NavItem from "../NavItem"


function Header() {
    return (
        <header className="header">
            <img className="header__logo"src={Logo} alt="logo Kasa" />
            <nav className="header__nav">
                <NavItem to="/" label="Accueil" />
                <NavItem to="/about" label="À Propos" />
            </nav>
        </header>
    )
}
export default Header