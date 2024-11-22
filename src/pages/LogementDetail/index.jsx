import React from "react"
import { useParams } from 'react-router-dom'
import logements from '../../logements.json'
import ImageCarousel from "../../components/ImageCarousel"
import './style.scss'

function LogementDetail () {
    const { id } = useParams();
    const logement = logements.find(log => log.id === id);

        if (!logement) return <div>Logement non trouvé</div>;

        return (
            <div className="logement-detail">
                <div className="logement-pictures">
                    <ImageCarousel images={logement.pictures} />
                </div>
                <div className="logement-info">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">
                            {tag}</span>
                        ))}
                    </div>
                </div>
                <div className="logement-host">
                    <div className="host-info">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture}
                            alt={logement.host.name} />
                    </div>
                    <div className="rating">

                    </div>
                </div>
                <div className="logement-description">
                    <h3>Description</h3>
                    <p>{logement.description}</p>
                </div>
                <div className="logement-equipments">
                    <h3>Équipements</h3>
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
}

/*cover (pictures 0, 1, 2, 3, 4) 
//(host: name) (picturedefaut rating, location(lieu) (equipement 0, 1, 2, 3, 4)
//tags (0, 1)*/

export default LogementDetail