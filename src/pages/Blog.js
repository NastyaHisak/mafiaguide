import React, { useState } from 'react';
import './Blog.css';

const Blog = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Обрезаем текст для превью
  const previewText = post.content.substring(0, 300) + '...';

  return (
    <article className={`blog-card ${isExpanded ? 'expanded' : ''}`}>
      {/* Заголовок карточки */}
      <div className="blog-card-header">
        <div className="blog-card-title-section">
          <h2 className="blog-card-title">{post.title}</h2>
          <div className="blog-card-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-date">{post.date}</span>
            <span className="blog-read-time">{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Контент */}
      <div className="blog-card-content">
        <p className="blog-text">
          {isExpanded ? post.content : previewText}
        </p>
        
        {/* Блок с советами (только в развернутом виде) */}
        {isExpanded && post.tips && (
          <div className="blog-tips">
            <h4 className="tips-title">💡 Рекомендации:</h4>
            <ul className="tips-list">
              {post.tips.map((tip, index) => (
                <li key={index} className="tip-item">{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Кнопка "Читать далее" */}
      <button 
        className="blog-read-more"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{isExpanded ? 'Свернуть' : 'Читать далее'}</span>
        <span className={`read-more-arrow ${isExpanded ? 'expanded' : ''}`}>→</span>
      </button>
    </article>
  );
}

export default Blog;