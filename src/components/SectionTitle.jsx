/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center py-10 text-white'>
            <p className='text-gray-500'>---{subHeading}---</p>
            <h1 className='text-xl md:text-3xl uppercase'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;