import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [active, setActive] = useState('');

    useEffect(() => {
        let currentURL = window.location.href
        if (currentURL.endsWith('/'))
            setActive('Sobre')
        else if (currentURL.endsWith('/projects'))
            setActive('Projetos')
        else if (currentURL.endsWith('/resume'))
            setActive('Resumo')
    }, [active]);

    const navbar_variant = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="navbar"
            variants={navbar_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                {
                    active !== 'Sobre' &&
                    <Link to="/">
                        <div className="navbar__item" onClick={() => setActive('Sobre')}>Sobre</div>
                    </Link>
                }
                {
                    active !== 'Resumo' ?
                    <Link to="/resume">
                        <div className="navbar__item" onClick={() => setActive('Resumo')}>Resumo</div>
                    </Link> : null
                }
                {
                    active !== 'Projetos' &&
                    <Link to="/projects">
                        <div className="navbar__item" onClick={() => setActive('Projetos')}>Projetos</div>
                    </Link>
                }
            </div>
        </motion.div>
    );
}

export default Navbar;