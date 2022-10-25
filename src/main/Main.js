import React from 'react';
import AboutMe from "./aboutMe/AboutMe";
import style from './Main.module.css'
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Work from "./work/Work";
import Contacts from "./contacts/Contacts";

const Main = () => {
    return (
        <div className={style.main}>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Work/>
            <Contacts/>
        </div>
    );
};

export default Main;