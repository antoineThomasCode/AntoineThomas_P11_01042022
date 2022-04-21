import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse"

import '../scss/tools.scss'
import '../scss/collapse.scss'
// content variables for collapses 
const fiabilityTitle = "Fiabilité"
const fiabilityContent =["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."]

const respectTitle = 'Respect'
const respectContent = ['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']

const serviceTitle = 'Service'
const serviceContent = ["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."]

const sercutiyTitle = 'Sécurité'
const sercutiyContent = ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]
function About() {
    return (
        <div>
            <Banner />
            <div className="collapse-container fd-col fb-100 row-gap-10" >
                <Collapse className='fb-100' title={fiabilityTitle} items={fiabilityContent} />
                <Collapse title={respectTitle} items={respectContent} />
                <Collapse title={serviceTitle} items={serviceContent} />
                <Collapse title={sercutiyTitle} items={sercutiyContent} />
            </div>
        </div>
    )
}
export default About