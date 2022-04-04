import React from "react";
import {FaStar} from 'react-icons/fa'

import '../scss/rating.scss'

function Rating({rating}) {
   
    
    return (
        <div className="rating">
            <FaStar className="stars"/>
            <FaStar className="stars"/>
            <FaStar className="stars"/>
            <FaStar className="stars"/>
        </div>
    )
}
export default Rating