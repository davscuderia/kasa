import React from 'react'

import './style.scss'

function Card({ title, cover, id }) {
    return (
        <div className="card">
            <img src={cover} alt={title} className='card__image' />
                <h2 className='card__title'>{title}</h2>
        </div>            
    )
}

export default Card
