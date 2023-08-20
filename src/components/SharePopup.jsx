import React from 'react'
import '../css/SharePopup.css'
import {
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShareModal = ({ innerRef, postLink, open, onClose }) => {
    if (!open) return null;
    return (
        <div className="share-overlay">
            <div ref={innerRef} className={`share-pop-up-container ${open ? "share-slidedown" : ""}`}>
                <h1 className="share-text">Share this post!</h1>
                <div style={false ? { background: "#000" } : {}} className="share-list">
                    <TwitterShareButton
                        url={postLink}>
                        <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                    <FacebookShareButton
                        url={postLink}>
                        <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                    <LinkedinShareButton
                        url={postLink}>
                        <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>
                    <img onClick={() => {
                        navigator.clipboard.writeText(postLink)
                        toast('Copied to clipboard!', {
                            position: "bottom-center",
                            autoClose: 1000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: false,
                            progress: undefined,
                            theme: "light",
                        });
                    }} className='share-copy-img' src="assets/link-icon2.png" alt="" />
                </div>
                <p className="share-close" onClick={onClose}>X</p>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
                className="share-toast"
            />
        </div>
    )
}
export default ShareModal;