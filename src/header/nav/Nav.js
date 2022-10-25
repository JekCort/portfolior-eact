import React from 'react';
import style from'./Nav.module.css'
const Nav = () => {
    return (
        <div className={style.nav}>
            <ul className={style.nav__list}>
                <li className={style.nav__item}>
                    <a href="!#" className={style.nav__link}>Home</a>
                </li>
                <li className={style.nav__item}>
                    <a href="!#" className={style.nav__link}>Skills</a>
                </li>
                <li className={style.nav__item}>
                    <a href="!#" className={style.nav__link}>Projects</a>
                </li>
                <li className={style.nav__item}>
                    <a href="!#" className={style.nav__link}>Contacts</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;