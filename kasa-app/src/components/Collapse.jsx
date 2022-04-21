import React, {useState} from "react";
import '../scss/collapse.scss'
import { FaChevronLeft} from "react-icons/fa";

function Collapse ({title, items}) {
    const [isOpen, setIsOpen] = useState(false)
   
    return (
        <div className="collapse">
            <button className="collapse-title" onClick={() => setIsOpen(!isOpen)}>{title}<FaChevronLeft className={`collapse-btn  ${isOpen ? `collapse-btn-open` :""}`}/></button>
                {isOpen && <div className="collapse-content">
                                <ul>
                                    {items.map((element, index) =>  <li key={index}>{element}</li>)}
                                </ul>
                            </div>}
        </div>
    )
}
export default Collapse