import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import "../styles/rating.scss"

library.add(fas, far, fab)

function Rating({ rating }) {
    const stars = Array(5).fill(0)
    const colors = {
        red: "#ff6060",
        grey: "#e3e3e3"
    }

    return (
        <div className="rating">
            {stars.map((star, index) => (
                <FontAwesomeIcon
                    key={index} icon="fa-solid fa-star" className="icon"
                    style={{ color: `${(rating) > index ? colors.red : colors.grey}` }}
                />
            ))}
        </div>
    )
}

export default Rating
