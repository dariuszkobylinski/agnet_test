import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
import {FooterMain, ContactForm} from "./contact";




const BurgerClick = (e) => {
    let burgerEvent=document.querySelector(".classItem");
    e.preventDefault();
         console.log(burgerEvent.style);
    if (burgerEvent.style.visibility==="hidden" || burgerEvent.style.visibility==="") {
        burgerEvent.style.visibility="visible"; 
    }
    else {

        burgerEvent.style.visibility="hidden";
    };   
}
      
const Header = () => {
    return (
        <header className="page-header">
                <div className="slider">
                        <img className="box_image_slider visible" src={"images/flowers-2562079_1920.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/hands-2847508_1920.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/flowers-2562079_1920.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/hands-2847508_1920.jpg"} alt="Slider"/>
                </div>
                <div className="classLogoContact">

                <div className="contact">

                    <p className="text_contact">Zadzwoń lub napisz<br></br>+48 501 ... ...<br></br><a href="mailto:">info@agnet-fiziterapia.pl</a></p>
                </div>  
                <div className="page-logo">
                    <a href="../index.html" style={{height: "0px"}}>
                        <img className="box_image" src={"images/logo_2.png"} alt="Logo"/>
                    </a>
                </div>
                </div>
            
            <nav className="page-nav">
                <div className="burger" onClick={BurgerClick}>
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                </div>
                <ul className="classItem">
                    <li className="classLink">
                        <a href="ONas.html" className="classLinkHref" target="_parent">O mnie</a>
                    </li>
                    <li className="classLink">
                        <a href="index.html" className="classLinkHref" id="keyPageWord"
                           target="_parent" style={{color:"darkorange"}}>Oferta</a>
                    </li>
                    <li className="classLink">
                        <a href="Kontakt.html" className="classLinkHref" target="_parent">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
        )
};

const MainPricing = () => {
    return (
        <div className="mainPricing" style={{padding:"0px"}}>
            <article className="info_Pricing">
                <h2 className="h2Text" style={{padding:"10px", display:"none"}}>Lorem ipsum dolor sit amet.</h2>
                <img className="classPricing" src="images/pricing.png"/>
            </article>
        </div>
    )
};

