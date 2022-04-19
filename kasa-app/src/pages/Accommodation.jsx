import React from "react";
import accomodations from "../data/accomodations";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import '../scss/accommodation.scss'
import Carousel from "../components/Carousel";
import NotFound from "../components/404";


//get Id in Url 
const getParam = (param) => new URL(document.location).searchParams.get(param);

function Accommodation() {
    const accommodationID = getParam('id')
    const filteredAccommodations = accomodations.filter((item) => {
        if(item.id === accommodationID) {
           return item 
        } 
    })
    
    if (!filteredAccommodations.length) {
        return <NotFound />
    }
    const currentAccommodation = filteredAccommodations[0]
    const descriptionTitle = 'Description'
    const equipmentTitle = 'Équipements'
    
    return (
        <main>
            <Carousel pictures={currentAccommodation.pictures} title={currentAccommodation.title}></Carousel>
            
            <div className="info-accommodation-container">
                <div className="host-profil">
                    <img src={currentAccommodation.host.picture} alt={currentAccommodation.title} />
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
                <Collapse title={descriptionTitle} items={[currentAccommodation.description]} />
                <Collapse title={equipmentTitle} items={currentAccommodation.equipments} />
            </div>
        </main>
    )
}
export default Accommodation