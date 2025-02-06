/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import axios from 'axios';

const SkillDetails = () => {

    const { id } = useParams()
    // const axiosInstance = useAxios()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get(`http://localhost:5000/skill/${id}`)
            .then(res => {
                setData(res?.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const { title, description, image } = data || {}


    return (
        <div className='pt-16 min-h-[calc(100vh-65px)] bg-[#2A2C39] text-gray-300'>
            {
                loading ?
                    <div>
                        <p>Please Wait...</p>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div> :
                    <div className='p-5'>
                        <img src={image} alt="" className='w-[400px] h-[300px]' />
                    </div>
            }
        </div>
    );
};

export default SkillDetails;