import React from "react"
import { useParams } from 'react-router-dom'
import logements from '../../logements.json'

function LogementDetail () {
    const { id } = useParams();
    const logement = logements.find(log => log.id === id);

        if (!logement) return <div>Logement non trouvé</div>;

        return (
            <div className="card-detail">
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
                {/*cover (pictures 0, 1, 2, 3, 4) <p>description</p>
//(host: name) (picturedefaut rating, location(lieu) (equipement 0, 1, 2, 3, 4)
//tags (0, 1)*/}
            </div>
        )
}

export default LogementDetail