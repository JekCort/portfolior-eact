import React from 'react';
import style from './Footer.module.css'
import Nav from "./nav/Nav";

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.footer__wrapper}>
                <h2>Evgen Kostenko</h2>
                <Nav/>
                <span>©copyright</span>
            </div>
        </div>
    );
};

export default Footer;