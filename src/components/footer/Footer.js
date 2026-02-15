// import "./style.css";
// import telegram from './../../img/icons/telegram.svg';

// const Footer = () => {
// 	return (
// 		<footer className="footer">
// 			<div className="container">
// 				<div className="footer__wrapper">
// 					<ul className="social">
// 						<li className="social__item">
// 							<a href="https://t.me/Nastya_Hisak" target="_blank" rel="noreferrer">
// 								<img src={telegram} alt="Link" />
// 							</a>
// 						</li>
// 					</ul>
// 					<div className="footer-text">
// 						<a href="tel:+375333941544">+375 (33) 394-15-44</a>
// 						<a href="mailto:hisak.nastya@gmail.com">hisak.nastya@gmail.com</a>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

// export default Footer;

import React from 'react';
import './style.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Главная', url: '/#home-section' },
    { name: 'Роли', url: '/#roles-section' },
    { name: 'Правила', url: '/#rules-section' },
    { name: 'Нарушения', url: '/#violations-section' },
    { name: 'FAQ', url: '/#faq-section' },
    { name: 'Блог', url: '/projects' }
  ];

  const scrollToSection = (url) => {
    if (url.startsWith('/#')) {
      const sectionId = url.replace('/#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = url;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Основное содержание футера */}
        <div className="footer-content">
          {/* Логотип */}
          <div className="footer-logo">
            <span className="logo-text">MAFIA</span>
            <span className="logo-subtext">RULES</span>
          </div>

          {/* Навигация */}
          <div className="footer-nav">
            <h3 className="footer-title">Навигация</h3>
            <ul className="footer-menu">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection(link.url)}
                  >
                    <span className="link-arrow">→</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Почта */}
          <div className="footer-contact">
            <h3 className="footer-title">Контакты</h3>
            <a href="mailto:info@mafiarules.ru" className="email-link">
              <span className="email-icon">✉️</span>
              <span>info@mafiarules.ru</span>
            </a>
          </div>
        </div>

        {/* Нижняя часть с копирайтом */}
        <div className="footer-bottom">
          <div className="copyright">
            <span>© {currentYear} MAFIARULES</span>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="footer-decoration">
          <div className="decoration-dot dot1"></div>
          <div className="decoration-dot dot2"></div>
          <div className="decoration-dot dot3"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
