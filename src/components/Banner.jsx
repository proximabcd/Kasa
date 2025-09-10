import "../styles/banner.scss"

function Banner({ image, text }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <div className="banner__overlay"></div>
            <p className="banner__text">{text}</p>
        </div>
    )
}

export default Banner
