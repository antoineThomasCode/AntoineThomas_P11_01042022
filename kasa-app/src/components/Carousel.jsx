import React, {useState} from "react";
import '../scss/carousel.scss'



function Carousel({pictures, title}) {
    const [count, setCount] = useState(0);
    console.log(pictures)
    console.log(count)
    
    return (
        <div className="carousel">
            <img src={pictures[count]} alt={title} />
            <button  onClick={() => setCount(count + 1)}>Next</button>
            <button  onClick={() => setCount(count - 1)}>Prev</button>
            <span className="index-img-carousel"></span>
        </div>
    )
}

export default Carousel