import React from "react"
import Banner from "../../components/Banner"
import homeBannerImage from '../../assets/home-banner.png'

function Home() {
    return (
        <div className="home">
            <Banner
                backgroundImage={homeBannerImage}
                slogan="Chez vous, partout et ailleurs"
            />    
            <p>Ma super page d'accueil</p>
        </div>
    )
}
export default Home