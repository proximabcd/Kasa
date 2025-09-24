import Collapse from "../components/Collapse.jsx"
import Banner from "../components/Banner.jsx"
import image from "../assets/about-banner.png"
import "../styles/about.scss"

function About() {
    const aboutList = [
        {
            "usp": "Fiabilité",
            "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            "usp": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "usp": "Service",
            "content": "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        },
        {
            "usp": "Sécurité",
            "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]
    return (
        <div style={{ flex: 1 }}>
            <Banner image={image} text="" />
            <div className="about">
                {aboutList.map((item, index) =>
                    <Collapse key={index} label={item.usp} style={{ fontSize: 18 }}>
                        <p>{item.content}</p>
                    </Collapse>
                )}
            </div>
        </div>
    )
}

export default About
