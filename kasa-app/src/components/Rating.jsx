import React from "react";
import {FaStar} from 'react-icons/fa'
import "../scss/tools.scss"
import '../scss/rating.scss'
import PropTypes from 'prop-types';

function Rating({rating}) {
    const stars = [1, 2, 3, 4, 5] 

    return (
        <div className="rating">
            {stars.map(index => <FaStar key={index} className={`stars ${index <= rating ? 'color' : ''}`}/>)}
        </div>
    )
}
Rating.propTypes = {
    rating: PropTypes.string.isRequired
}
export default Rating