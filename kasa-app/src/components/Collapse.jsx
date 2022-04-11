import React, {useState} from "react";


function Collapse ({title, items}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <button className="collapse-title" onClick={() => setIsOpen(!isOpen)}>{title}</button>
                {isOpen && <div className="collapse-content">
                                <ul>
                                    {items.map((element) =>  <li key={items.indexOf(element)}>{element}</li>)}
                                </ul>
                            </div>}
        </div>
    )
}
export default Collapse