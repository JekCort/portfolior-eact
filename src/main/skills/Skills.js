import React from 'react';
import Skill from "./skill/Skill";
import style from './Skills.module.css'

const Skills = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.skills}>
                <h2>My skills</h2>
                <div className={style.skills__container}>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem culpa, iste modi molestias obcaecati officia quasi? Accusamus, consequuntur et facilis impedit iure, libero officiis optio quaerat sequi sunt, unde?'}/>
                    <Skill title={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem culpa, iste modi molestias obcaecati officia quasi? Accusamus, consequuntur et facilis impedit iure, libero officiis optio quaerat sequi sunt, unde?'}/>
                    <Skill title={'TypeScript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem culpa, iste modi molestias obcaecati officia quasi? Accusamus, consequuntur et facilis impedit iure, libero officiis optio quaerat sequi sunt, unde?'}/>
                    <Skill title={'JavaScript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem culpa, iste modi molestias obcaecati officia quasi? Accusamus, consequuntur et facilis impedit iure, libero officiis optio quaerat sequi sunt, unde?'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem culpa, iste modi molestias obcaecati officia quasi? Accusamus, consequuntur et facilis impedit iure, libero officiis optio quaerat sequi sunt, unde?'}/>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem culpa, iste modi molestias obcaecati officia quasi? Accusamus, consequuntur et facilis impedit iure, libero officiis optio quaerat sequi sunt, unde?'}/>
                </div>
            </div>
        </div>

    );
};

export default Skills;
