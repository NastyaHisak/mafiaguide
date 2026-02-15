import React, { useState } from 'react';
import './Violations.css';

const Violations = () => {
  const [activeViolation, setActiveViolation] = useState('foul');

  const violations = {
    foul: {
      id: 'foul',
      title: 'ФОЛ',
      description: 'Нарушение, которое не приводит к немедленному удалению, но влияет на игровой процесс.',
      icon: '⚠️',
      color: '#f59e0b',
      examples: [
        'Речь не в свою минуту на дневном обсуждении',
        'Излишняя жестикуляция, отвлекающая других участников игры',
        'Любая жестикуляция во время процедуры голосования',
        'Касание другого игрока',
        'Крики за игровым столом',
        'Отрыв руки на голосовании от игрового стола',
        'Некорректные высказывания и неэтичное поведение по отношению к другим игрокам вправе наказываться ведущим фолом или удалением участника из игры'
      ],
      consequences: 'Предупреждение (фол) от ведущего. Игрок, набравший три замечания, в следующем дневном обсуждении лишен возможности высказаться, имеет право только на выставление кандидатуры и голосование. Игрок, набравший 4 фола, должен немедленно покинуть игровой стол без права последнего слова.'
    },
    ejection: {
      id: 'ejection',
      title: 'УДАЛЕНИЕ',
      description: 'Серьезное нарушение, за которое игрок немедленно покидает игру.',
      icon: '❌',
      color: '#ef4444',
      examples: [
        'Оскорбление других игроков или ведущего',
        'Мат за игровым столом (в т ч. невербальные аналоги)',
        'Слёзы за игровым столом',
        'Неспортивное поведение (агрессия, скандалы)',
        'Игрок набрал 4 фола',
        'Произнесение игроком в речи фраз «Клянусь», «Зуб даю», «Отвечаю», жестикуляция, соответствующая этим фразам',
        'За любую преднамеренную попытку подсмотреть во время ночи',
        'Жестикуляция, разговоры, касания других игроков после объявления ведущим этапа ночь и на всем его протяжении'
      ],
      consequences: 'Немедленное удаление из игры. Голосование в ближайший (текущий) день не проводится.'
    },
    ppk: {
      id: 'ppk',
      title: 'ППК',
      description: 'Победа противоположной команды. Грубое нарушение правил игры, при котором команде соперников незамедлительно присуждается победа',
      icon: '🏆',
      color: '#8b5cf6',
      examples: [
        'Договорная игра',
        'Грубое нарушение этики (дискриминационные высказывания)',
        'Физическое воздействие на других игроков'
      ],
      consequences: 'Команде нарушителя засчитывается техническое поражение, игра завершается.'
    }
  };

  return (
    <div className="violations-container">
      <h2 id="violations-section" className="title-2">НАРУШЕНИЯ ПРАВИЛ</h2>
      <div className="violations-subtitle">Виды нарушений и санкции в мафии</div>

      {/* Переключатель видов нарушений */}
      <div className="violation-tabs">
        <button
          className={`violation-tab ${activeViolation === 'foul' ? 'active' : ''}`}
          onClick={() => setActiveViolation('foul')}
          style={{ '--tab-color': violations.foul.color }}
        >
          <span className="tab-icon">{violations.foul.icon}</span>
          <span className="tab-title">ФОЛ</span>
          <span className="tab-badge">Предупреждение</span>
        </button>
        
        <button
          className={`violation-tab ${activeViolation === 'ejection' ? 'active' : ''}`}
          onClick={() => setActiveViolation('ejection')}
          style={{ '--tab-color': violations.ejection.color }}
        >
          <span className="tab-icon">{violations.ejection.icon}</span>
          <span className="tab-title">УДАЛЕНИЕ</span>
          <span className="tab-badge">Дисквалификация</span>
        </button>
        
        <button
          className={`violation-tab ${activeViolation === 'ppk' ? 'active' : ''}`}
          onClick={() => setActiveViolation('ppk')}
          style={{ '--tab-color': violations.ppk.color }}
        >
          <span className="tab-icon">{violations.ppk.icon}</span>
          <span className="tab-title">ППК</span>
          <span className="tab-badge">Техническое поражение</span>
        </button>
      </div>

      {/* Контент выбранного нарушения */}
      <div className="violation-content">
        <div className="violation-header">
          <div className="violation-icon-wrapper" style={{ backgroundColor: violations[activeViolation].color + '20' }}>
            <span className="violation-icon">{violations[activeViolation].icon}</span>
          </div>
          <div className="violation-header-text">
            <h3 className="violation-name">{violations[activeViolation].title}</h3>
            <p className="violation-quote">{violations[activeViolation].description}</p>
          </div>
        </div>

        <div className="violation-severity">
          <div className="severity-indicator" style={{ backgroundColor: violations[activeViolation].color }}></div>
          <span className="severity-text">
            {activeViolation === 'foul' ? 'Легкое нарушение' : 
             activeViolation === 'ejection' ? 'Серьезное нарушение' : 'Критическое нарушение'}
          </span>
        </div>

        <div className="violation-section">
          <h4 className="section-title">📋 Примеры нарушений</h4>
          <ul className="examples-list">
            {violations[activeViolation].examples.map((example, index) => (
              <li key={index} className="example-item">{example}</li>
            ))}
          </ul>
        </div>

        <div className="violation-section">
          <h4 className="section-title">⚖️ Последствия</h4>
          <div className="consequences-card">
            <p className="consequences-text">{violations[activeViolation].consequences}</p>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="violation-footer">
          <p className="footer-note">
            <span className="note-icon">ℹ️</span>
            Все решения о нарушениях принимаются ведущим.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Violations;