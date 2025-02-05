/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
    return (
        <div className='bg-[#2A2C39] pt-20 md:pt-28 min-h-[calc(100vh-65px)]'>
            <div>
                <SectionTitle heading="contact me" subHeading="reach me by email or phone" />
            </div>
            <div className='text-gray-400 py-6'>
                <div className="flex flex-col md:flex-row justify-evenly items-center text-center">
                    <div className="p-10 rounded-2xl w-full md:w-[300px] m-2 bg-[#252734]">
                        <i className="fa-solid fa-phone text-3xl mb-4"></i>
                        <h2 className="text-2xl uppercase">Phone</h2>
                        <p>+8801615997121</p>
                    </div>

                    <div className="p-10 rounded-2xl w-full md:w-[300px] m-2 bg-[#252734]">
                        <i className="text-3xl fa-solid fa-location-dot mb-4"></i>
                        <h2 className="text-2xl uppercase">Address</h2>
                        <p>Rangpur, Bangladesh</p>
                    </div>

                    <div className="p-10 rounded-2xl w-full md:w-[300px] m-2 bg-[#252734]">
                        <i className="text-3xl fa-solid fa-envelope mb-4"></i>
                        <h2 className="text-2xl uppercase">Email</h2>
                        <p>sadrisso2000@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;