import React from "react"
import Banner from "../../components/Banner"
import homeBannerImage from '../../assets/home-banner.webp'
import CardList from "../../components/CardList"
import './style.scss'

function Home() {
    return (
        <div className="home">
            <Banner
                backgroundImage={homeBannerImage}
                slogan="Chez vous, partout et ailleurs"
            />    
            <CardList />

        </div>
    )
}
export default Home