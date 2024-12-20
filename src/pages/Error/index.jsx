import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function Error() {
    return (          
        <div className="error-page">
            <h1>404</h1>
            <h2>Oups ! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="home-return">
            Retourner sur la page d'accueil
            </Link>
        </div>
    )
}
export default Error
