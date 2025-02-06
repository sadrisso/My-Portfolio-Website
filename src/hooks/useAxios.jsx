/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';

const useAxios = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://my-portfolio-server-sigma.vercel.app/',
    });

    return axiosInstance;
};

export default useAxios;