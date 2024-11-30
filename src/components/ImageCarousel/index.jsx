import React, { useState } from "react";
import './style.scss';

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % images.length)
    }
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length            
        )
    }

    return (
        <div className="image-carousel">
            {images.length > 1 && (
                <>
                <button className="carousel-button prev" onClick={prevImage}>∟</button>
                <button className="carousel-button next" onClick={nextImage}>∟</button>
                </>
            )}
            <img src={images[currentIndex]} alt={`Logement ${currentIndex + 1}`}
            className="carousel-image" />
            <div className="image-counter">
                {currentIndex + 1}/{images.length}
            </div>         
        </div>
    )

}

export default ImageCarousel