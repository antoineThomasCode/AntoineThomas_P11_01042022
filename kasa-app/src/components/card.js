import React from "react";
import { Link } from "react-router-dom";

function Card ({title, location, id, cover}) {
    return (
        
            <Link to={`/Flat?id=${id}`}>
                <article className="card">
                    <div className="card-gradient"></div>
                    <img src={cover} alt={title} />
                    <h3>{title}</h3>
                    <p>{location}</p>
                </article>
            </Link>
    )
}
export default Card