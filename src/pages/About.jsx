/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Helmet } from 'react-helmet';


const About = () => {
    return (
        <div className='bg-[#2A2C39] pt-20 md:pt-28 min-h-[calc(100vh-65px)] '>
            <SectionTitle heading="about me" subHeading="all about myself"/>
            <p className='text-center w-2/3 mx-auto text-gray-400'>
                Hi, I am Shoeb Akter Drisso, a passionate web developer with a deep love for technology. My programming journey started with C++ in 2023, and since then, I have been exploring the world of web development, creating dynamic and user-friendly websites that people love to interact with. As a BBA student from Rangpur, I aim to bridge the gap between business and technology, making myself more efficient in this ever-evolving digital world.

                Beyond coding, I enjoy playing cricket, traveling, and cycling, which keep me refreshed and inspired. My ultimate goal is to build meaningful digital solutions and continuously grow as a developer.
            </p>
        </div>
    );
};

export default About;