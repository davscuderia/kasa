import React from 'react'
import './style.scss'

function Rating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        return (
            <span key={index} className={
            `star ${index < rating ? 'filled' : ''}`}>
              ★ 
              </span>
        )
    })
    return <div className='rating'>{stars}</div>
}

export default Rating