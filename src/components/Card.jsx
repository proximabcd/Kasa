import "../styles/card.scss"

function Card({ title, cover }) {
    return (
        <div className="card">
            <img src={`${cover}`} alt={`Photo ${title}`} className="card__image" />
            <p className="card__text">{title}</p>
        </div>
    )
}

export default Card
