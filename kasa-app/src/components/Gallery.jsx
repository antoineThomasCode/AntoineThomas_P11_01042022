import React from "react";
import Card from "./Card";
import accomodations from "../data/accomodations";

import '../scss/gallery.scss'
function Gallery() {
    return (
        <main className="gallery">
            {accomodations.map(({title, location, cover, id, index}) => (
                
                <Card
                    title={title}
                    location={location}
                    cover={cover}
                    id={id}
                    key={id}
                />
            ))}
        </main>
    )
}
export default Gallery