import React from 'react';

import Bar from './Bar';

import react from '../assets/icons/react.svg';

import { motion } from 'framer-motion';

const languages = [
    {
        icon: react,
        name: 'JavaScript',
        level: '50'
    },
    {
        icon: react,
        name: 'React',
        level: '35'
    },
    {
        icon: react,
        name: 'React Native',
        level: '30'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '70'
    },
];

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: '60',
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '30',
    },
    {
        icon: react,
        name: 'Illustrator',
        level: '30',
    },
];

const Resume = () => {
    const resume_variants = {
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
        <motion.div className="container resume"
            variants={resume_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Formação
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Sistemas de Informação
                        </h5>
                        <p className="resume-card__name">
                            Iles Ulbra - 2017/2021
                        </p>
                        <p className="resume-card__details">Envolvimentos em projetos de desenvolvimentos e simpósios de tecnologia</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Experiência
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Analista de Sistemas
                        </h5>
                        <p className="resume-card__name">
                            Unimed RSG - 12/2020 - Atualmente 
                        </p>
                        <p className="resume-card__details">
                            Responsável por realizar a parametrização elaboração, implementação e gerenciamento dos sistemas
                        </p>
                    </div>
                </div>
            </div>
        
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Linguagens e Frameworks
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Ferramentas e Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool =>
                                <Bar value={tool} />
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Resume;