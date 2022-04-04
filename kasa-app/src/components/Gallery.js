import React from "react";
import Card from "./card";
import accomodations from "../data/accomodations";

import '../scss/gallery.scss'
function Gallery() {
    return (
        <main className="gallery">
            {accomodations.map(({title, location, cover, id}) => (
                
                <Card
                    title={title}
                    location={location}
                    cover={cover}
                    id={id}
                />
            ))}
        </main>
    )
}
export default Gallery