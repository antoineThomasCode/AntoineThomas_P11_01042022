import React from "react";
import '../scss/tags.scss'
import PropTypes from 'prop-types';

function Tags ({tags}) {

    return (
        <ul className="tags">
            {tags.map((tag, index) => <li key={index}>{tag}</li>)}
        </ul>
    )
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired
}
export default Tags