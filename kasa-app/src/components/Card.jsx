import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
function Card ({title, location, id, cover}) {
    return (
            <Link to={`/accommodation?id=${id}`}>
                <article className="card">
                    <div className="card-gradient"></div>
                    <img src={cover} alt={title} />
                    <h3>{title}</h3>
                    <p>{location}</p>
                </article>
            </Link>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired,  
    id: PropTypes.string.isRequired, 
    cover: PropTypes.string.isRequired
}

export default Card