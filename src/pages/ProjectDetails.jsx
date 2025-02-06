/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {

    const { id } = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://my-portfolio-server-sigma.vercel.app/project/${id}`)
            .then(res => {
                console.log(res?.data)
                setData(res?.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const { projectName, projectImage, description, liveLink, githubLink } = data || {}

    return (
        <div className='pt-16 bg-[#2A2C39] text-gray-300 min-h-[calc(100vh-65px)]'>
            {
                loading ?
                    <div>
                        <p>Please Wait...</p>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                    :
                    <div className='flex flex-col md:flex-row gap-2 md:justify-evenly items-center px-5 md:px-20 pt-2 md:pt-10'>
                        <div className='p-5'>
                            <img src={projectImage} className='w-[400px] h-[300px] opacity-60' alt="" />
                        </div>
                        <div className='p-5 bg-[#252734]'>
                            <h1 className='text-2xl'>Project Name: <span className='font-semibold'>{projectName}</span></h1>
                            <p className='my-2'>{description}</p>
                            <hr />
                            <div className='flex flex-col md:flex-row justify-between'>
                                <div className='my-4'>
                                    <h2 className='font-semibold'>Technology Used: </h2>
                                    {
                                        data?.mainTechnologyStack?.map((item, i) =>
                                            <ul key={i}>
                                                <li>{item}</li>
                                            </ul>)
                                    }
                                </div>
                                <div className='my-4 md:mt-10'>
                                    <p><span className='font-semibold'>Live Link:</span> <a className='hover:text-orange-600' href={liveLink}>{liveLink}</a></p>
                                    <p><span className='font-semibold'>Github Link:</span> <a className='hover:text-orange-600' href={githubLink}>{githubLink}</a></p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex flex-col md:flex-row-reverse justify-between my-4 gap-4'>
                                <div className=''>
                                    <p className='font-semibold'>Challenges: </p>
                                    {
                                        data?.challenges?.map((item, i) =>
                                            <ul key={i}>
                                                <li>{item}</li>
                                            </ul>)
                                    }
                                </div>
                                <div className='mt-4 md:mt-2'>
                                    <p className='font-semibold'>Potential improvements and future plans for the project: </p>
                                    {
                                        data?.futurePlans?.map((item, i) =>
                                            <ul key={i}>
                                                <li>{item}</li>
                                            </ul>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProjectDetails;