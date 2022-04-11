import React from "react";
import '../scss/tags.scss'

function Tags ({tags}) {

    return (
        
        <ul className="tags">
            {tags.map((tag) => <li>{tag}</li>)}
        </ul>
    )
}
export default Tags