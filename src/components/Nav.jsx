import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
    const menuItems = (
        <>
            <li>
                <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer" offset={-70}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500} className="cursor-pointer" offset={-70}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer" offset={-70}>
                    Projects
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer" offset={-70}>
                    Contact
                </Link>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-md">
            {/* Max width container */}
            <div className="max-w-7xl mx-auto">
                <div className="navbar">
                    {/* Navbar Start */}
                    <div className="navbar-start">
                        {/* Dropdown for Small Screens */}
                        <div className="dropdown">
                            <button tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow mt-3 w-52 p-2"
                            >
                                {menuItems}
                            </ul>
                        </div>
                        <a
                            className="btn btn-ghost text-base sm:text-xl font-bold text-primary cursor-pointer"
                        >
                            Mohammed Hasan
                        </a>
                    </div>

                    {/* Navbar Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end">
                        <a
                            href="https://drive.google.com/file/d/1DUrlguUIQM0Qg20KN4dqKtL33PHPCIf3/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn btn-primary transform transition hover:scale-105 p-2 sm:p-4">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
