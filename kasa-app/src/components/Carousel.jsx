import React, {useState} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from 'prop-types';

function Carousel({pictures, title}) {
    const [count, setCount] = useState(0);
    
    return (
        <div className="carousel">
            <img src={pictures[count]} alt={title} />
            {pictures.length !==  1 && <button className="next" onClick={() => setCount(count === pictures.length - 1 ? 0 : count + 1)}><FaChevronRight className="next-icon" /></button>}
            {pictures.length !==  1 && <button className="prev" onClick={() => setCount(count === 0 ?  pictures.length  - 1 : count - 1)}><FaChevronLeft className="prev-icon" /></button>}
            
            <span className="index-img-carousel">{count + 1}/{pictures.length}</span>
        </div>
    )
}

Carousel.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default Carousel