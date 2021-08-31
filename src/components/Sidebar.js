import React from 'react';

// import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
// import tie from '../assets/icons/tie.svg';
import curriculo from '../assets/icons/curriculo.svg';
import linkedin from '../assets/icons/linkedin.svg';
import mightycoder from '../assets/mightycoder.svg';
import resume from '../assets/Leoander-Aparecido-Coelho-Neves.docx';

import { motion } from 'framer-motion';

const Sidebar = () => {

    const sidebar_variant = {
        hidden: {
            x: '-20vw',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }  
    }

    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Leoander <span>Neves</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>

            <a href={resume} download="Leoander-Aparecido-Coelho-Neves.docx">
                <div className="sidebar__item sidebar__resume">
                    <img src={curriculo} alt="curriculo" className="sidebar__icon" /> Download CV
                </div>
            </a>

            <figure className="sidebar__social-icons">
                <a href="https://www.linkedin.com/in/leoander-neves-326106186/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/leoanderneves/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" className="sidebar__icon mt-1" /></a>
            </figure>

            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/leoander01" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="sidebar__icon mr-3 mb-1" />Github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-2" />
                    Goiás, Brasil
                </div>
                <div className="sidebar__item mt-3">leoanderneves8@outlook.com</div>
                {/* <div className="sidebar__item">leoanderneves8@outlook.com</div> */}
            </div>
            <div className="sidebar__item sidebar__email">
                <a href="mailto:leoanderneves8@outlook.com">Enviar e-mail</a>
            </div>
        </motion.div>
    );
}

export default Sidebar;