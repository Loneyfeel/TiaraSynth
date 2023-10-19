
import './header.sass'
import {useEffect, useState} from "react";

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
                <div className="nav container">
                    wasd
                </div>
            </>
    )
}