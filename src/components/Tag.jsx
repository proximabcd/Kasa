import "../styles/tag.scss"

function Tag({ tag }) {
    return (
        <div className="tag">
            {tag.map((tag, index) => (
                <p key={index} className="tag__item">{tag}</p>
            ))}
        </div>
    )
}

export default Tag
