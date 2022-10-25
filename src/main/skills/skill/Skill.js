import React from 'react';
import style from './Skill.module.css'
const Skill = (props) => {
    return (
        <div className={style.skill__wrapper}>
            <div className={style.skill__header}></div>
            <div className={style.skill__text}>
                <h3>{props.title}</h3>
            </div>
            <span className={style.skill__desc}>
              {props.description}
            </span>
        </div>
    );
};

export default Skill;