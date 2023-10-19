
import './header.sass'

import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../share/utils/routes.js";

function Header(){
    const [isScroll, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.addEventListener("scroll", onScroll)
    }, [])
    return (
        <>
            <header className={`header ${isScroll ? "header_scrolled" : ''}`} id="header">
                <Navbar/>
            </header>
        </>
    )
}
export default Header

function Navbar (){
    return(
            <>
                <div className="nav flex">
                    <div className="logo">
                        <Link to={ROUTES.HOME} className="logo__text link">
                                TIARASYNTH
                        </Link>
                    </div>
                    <ul className="links flex">
                        <li className="item">
                            <Link to={ROUTES.ABOUT} className="item__text link">
                                About
                            </Link>
                        </li>
                        <li className="item">
                            <Link to={ROUTES.COLLECTIONS} className="item__text link">
                                Exclusive
                            </Link>
                        </li>
                        <li className="item">
                            <Link to={ROUTES.MARKETPLACE} className="item__text link">
                                Marketplace
                            </Link>
                        </li>
                    </ul>
                    <div className="auth">
                        <Link to={ROUTES.AUTHORIZATION} className="item__text link">
                            Log In
                        </Link>
                    </div>
                </div>
            </>
    )
}