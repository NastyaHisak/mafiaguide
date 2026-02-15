import { useState } from 'react';
import './Roles.css';
import role01 from "./../../img/projects/civian.png";
import role02 from "./../../img/projects/detective.png";
import role03 from "./../../img/projects/doctor.png";
import role04 from "./../../img/projects/mafia.png";
import role05 from "./../../img/projects/don.png";
import role06 from "./../../img/projects/lady.png";
import role07 from "./../../img/projects/neutral.png";


const Roles = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Данные ролей с путями к изображениям
  const roles = {
    peaceful: [
      {
        id: 1,
        name: 'Мирный житель',
        image: role01,
        description: 'Обычный горожанин. Цель - выжить и вычислить мафию.',
        team: 'peaceful',
        color: '#374151'
      },
      {
        id: 2,
        name: 'Шериф',
        image: role02,
        description: 'Может проверять игроков ночью на принадлежность к мафии.',
        team: 'peaceful',
        color: '#374151'
      },
      {
        id: 3,
        name: 'Доктор',
        image: role03,
        description: 'Лечит одного игрока за ночь, защищая от убийства.',
        team: 'peaceful',
        color: '#374151'
      }
    ],
    mafia: [
      {
        id: 4,
        name: 'Мафия',
        image: role04,
        description: 'Основной член мафии. Участвует в ночных убийствах.',
        team: 'mafia',
        color: '#374151'
      },
      {
        id: 5,
        name: 'Дон',
        image: role05,
        description: 'Глава мафии. Может проверять игроков на шерифа.',
        team: 'mafia',
        color: '#374151'
      },
      {
        id: 6,
        name: 'Красотка',
        image: role06,
        description: 'Может усыплять игроков, лишая их возможности действовать.',
        team: 'mafia',
        color: '#374151'
      }
    ],
    neutral: [
      {
        id: 7,
        name: 'Маньяк',
        image: role07,
        description: 'Играет сам за себя. Цель - остаться последним выжившим.',
        team: 'neutral',
        color: '#374151'
      }
    ]
  };

  // Получаем все роли
  const allRoles = [...roles.peaceful, ...roles.mafia, ...roles.neutral];

  // Выбираем роли для активного таба
const getCurrentRoles = () => {
    switch(activeTab) {
      case 'all': return allRoles;
      case 'peaceful': return roles.peaceful;
      case 'mafia': return roles.mafia;
      case 'neutral': return roles.neutral;
      default: return allRoles;
    }
  };

  const currentRoles = getCurrentRoles();

  // Тексты для команд
  const teamLabels = {
    peaceful: { label: 'Мирный', icon: '🛡️' },
    mafia: { label: 'Мафия', icon: '🔪' },
    neutral: { label: 'Нейтрал', icon: '🎭' }
  };

  return (
    <div className="mafia-cards-container">
      {/* Кинематографичный заголовок */}
      <div className="cinematic-header">
        <h1 id="roles-section" className="cinematic-title title-2">ИГРОВЫЕ РОЛИ</h1>
      </div>

      {/* Навигация в стиле фильма-нуар */}
      <div className="film-tabs">
        {[
          { id: 'all', label: 'Все персонажи', count: allRoles.length },
          { id: 'peaceful', label: 'Мирные', count: roles.peaceful.length },
          { id: 'mafia', label: 'Мафия', count: roles.mafia.length },
          { id: 'neutral', label: 'Одиночки', count: roles.neutral.length }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`film-tab ${activeTab === tab.id ? 'film-tab-active' : ''}`}
          >
            <span className="film-tab-text">{tab.label}</span>
            <span className="film-tab-count">{tab.count}</span>
            <div className="film-tab-underline"></div>
          </button>
        ))}
      </div>

      {/* Сетка карточек */}
      <div className="cinematic-grid">
        {currentRoles.map((role) => {
          const teamInfo = teamLabels[role.team];
          return (
            <div 
              key={role.id} 
              className="character-card"
            >
              {/* Основное изображение персонажа */}
              <div className="card-image-container">
                <div 
                  className="card-image"
                  style={{ 
                    backgroundImage: `url(${role.image})`,
                    backgroundColor: role.color + '20'
                  }}
                ></div>
                <div className="image-overlay"></div>
                
                {/* Эффект свечения команды */}
                <div 
                  className="team-glow"
                  style={{ backgroundColor: role.color }}
                ></div>
              </div>

              {/* Содержимое карточки */}
              <div className="card-content">
                {/* Команда персонажа */}
                <div className="character-team">
                  <span className="team-icon">{teamInfo.icon}</span>
                  <span className="team-label">{teamInfo.label}</span>
                </div>

                {/* Имя персонажа */}
                <h3 className="character-name">{role.name}</h3>

                {/* Описание (появляется при наведении) */}
                <div className="character-description">
                  <p>{role.description}</p>
                </div>

              </div>

              {/* Эффект выбора */}
              <div className="selection-ring"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Roles;