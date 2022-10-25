import React from 'react';
import style from "./Projects.module.css";
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.projects__wrapper}>
                <h2>Projects</h2>
                <div className={style.projects__list}>
                    <Project name={'Name project'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos harum illum ipsa odio recusandae.'}/>
                    <Project name={'Name project'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos harum illum ipsa odio recusandae.'}/>

                </div>

            </div>
        </div>
    )
        ;
};

export default Projects;