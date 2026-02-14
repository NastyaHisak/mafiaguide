import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';



const SampleSlider = ({item}) => {
    const [modalImage, setModalImage] = useState(null);
    const openModal = (src) => {
        setModalImage(src);
    };

    const closeModal = () => {
        setModalImage(null);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='slider-wrapper' style={{width: '100%'}}>
            <Slider {...settings}>
                <div>
                    <video controls muted style={{ width: '100%', height: 'auto' }}>
                        <source src={item.slider.video} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>

                {item.slider.img.map((imgSrc, index) => (
                    <div key={index} onClick={() => openModal(imgSrc)}>
                        <img src={imgSrc} alt={`Слайд ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Slider>

            {modalImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={modalImage} alt="Modal" />
                </div>
            )}
        </div>
    );
};

export default SampleSlider;
