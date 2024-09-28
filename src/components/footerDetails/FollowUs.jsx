import React from 'react'
import './footerDetails.css'

function FollowUs() {
    return (
        <div>
            <h3>folllow us on</h3>
            <div className="followus"  >
                <a href="https://x.com" target="_blank"><img src="src/assets/img/x.png" alt="x"  /></a>
                <a href="https://facebook.com" target="_blank"><img src="src/assets/img/fb.png" alt="fb" /></a>
                <a href="https://instagram.com" target="_blank"><img src="src/assets/img/insta.jpeg" alt="insta" /></a>
            </div>

        </div>
    )
}

export default FollowUs
