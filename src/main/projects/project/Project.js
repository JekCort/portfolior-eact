import React from 'react';
import style from "./Project.module.css";
const Project = (props) => {
    return (
        <div className={style.project__body}>
            <div className={style.project__wrapper_btn}>
                <button className={style.project__btn}>Open</button>
            </div>

            <div className={style.project__desc}>
                <span className={style.project__name}>{props.name}</span>
                <span> {props.description}</span>
            </div>

        </div>
    );
};

export default Project;