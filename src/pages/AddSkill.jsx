/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const AddSkill = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const skill = form.skill.value;
        const image = form.image.value;
        const description = form.description.value;

        const skillInfo = {skill, image, description}

        console.log(skillInfo)
    }


    return (
        <div>
            <div className="hero bg-[#2A2C39] min-h-[calc(100vh-65px)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='pt-10 md:pt-0 md:w-[500px]'>
                        <SectionTitle heading="add skill" subHeading="brand new skill" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="fieldset">
                                <div>
                                    <label className="fieldset-label">Skill</label>
                                    <input type="text" className="input" placeholder="Skill" name='skill'/>
                                </div>
                                <div>
                                    <label className="fieldset-label">Image</label>
                                    <input type="url" className="input" placeholder="Image" name='image'/>
                                </div>
                                <div>
                                    <label className="fieldset-label">Description</label>
                                    <input type="text" className="input" placeholder="Description" name='description'/>
                                </div>
                                <button className="btn btn-neutral mt-4">Add Skill</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSkill;