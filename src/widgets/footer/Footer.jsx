
import './footer.sass'

import logo from '../../share/assets/images/footer/logo.svg'
import {Link} from "react-router-dom";
import {ROUTES} from "../../share/utils/routes.js";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__container flex">
                    <div className="footer__logo flex">
                        <div className="footer__logo_image">
                            <img src={logo} alt="" className="footer__img"/>
                        </div>
                        <div className="footer__logo-text">
                            TiaraSynth
                        </div>
                    </div>
                    <ul className="footer__links flex">
                        <Link to={ROUTES.ABOUT} className="link">About us</Link>
                        <Link to={ROUTES.COLLECTIONS} className="link">Exclusive</Link>
                        <Link to={ROUTES.MARKETPLACE} className="link">Marketplace</Link>
                        <Link to={ROUTES.PRIVACY} className="link">Privacy</Link>
                        <Link to={ROUTES.CONTACT} className="link">Contact Us</Link>
                    </ul>
                    <div className="footer__copyright">
                        © 2023 by Gladishev Filipp
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer

