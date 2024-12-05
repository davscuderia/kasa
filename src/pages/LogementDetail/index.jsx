import React from "react"
import { Navigate, useParams } from 'react-router-dom'
import logements from '../../Datas/logements.json'
import ImageCarousel from "../../components/ImageCarousel"
import Rating from "../../components/Rating"
import Collapse from "../../components/Collapse"
import './style.scss'

function LogementDetail () {
    const { id } = useParams();
    const logement = logements.find(log => log.id === id);

        if (!logement) return <Navigate to="/error" />

    return (
        <div className="logement-detail">
            <div className="logement-pictures">
                <ImageCarousel images={logement.pictures} />
            </div>
            <div className="container-info">
                <div className="logement-info-container">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">
                            {tag}</span>
                        ))}
                    </div>
                </div>
                <div className="logement-host-rating">
                    <div className="host-info">
                        <p>
                            {logement.host.name.split(' ')[0]} {/* Prénom */}
                            <br />
                            {logement.host.name.split(' ')[1]} {/* Nom */}
                        </p>
                        <img src={logement.host.picture}
                            alt={logement.host.name} />
                    </div>
                    <Rating rating={logement.rating} />
                </div>
            </div>
            <div className="logement-details-collapses">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Équipements" content={logement.equipments} />
            </div>
        </div>    
    )
}

export default LogementDetail