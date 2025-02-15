/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const links = <div className='flex gap-4 text-black md:text-white'>
        <Link to="/"><li><a>Home</a></li></Link>
        <Link to="/about-me"><li><a>About Me</a></li></Link>
        <Link to="/contact-me"><li><a>Contact Me</a></li></Link>
    </div>


    return (
        <div>
            <div className="navbar text-white fixed z-10 bg-black opacity-45 h-16 w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/"><a className="btn btn-xs md:btn-lg btn-ghost text-xl">Shoeb Akter Drisso</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/contact-me"><a className="btn btn-xs md:btn-lg">Hire Me</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;