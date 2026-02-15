import React, { useState } from 'react';
import './SignCard.css';

const SignCard = ({ sign }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  return (
    <div className={`sign-card ${isExpanded ? 'expanded' : ''}`}>
      {/* GIF контейнер */}
      <div className="sign-gif-container">
        <div className="gif-wrapper">
          <img 
            src={sign.gifUrl} 
            alt={sign.title}
            className="sign-gif"
            onLoad={() => setIsGifLoaded(true)}
            style={{ display: isGifLoaded ? 'block' : 'none' }}
          />
        </div>
      </div>

      {/* Контент карточки */}
      <div className="sign-content">
        <div className="sign-header">
          <h3 className="sign-title">{sign.title}</h3>
        </div>

        <p className="sign-description">
          {sign.description}
        </p>
      </div>

      {/* Декоративная подложка */}
      <div className="sign-card-glow"></div>
    </div>
  );
}

export default SignCard;