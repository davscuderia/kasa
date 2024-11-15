import React from 'react'
import Card from '../Card'
import logements from '../../logements.json'

function CardList() {
    return (
        <div className='card-list'>
            {logements.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover} 
                />    
            ))}
        </div>
    )
}

export default CardList