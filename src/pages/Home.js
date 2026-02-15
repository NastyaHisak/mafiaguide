import { Accordion } from '../components/Accordoin/Accordion';
import Roles from '../components/roles/Roles';
import Rules from '../components/rules/Rules';
import Violations from '../components/violations/Violations';


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

                <Violations/>
                
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
