/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const Projects = () => {

    const axiosInstance = useAxios()


    const { data } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axiosInstance.get("projects")
            return res?.data
        }
    })

    console.log("Project data: ", data)


    return (
        <div className='bg-[#2A2C39]'>
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
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Projects;