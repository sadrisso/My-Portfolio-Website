/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div>
            <div>
                <Hero />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Projects />
            </div>
        </div>
    );
};

export default Home;