import React from 'react';
import style from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.about}>
                <div className={style.about__desc}>
                    <span>Hi There</span>
                    <h1>I am Evgen Kostenko</h1>
                    <p className={style.about__desc_text}>
                        Front-end Developer
                    </p>
                </div>
                <div className={style.about__img}>
                    <div>
                        <img src="https://img.novosti-n.org/upload/ukraine/925417.jpg" alt="my photo" className={style.about__img_photo}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutMe;