import { Link, useLocation } from "react-router-dom"
import "../css/header.css"
import { useEffect, useState, useRef } from "react"
import MobileBar from "./MobileBar"

export default function Header() {
    const location = useLocation();
    const [openMobileBar, setMobileBar] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const ref = useRef(null);
    const handleOutsideClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setMobileBar(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, []);
    useEffect(() => {
        let scrollTimeout;
        const scrollHide = () => {
            setIsScrolling(true)

            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false)
            }, 1200)
        };
        window.addEventListener("scroll", scrollHide);
        return () =>
            window.removeEventListener("scroll", scrollHide);
    }, [])


    return (
        <header className="header">
            <div className="socials">
                <a href="https://www.instagram.com/streetlightblog/" target="_blank">
                    <img src="assets/insta-logo.png" class="insta-logo" />
                </a>
                <a href="https://www.youtube.com/@StreetlightUs" target="_blank">
                    <img src="assets/ty-logo.png" class="youtube-logo" />
                </a>
            </div>

            <div className={`navbar ${isScrolling ? "header-bar" : ""}`}>
                <div className="bars-wrapper">
                    <img src="/assets/fontbarc.webp" alt="nav-bars" className="bars" onClick={() => { setMobileBar(true) }} />
                </div>
                <img src="assets/newlogo-black.png" class="logo" />
                <div class="menu">
                    <ul>
                        <li><Link to="/" >HOME</Link></li>
                        <li><Link to="/blog" >BLOG</Link></li>
                        <li><a href="https://store.streetlightblog.com/">STORE</a></li>
                    </ul>
                </div>
            </div>
            <MobileBar innerRef={ref} open={openMobileBar} onClose={() => setMobileBar(false)} />
        </header>

    )
}
