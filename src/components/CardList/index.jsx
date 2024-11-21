import React from 'react'
import Card from '../Card'
import logements from '../../logements.json'
import './style.scss'

function CardList() {
    return (
        <div className='card-list-container'>
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
        </div>
    )
}

export default CardList