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
    const idState = accomList.some(ad => ad.id === id)
    useEffect(() => {
        if (!idState) {
            navigate("/error")
        }
    }, [id])
    if (idState) {
        const adProps = accomList.find((ad) => ad.id === id)
        const adHost = adProps.host.name.split(" ")
        const adRating = []
        for (let i = 0; i < 5; i++) {
            (i < adProps.rating) ? adRating.push(true) : adRating.push(false)
        }
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
                                    {adHost.map((host, index) =>
                                        <p key={index}>{host}</p>
                                    )}
                                </div>
                                <img src={adProps.host.picture} alt={`Photo propriétaire ${adProps.host.name}`} className="ad__hostpic" />
                            </div>
                            <div className="ad__rating">
                                {adRating.map((star, index) =>
                                    (star === true) ? (
                                        <FontAwesomeIcon key={index} icon="fa-solid fa-star" className="icon" style={{ color: "#ff6060" }} />
                                    ) : (
                                        <FontAwesomeIcon key={index} icon="fa-solid fa-star" className="icon" style={{ color: "#e3e3e3" }} />
                                    )
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
    } else {
        return null
    }
}

export default Ad
