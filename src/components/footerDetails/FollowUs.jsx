import React from 'react'
import './footerDetails.css'

function FollowUs() {
    return (
        <div>
            <h3>folllow us on</h3>
            <div className="followus"  >
                <a href="https://x.com" target="_blank"><img src="src/assets/img/X.png" alt="x" style={{height:"200px", width:"200px"}}  /></a>
                <a href="https://facebook.com" target="_blank"><img src="src/assets/img/FB.png"  alt="fb" style={{height:"200px", width:"200px"}} /></a>
                <a href="https://instagram.com" target="_blank"><img src="src/assets/img/Insta.png" alt="insta" style={{height:"300px", width:"300px"}} /></a>
            </div>

        </div>
    )
}

export default FollowUs
