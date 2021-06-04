import React from 'react';

import api from '../assets/icons/api.svg';
import backend from '../assets/icons/backend.svg';
import algo from '../assets/icons/algo.svg';
import computer from '../assets/icons/computer.svg';
// import repair from '../assets/icons/repair.svg';
import puzzle from '../assets/icons/puzzle.svg';

import Skillcard from './Skillcard';

import { motion } from 'framer-motion';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "Posso construir um site SPA escalável usando HTML, CSS e React.js"
    },
    {
        icon: backend,
        title: "Backend Development",
        about: "Lidar com banco de dados, servidor, api usando Mysql"
    },
    {
        icon: api,
        title: "API Development",
        about: "Posso desenvolver uma API REST robusta usando Node.js"
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "Um solucionador de problemas diários na Unimed RSG"
    },
    {
        icon: puzzle,
        title: "UI/UX Designer",
        about: "Designer de interface de usuário minimalista usando o figma"
    },
    // {
    //     icon: repair,
    //     title: "Whatever",
    //     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, fugiat!"
    // }
]

const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <div className="about"
            variants={about_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h6 className="about__intro">
            Olá!! Me chamo Leoander Neves e sou apaixonado pelo o mundo da programação e desenvolvimento. <br />
            Atualmente trabalho como Analista de Sistemas, na Unimed Regional Sul Goiás. <br />
            Graduando no 8º período do curso de Sistemas de Informação e aluno da GoStack | Bootcamp online de NodeJS, ReactJS e React Native. 
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">O que eu tenho a oferecer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default About;