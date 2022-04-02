import React from "react";
import { Link } from "react-router-dom";
import '../scss/notFound404.scss'
function notFound() {
    return (
        <main className="notFound404">
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retouner à la page d'accueil</Link>
        </main>
    )
}
export default notFound
