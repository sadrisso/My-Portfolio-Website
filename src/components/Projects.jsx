/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Projects = () => {

    const axiosInstance = useAxios()
    const [loading, setLoading] = useState(true)

    const { data } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axiosInstance.get("projects")
            setLoading(false)
            return res?.data
        }
    })

    console.log("Project data: ", data)


    return (
        <div className='bg-[#2A2C39]'>
            {
                loading ?
                    <div className='text-white text-center text-xl py-5'>
                        <p>Please Wait <br /> Projects Data Coming Soon</p>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                    :
                    <div>
                        <SectionTitle heading="projects" subHeading="all my best practice works here" />
                        <div className='container mx-auto p-5'>
                            {
                                data?.map((item, i) =>
                                    <div key={i} className="card lg:card-side bg-[#252734] text-white my-8">
                                        <figure className='md:w-[600px] md:h-[400px] p-5 md:p-10'>
                                            <img
                                                className='rounded-xl opacity-65'
                                                src={item?.projectImage}
                                                alt="Album" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-3xl">{item?.projectName}</h2>
                                            <p className='text-gray-500'>Please click the details button to view project details...</p>
                                            <div className="card-actions justify-end">
                                                <Link to={`/project/${item?._id}`}><button className="btn btn-neutral">Details</button></Link>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
            }

        </div>
    );
};

export default Projects;