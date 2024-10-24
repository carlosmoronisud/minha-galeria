import React from 'react';
import ImageCarousel from './ImageCarousel';

const Galery = ({ monthIndex, imageUrls }) => {
    return (
        <div className="galery">           
            <ImageCarousel images={imageUrls} />
        </div>
    );
};

export default Galery;
