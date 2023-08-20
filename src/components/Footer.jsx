import { Link, useLocation } from "react-router-dom"
import "../css/footer.css"
import { useEffect, useState } from "react"
export default function Header() {
    const location = useLocation();
    const [openModal, setOpenModal] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    return (
        <footer className="footer">
            <div className="footer-main">
                <img src="assets/newlogo-black.png" class="footer-logo" />
                <div class="footer-nav">
                    <ul>
                        <li><Link to="/" >HOME</Link></li>
                        <li><Link to="/blog" >BLOG</Link></li>
                        <li><a href="https://store.streetlightblog.com/" >STORE</a></li>
                        <li><Link to="" >CONTACT</Link></li>
                    </ul>
                </div>
                <div className="footer-subscribe">
                    otherstufflater
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-socials">
                    <a href="https://www.instagram.com/streetlightblog/" target="_blank">
                        <img src="assets/insta-logo.png" class="insta-logo" />
                    </a>
                    <a href="https://www.youtube.com/@StreetlightUs" target="_blank">
                        <img src="assets/ty-logo.png" class="youtube-logo" />
                    </a>
                </div>

            </div>
        </footer>

    )
}
