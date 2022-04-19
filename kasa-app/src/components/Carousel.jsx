import React, {useState} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function Carousel({pictures, title}) {
    const [count, setCount] = useState(0);
    
    return (
        <div className="carousel">
            <img src={pictures[count]} alt={title} />
            <button className="next" onClick={() => setCount(count === pictures.length - 1 ? 0 : count + 1)}><FaChevronRight className="next-icon" /></button>
            <button className="prev" onClick={() => setCount(count === 0 ?  pictures.length  - 1 : count - 1)}><FaChevronLeft className="prev-icon" /></button>
            <span className="index-img-carousel">{count + 1}/{pictures.length}</span>
        </div>
    )
}

export default Carousel