import React from 'react'
import { Link } from "react-router-dom"
import "../css/mobilebar.css"
import { useState } from 'react'

const MobileBar = ({ innerRef, open, onClose }) => {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    return (
        <div className={`overlay ${!open ? "overlay-not-visible" : "overlay-background"}`}>
            <div ref={innerRef} className="mobile-bar-wrapper">
                <img src="assets/newlogo-black.png" class="logo" />
                <div class="mobile-bar-list">
                    <Link onClick={onClose} className='mobile-bar-link' to="/" >HOME</Link>
                    <Link onClick={onClose} className='mobile-bar-link' to="/blog" >BLOG</Link>
                    <a onClick={onClose} className='mobile-bar-link' href="https://store.streetlightblog.com/" >STORE</a>
                </div>
                <div className="mobile-bar-socials">
                <a href="https://www.instagram.com/streetlightblog/" target="_blank">
                    <img src="assets/insta-logo.png" class="mobile-bar-insta" />
                </a>
                <a href="https://www.youtube.com/@StreetlightUs" target="_blank">
                    <img src="assets/ty-logo.png" class="mobile-bar-youtube" />
                </a>
            </div>
                <p className="mobile-bar-close" onClick={onClose}>X</p>
            </div>
        </div>

    )
}
export default MobileBar;