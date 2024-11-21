import "./style.scss"
import Logo from '../../assets/Logo-footer.png'
import copyright_M from '../../assets/copyright_M.png'
import D_copyright from '../../assets/D_copyright.png'

function Footer () {
    return (
        <footer className="footer">
            <img className="footer-logo"src={Logo} alt="logo Kasa" />
            <img className="copyright copyright-mobile"src={copyright_M} alt="copyright Kasa" />
            <img className="copyright copyright-desktop"src={D_copyright} alt="copyright Kasa" />
        </footer>
    )
}

export default Footer
