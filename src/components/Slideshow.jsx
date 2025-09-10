import { useEffect, useState } from "react"
import "../styles/slideshow.scss"

function Slideshow({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => {
        setCurrentSlide((slide) => (slide + 1) % slides.length)
    }
    const prevSlide = () => {
        setCurrentSlide((slide) => (slide - 1 + slides.length) % slides.length)
    }
    useEffect(() => {
        const imgElement = document.getElementById("image")
        if (imgElement) {
            imgElement.src = slides[currentSlide]
        }
    }, [currentSlide])

    return (
        <div className="slideshow">
            <img id="image" src={slides[currentSlide]} alt={`Photo ${currentSlide + 1}`} className="slideshow__image" />
            {slides.length > 1 ? (
                <div>
                    <span onClick={prevSlide} className="material-symbols-outlined slideshow__arrow--left">arrow_back_ios</span>
                    <span onClick={nextSlide} className="material-symbols-outlined slideshow__arrow--right">arrow_forward_ios</span>
                    <p className="slideshow__number">{`${currentSlide + 1}/${slides.length}`}</p>
                </div>
            ) : null
            }
        </div>
    )
}

export default Slideshow
