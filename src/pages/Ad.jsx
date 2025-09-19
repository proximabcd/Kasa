import accomList from "../data/logements.json"
import Slideshow from "../components/Slideshow.jsx"
import Collapse from "../components/Collapse.jsx"
import "../styles/ad.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

library.add(fas, far, fab)

function Ad() {
    const { id } = useParams()
    const navigate = useNavigate()
    const stars = Array(5).fill(0)
    const colors = {
        red: "#ff6060",
        grey: "#e3e3e3"
    }
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
                            <div className="ad__tags">
                                {adProps.tags.map((tag, index) =>
                                    <p key={index} className="ad__tagitem">{tag}</p>
                                )}
                            </div>
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
                            <div className="ad__rating">
                                {stars.map((star, index) =>
                                    <FontAwesomeIcon
                                        key={index} icon="fa-solid fa-star" className="icon"
                                        style={{ color: `${(adProps.rating) > index ? colors.red : colors.grey}` }}
                                    />
                                )}
                            </div>
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
