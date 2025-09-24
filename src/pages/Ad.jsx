import accomList from "../data/logements.json"
import Slideshow from "../components/Slideshow.jsx"
import Collapse from "../components/Collapse.jsx"
import Rating from "../components/Rating.jsx"
import Tag from "../components/Tag.jsx"
import "../styles/ad.scss"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Ad() {
    const { id } = useParams()
    const navigate = useNavigate()
    const adProps = accomList.find((ad) => ad.id === id)

    useEffect(() => {
        if (!adProps) {
            navigate("/error")
        }
    }, [id, adProps])

    if (!adProps) {
        null
    } else {
        return (
            <div style={{ flex: 1 }}>
                <Slideshow slides={adProps.pictures} />
                <div className="ad">
                    <div className="ad__container">
                        <div>
                            <p className="ad__title">{adProps.title}</p>
                            <p className="ad__location">{adProps.location}</p>
                            <Tag tag={adProps.tags} />
                        </div>
                        <div className="ad__container_d">
                            <div className="ad__host">
                                <div className="ad__hostname">
                                    {adProps.host.name.split(" ").map((host, index) =>
                                        <p key={index}>{host}</p>
                                    )}
                                </div>
                                <img src={adProps.host.picture} alt={`Photo propriétaire ${adProps.host.name}`} className="ad__hostpic" />
                            </div>
                            <Rating rating={adProps.rating} />
                        </div>
                    </div>
                    <div className="ad__collapses">
                        <Collapse label="Description">
                            <p>{adProps.description}</p>
                        </Collapse>
                        <Collapse label="Equipements">
                            {adProps.equipments.map((equip, index) =>
                                <p key={index}>{equip}</p>
                            )}
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ad
