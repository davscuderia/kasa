import React from "react"
import './style.scss'

function Banner ({ backgroundImage, slogan, isAbout }) {
    return (
        <div className={`banner ${isAbout ? 'banner--about' :
        ''}`}
             style={{ backgroundImage:`url(${backgroundImage})
            ` }}>
            {slogan && 
                <h1 className="banner__slogan">{slogan}</h1>
            }
        </div>
    )
}

export default Banner;