const Main = () => {
    return (
        <>
        <article className="info" style={{fontSize:"0.9em", lineHeight:"1.35", color:"black"}}>
        Poszukujesz terapii dla siebie bądź dla Twoich bliskich? Dobrze trafiłeś, na tej stronie znajdziesz niezbędne informacje o metodzie bazującej na 
        odruchach, którą stosuję. Poniżej znajdziesz więcej szczegółów, a w razie jakikolwiek pytań zostańmy w kontakcie.
        </article>
        <div className="main">
            <article className="info" style={{fontSize:"0.9em", lineHeight:"1.35"}}>
                <h2 className="h2Text" style={{fontSize:"1.2em"}}>Jak powstała terapia MNRI i do kogo jest kierowana</h2>
                Terapie prowadzone przez mnie opierają się na Neurosensomotorycznej Integracji Odruchów wg dr Masgutowej (zwana również MNRI - Masgutova 
                neurosensorimotor reflex integration) i jest to interdyscyplinarny program terapeutyczno-rehabilitacyjny. Metoda została opracowana dr 
                Swietlanę Masgutową, która jest doktorem psychologii rozwojowej i edukacyjnej oraz Dyrektorem Międzynarodowego Instytutu dr Swietlany 
                Masgutowej prowadzonego w Polsce i Stanach Zjednoczonych. Absolwentka Instytutu Psychologii Ogólnej i Rozwojowej Rosyjskiej Akademii Edukacji 
                i autorka ponad 100 prac naukowo-praktycznych. Założeniem metody jest usprawnianie zaburzonych schematów odruchów uniemożliwiających harmonijny 
                rozwój motoryczny, sensomotoryczny, poznawczy. Szczególnie zalecana jest dla pacjentów z: <br></br>
                    • autyzmem i spektrum autyzmu, <br></br>
                    • uszkodzeniami mózgu i porażeniem mózgowym,<br></br>
                    • nadpobudliwością psychoruchową (ADHD i ADD),<br></br>
                    • lękami i fobiami,<br></br>
                    • opóźnieniem i zaburzeniami mowy,<br></br>
                    • stresem pourazowym,<br></br>
                    • trudnościami w nauce i dysleksji. <br></br>
                Ze wspomnianego programu korzystają specjaliści w ponad 40 krajach na świecie, a jego twórczyni za skuteczną pracę i entuzjazm otrzymała 12 
                nagród i wyróżnień uniwersyteckich Rosyjskiej Akademii Edukacyjnej. W 1996 roku została uhonorowana międzynarodową nagrodą Fundacji 
                Kinezjologii Edukacyjnej w Stanach Zjednoczonych a w roku 2007 publikacja „You Are a Winner - Trauma Recovery – A New Choise Trough Natural 
                Development Movement” otrzymała nagrodę stanową (USA) Iowa 2007” Wydawnictwa 1-st World Publishing.
            </article>
            <article className="info" style={{fontSize:"0.9em", lineHeight:"1.35"}}>
                <h2 className="h2Text" style={{fontSize:"1.2em"}}>Opis metody</h2>
                Terapia MNRI jest unikalną metodą stosowaną w leczeniu dzieci i dorosłych na całym świecie, a w szczególności zyskała popularność w Stanach 
                Zjednoczonych. Jej stosowanie wspiera rozwój psychoruchowy, zaburzenia narządów mowy i słuchu oraz koordynację psychoruchową. Najnowsze 
                badania naukowe przeprowadzone przez niezależne laboratoria w USA dowodzą skuteczność metody, m. in. wpływ na detoksykację mózgu, poprawia 
                pracę fal mózgowych, reguluje pracę neurotransmiterów, wpływa na obniżenie stresu, co wpływa pozytywnie na funkcjonowanie całego organizmu. 
                Metoda wspiera rozwój dzieci, młodzieży i dorosłych a jej główne założenia bazują na usprawnianiu zaburzonych schematów odruchów 
                uniemożliwiających harmonijny rozwój motoryczny, sensomotoryczny, poznawczy.
                Terapia MNRI to fundamentalny i pierwszy krok we wczesnej interwencji dzieci 
                z zaburzeniami neurozowojowymi a jej głównym celem na który skupiam się podczas terapii to: <br></br>
                    • stymulacja zmysłu dotyku i pripriocepcji, <br></br>
                    • integracja odruchów dynamicznych i postularnych, <br></br>
                    • integracja półkul,<br></br>
                    • tworzenie i torowanie spontanicznych, fizjologicznych reakcji adaptacyjnych poprawiających funkcjonowanie i integrację reakcji 
                    wywołanych przez bodźce,<br></br>
                    • rozwój bazowych oraz całościowych schematów ruchowych,<br></br>
                    • kształtowanie się postawy i struktury ciała,<br></br>
                    • regulacja stresu<br></br>
            </article>
            <article className="info" style={{fontSize:"0.9em", lineHeight:"1.35"}}>
                <h2 className="h2Text" style={{fontSize:"1.2em"}}>Efekty po wdrożeniu terapii</h2>
                Jak pisałem w zakładce o Mnie jestem mamą Kacpra u którego został zdiagnozowany autyzm. Zanim do tego doszło poszukiwałam pomocy w różnych 
                instytucjach od … do. Mimo dużego wysiłku i poświęconego czasu osiągnęłam bardzo słabe efektyw rozwoju dziecka. W roku 2009 rozpoczęłam 
                terapię MNRI z synem, po upływie kilku miesięcy efekty były imponujące a życie mojego dziecka stało się prostsze. Poniżej przedstwiam 
                przykłady zmian jakie udało Nam się osiągnąć. Zaobserwowane zmiany:
                Kokontrakcja, czyli uruchamianie mięśni do siły bodźca <br></br>
                od: Miał trudności z dostosowaniem reakcji, uruchamiał po ok. 10 sek do: Nie stawiał oporu <br></br>
                Test palce-kciuk<br></br>
                    od: Nie odtwarzał prawidłowej sekwencji ruchu, nie stykał palców częściami dystalnymi do: Gubił sekwencję ruchu, omijał palec serdeczny
                    Rotacja przedramion
                    Ruchy szarpane, nadmiar i niepełny zasięg
                    Wykonał 5 pełnych ruchów, prawą ręką w ciągu 10 sek., lewą 3 ciągu 10 sek. Obiema nie potrafił. Wynik poniżej normy wiekowej, (w normie 8 ruchów/10 sek.)     
            </article>
            <article className="info" style={{fontSize:"0.9em", lineHeight:"1.35"}}>
                <h2 className="h2Text" style={{fontSize:"1.2em"}}>Cennik</h2>
                <img className="classPricing" src="images/pricing.png" style={{width:"80%", alignItems:"center"}}/>
            </article>
        </div>
        </>
    )
};
function App() {
    return (
        <>
            <div className="container">
            <Header />
            <Main/>
            <ContactForm/>
            <FooterMain/>
            </div>
        </>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById("app")
);
export {
    App,
    Header,
    Main,
    FooterMain,
    BurgerClick
};