import { Link } from "react-router-dom"
import "../styles/header.scss"
import logo from "../assets/logo.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo Kasa" className="logo" />
            <div className="navbar">
                <Link to="/" className="navbar__link">Accueil</Link>
                <Link to="/about" className="navbar__link">A propos</Link>
            </div>
        </header>
    )
}

export default Header
