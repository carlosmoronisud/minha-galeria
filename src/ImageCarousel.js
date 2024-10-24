import React, { useState } from 'react';
import './ImageCarousel.css'; // Para estilo, se necessário

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next'); // Para controle da direção da animação
    const imagesPerPage = 3;

    const nextImages = () => {
        setDirection('next');
        setCurrentIndex((prevIndex) => 
            (prevIndex + imagesPerPage) >= images.length ? 0 : prevIndex + imagesPerPage
        );
    };

    const prevImages = () => {
        setDirection('prev');
        setCurrentIndex((prevIndex) => 
            (prevIndex - imagesPerPage < 0 ? images.length - imagesPerPage : prevIndex - imagesPerPage)
        );
    };

    const displayedImages = images.slice(currentIndex, currentIndex + imagesPerPage);

    return (
        <div className='carousel-container'>
            <button className="carousel-button-prev" onClick={prevImages}>&lt;</button>
            <div className="carousel">                
                <div className={`image-container ${direction}`}>
                    {displayedImages.map((image, index) => (
                        <img key={index} src={image} alt={`Imagem ${currentIndex + index + 1}`} />
                    ))}
                </div>
            </div>
            <button className="carousel-button-next" onClick={nextImages}>&gt;</button>
        </div>
    );
};

export default ImageCarousel;
