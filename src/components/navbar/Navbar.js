import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: isScrolled ? 'rgba(26, 26, 26, 0.9)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    transition: 'all 0.3s ease'
  };

	return (
		<nav className="nav" style={navbarStyle}>
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
					MAFIARULES
						{/* Maf<strong style={{color: '#ff4c29'}}>Know</strong> */}
					</NavLink>

					{/* <BtnDarkMode /> */}

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Главная
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/signs"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Жесты
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/projects"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Блог
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;



// import React, { useState, useEffect } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);


//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Функция для плавного скролла к секции
//   const scrollToSection = (sectionId, linkName) => {
//     setActiveLink(linkName);
//     setIsMenuOpen(false);
    
//     if (sectionId === 'blog') {
//       // Для блога переходим на другую страницу
//       window.location.href = '/projects';
//       return;
//     }

//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offsetTop = element.offsetTop - 80; // Учитываем высоту navbar
//       window.scrollTo({
//         top: offsetTop,
//         behavior: 'smooth'
//       });
//     }
//   };

//   // Массив пунктов меню
//   const navItems = [
//     { id: 'home', label: 'Главная', section: 'home-section' },
//     { id: 'roles', label: 'Роли', section: 'roles-section' },
//     { id: 'rules', label: 'Правила', section: 'rules-section' },
//     { id: 'violations', label: 'Нарушения', section: 'violations-section' },
//     { id: 'faq', label: 'FAQ', section: 'faq-section' },
//     { id: 'blog', label: 'Блог', section: 'blog' } // blog - отдельная страница
//   ];

//   return (
//     <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="navbar-container">
//         {/* Логотип/название */}
//         <div className="navbar-logo">
//           <span className="logo-text">MAFIARULES</span>
//           <div className="logo-glow"></div>
//         </div>

//         {/* Десктопная навигация */}
//         <div className="navbar-menu">
//           <div className="nav-items-container">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 className={`nav-item ${activeLink === item.id ? 'active' : ''}`}
//                 onClick={() => scrollToSection(item.section, item.id)}
//               >
//                 <span className="nav-item-text">{item.label}</span>
//                 <span className="nav-item-indicator"></span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Бургер-меню для мобильных */}
//         <div 
//           className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span className="burger-line"></span>
//           <span className="burger-line"></span>
//           <span className="burger-line"></span>
//         </div>

//         {/* Мобильная навигация */}
//         <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
//           <div className="mobile-menu-content">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 className={`mobile-nav-item ${activeLink === item.id ? 'active' : ''}`}
//                 onClick={() => scrollToSection(item.section, item.id)}
//               >
//                 {item.label}
//                 <span className="mobile-item-arrow">→</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





