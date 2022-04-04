import React from "react";
import accomodations from "../data/accomodations";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Rating from "../components/Rating";

import Slider from "../components/Carousel";

//get Id in Url 
const getParam = (param) => new URL(document.location).searchParams.get(param);

function Accommodation() {
    const accommodationID = getParam('id')
    let currentAccommodation = []
    accomodations.forEach((item) => {
        if(item.id === accommodationID) {
            currentAccommodation = item
        }
    })
    const descriptionTitle = 'Description'
    const equipmentTitle = 'Équipements'
    const description = [currentAccommodation.description]
    const accommodationPictures = currentAccommodation.pictures
    
    return (
        <main>
            <Slider pictures={currentAccommodation.pictures}/>
            
            <div className="info-accommodation-container">
                <div className="host-profil">
                    <img src={currentAccommodation.host.picture} />
                    <h3>{currentAccommodation.host.name}</h3>
                    <Rating rating={currentAccommodation.rating} />
                </div>
                <div>
                    <h2>{currentAccommodation.title}</h2>
                    <p>{currentAccommodation.location}</p>
                    <Tags tags={currentAccommodation.tags} />
                </div>
            </div>
            <div className="collapse-container">
                <Collapse title={descriptionTitle} items={description} />
                <Collapse title={equipmentTitle} items={currentAccommodation.equipments} />
            </div>
        </main>
    )
}
export default Accommodation