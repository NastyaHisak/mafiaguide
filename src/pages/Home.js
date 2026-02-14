import { Accordion } from '../components/Accordoin/Accordion';
import Roles from '../components/roles/Roles';
import Rules from '../components/rules/Rules';


const faqList = [
    {
        q: "Может ли Доктор лечить себя?",
        a: "Да, может. И это часто правильная тактика, особенно если вы чувствуете угрозу."
    },
    {
        q: "Что будет, если Мафия и Маньяк выберут одну и ту же жертву, но ее вылечит Доктор?",
        a: "Жертва выживет. Доктор нейтрализует любое убийство в эту ночь, независимо от источника."
    },
    {
        q: "Что если на голосовании два игрока набрали одинаковое количество голосов?",
        a: "Обычно в этом случае объявляется переголосование только между этими двумя кандидатами. Если и оно оканчивается ничьей, то ночь наступает без казни."
    }
];

const Home = () => {
    return (
        <>
            <main className="main">

                <div id="home-section" className="header">
                    <div className="header__wrapper">
                        <div className="header-content">
                                <div className="header__title title-1">Mafia Game Guide</div>
                                <div className="header-about__text">Руководство по правилам, ролям и стратегиям. <br></br>Изучите искусство обмана, дедукции и выживания.
                            </div>
                        </div>
                    </div>
                </div>

                <Roles/>
                <Rules/>
                {/* <div className="role main-block">
                    <div className="container">
                        <h2 className="title-2">РОЛИ</h2>
                        <div className="role-groups">
                            <div className="role-group role-red">
                                <h3 className="role-group__title title-2">КОМАНДА <strong style={{ color: '#ff4c29' }}>МИРНЫХ</strong></h3>
                                <div className="role-group__cards">
                                    <div className="role-card role-red__card">
                                        <img className="role-img" src={photo} alt="" />
                                        <div className="role-content">
                                            <div className="role-title">Мирный житель</div>
                                            <div className="role-descr">Сердце и основная сила города. У вас нет специальных способностей, но есть голос, логика и право голосовать. Ваша задача — анализировать речи, искать нестыковки и сообща с другими честными жителями вычислить и заголосовать Мафию</div>
                                        </div>
                                    </div>

                                    <div className="role-card role-red__card">
                                        <img className="role-img" src={photo} alt="" />
                                        <div className="role-content">
                                            <div className="role-title">Шериф</div>
                                            <div className="role-descr">Лидер и защитник города. Каждую ночь вы проверяете одного игрока на принадлежность к мафии (результат «красный» или «черный»). Ваша информация решает исход игры. Вам нужно остаться в живых как можно дольше и грамотно делиться своими догадками, не раскрывая себя раньше времени.</div>
                                        </div>
                                    </div>

                                    <div className="role-card role-red__card">
                                        <img className="role-img" src={photo} alt="" />
                                        <div className="role-content">
                                            <div className="role-title">Доктор</div>
                                            <div className="role-descr">Ангел-хранитель. Каждую ночь вы можете спасти одного игрока (включая себя) от убийства Мафии или Маньяка. Помните: вы не можете лечить одного и того же игрока две ночи подряд и всего можете сделать не более двух спасений за игру. Ваша интуиция спасает города.</div>
                                        </div>
                                        <span className="role-ex">городская мафия</span>
                                    </div>
                                </div>

                            </div>
                            <br></br>
                            <div className="role-group role-black">
                                <h3 className="role-group__title title-2">КОМАНДА <strong style={{ color: '#8c8c8c' }}>МАФИИ</strong></h3>
                                <div className="role-group__cards">
                                    <div className="role-card role-black__card">
                                        <img className="role-img" src={photo} alt="" />
                                        <div className="role-content">
                                            <div className="role-title">Мафия</div>
                                            <div className="role-descr"> Теневое братство. Вы играете за команду Зла. Вы знаете своих сообщников (и Дона). Ночью вы просыпаетесь и совместно решаете, кого устранить. Ваша задача — скрывать свою истинную природу, имитировать мирного жителя и постепенно сокращать численность города.</div>
                                        </div>
                                    </div>

                                    <div className="role-card role-black__card">
                                        <img className="role-img" src={photo} alt="" />
                                        <div className="role-content">
                                            <div className="role-title">Дон</div>
                                            <div className="role-descr">Мозг преступного мира. Вы — мафия с особой властью. Ночью, после того как мафия сделала выбор жертвы, вы можете проверить одного игрока на Шерифа. Ведущий подтвердит или опровергнет ваши подозрения. Это знание помогает вам либо устранить угрозу, либо запутать город.</div>
                                        </div>
                                    </div>

                                    <div className="role-card role-black__card">
                                        <img className="role-img" src={photo} alt="" />
                                        <div className="role-content">
                                            <div className="role-title">Леди</div>
                                            <div className="role-descr">Соблазнительница. Ночью вы можете заблокировать любого игрока. Заблокированный в эту ночь лишается своей способности (Шериф не проверяет, Доктор не лечит, Маньяк не убивает). Не можете блокировать одного и того же игрока две ночи подряд. Вы играете на стороне Мафии, но не знаете, кто они. Ваша задача — помогать им, дезориентируя город.</div>
                                        </div>
                                        <span className="role-ex">городская мафия</span>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="role-group role-neutral">
                                <h3 className="role-group__title title-2">ОДИНОЧНЫЙ ИГРОК</h3>
                                <div className="role-card role-neutral__card">
                                    <img className="role-img" src={photo} alt="" />
                                    <div className="role-content">
                                        <div className="role-title">Маньяк</div>
                                        <div className="role-descr">Вы играете против всех. Ваша цель — остаться последним выжившим в игре. Ночью вы независимо от других убиваете одного человека. Шериф не может проверить вас как Мафию (вы будете «чисты»). Ваша тактика — балансировать между городом и мафией, сея хаус и сокращая количество игроков.</div>
                                    </div>
                                    <span className="role-ex">городская мафия</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="fall main-block">
                    <div className="container">
                        <h2 id="violations-section" className="title-2">НАРУШЕНИЯ ПРАВИЛ</h2>
                        <div className="fall-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aliquid saepe deserunt, illo at labore! Molestiae provident deleniti, vel numquam, repellendus vero reiciendis omnis, pariatur quibusdam dolore sit iure minus.</div>
                    </div>
                </div>
                <div id="faq-section" className="faq main-block">
                    <div className="container">
                        <h2 className="title-2">FAQ</h2>
                        <Accordion faqList={faqList} />
                    </div>
                </div>

            </main >
        </>
    );
}

export default Home;
