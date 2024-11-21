import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function Card({ title, cover, id }) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} className='card__image' />
                <h2>{title}</h2>
        </Link>            
    )
}

export default Card
