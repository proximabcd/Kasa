import accomList from "../data/logements.json"
import Banner from "../components/Banner.jsx"
import Card from "../components/Card.jsx"
import image from "../assets/home-banner.png"
import "../styles/home.scss"
import { Link } from "react-router-dom"

function Home() {
    const text = "Chez vous, partout et ailleurs"
    return (
        <div style={{ flex: 1 }}>
            <Banner image={image} text={text} />
            <div className="card-list">
                {accomList.map(({ id, title, cover }) =>
                    <Link to={`/ad/${id}`}>
                        <Card key={id} title={title} cover={cover} />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Home
