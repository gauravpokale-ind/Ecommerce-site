import React from 'react'
import './footerDetails.css'

function FollowUs() {
    return (
        <div>
            <h3>folllow us on</h3>
            <div className="followus"  >
                <a href="https://x.com" target="_blank"><img src="https://res.cloudinary.com/drah9v28t/image/upload/v1727615739/X_ikhnv4.png" alt="x" style={{height:"200px", width:"200px"}}  /></a>
                <a href="https://facebook.com" target="_blank"><img src="https://res.cloudinary.com/drah9v28t/image/upload/v1727615729/FB_htehxu.png"  alt="fb" style={{height:"200px", width:"200px"}} /></a>
                <a href="https://instagram.com" target="_blank"><img src="https://res.cloudinary.com/drah9v28t/image/upload/v1727615732/Insta_bksq6l.png" alt="insta" style={{height:"300px", width:"300px"}} /></a>
            </div>

        </div>
    )
}

export default FollowUs
