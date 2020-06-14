import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../normalize.css";
import "../main.scss";
import "./slider_manager";
import {FooterMain} from "./contact";
import {Header} from "./offer";

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


const AboutUs = () => {

    return (
        <div className="mainONas">
            <article className="info_ONas">
                <h2 className="h2Text" style={{margin:"10px 0px"}}>O mnie</h2>
                <img className="box_image_ONas" src="images/agnetTest.jpeg" alt="Slider" style={{width:"200px"}}/>
                    <p className="pClassONas">Z wykształcenia jest fizjoterapeutą z prawem wykonywania zawodu 7658776. W ramach swojej edukacji 
                    zdobyłam wykształcenie wyższe magisterskie w zakresie zarządzania i marketingu oraz fizjoterapii, gdzie skupiałam się głównie na 
                    aspektach związanych z autyzmem. W celu poszerzenia wiedzy z tego zakresu ukończyłam studia podyplomowe na studia podyplomowe o kierunku:
                     Diagnoza, terapia, edukacja osób z autyzmem oraz kursy na Certyfikowanego Specjalistę Terapii Neurotaktylnej – poziom 1. Doświadczenie 
                     praktyczne w zakresie fizjoterapii zdobyłam prowadząc turnusy teraputeczne organizowane 2 razy w roku przez Instytut dr. Swietlany 
                     Masgutowej dla dzieci z polski i zagranicy. Prowadzę także terapię w jednej z lubelskich Centrów Wsparcia Rozwoju. Przez wiele lat 
                     pracowałam jako Manadżer prowadząc duża placówkę handlową, ale osobiste potrzeby związane z poszukiwaniem najlepszych rozwiązań dla 
                     syna u którego zdiagnozowano kilka lat temu autyzm przyczyniły się do zmiany zawodu i związania się z obszarami w zakresie rehabilitacji
                      i terapii MNRI. To był dobry krok, gdyż jako otwarta i poszukująca najlepszych rozwiązań osoba odkryłam w sobie pasję i radość z pracy 
                      terapeuty. Zapraszam do kontaktu i skorzystania z moich doświadczeń zawodowych i rodzica dziecka z autyzmem.</p>
            </article>
        </div>
    )
}

function App() {
    return (
        <>
            <div className="container">
            <Header />
            <AboutUs/>
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
    AboutUs,
    FooterMain
};