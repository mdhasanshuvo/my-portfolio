import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import hotel from '../assets/hotel-website.png';
import tech from '../assets/Tech.png';
import visa from '../assets/visa.png';

const projects = [
    {
        name: "Haven Hotel & Suites: A Hotel Booking Website",
        description: "A responsive and interactive website showcasing luxurious hotel services, amenities, and rooms to provide an exceptional online experience for users.",
        image: hotel,
        liveLink: "https://haven-hotel-and-suites.web.app",
        repoLink: "https://github.com/programming-hero-web-course2/b10a11-client-side-mdhasanshuvo",
    },
    {
        name: "Tech Discovery",
        description: "A product discovery platform inspired by Product Hunt, allowing users to explore, upvote, and review tech products with role-based access, secure authentication, and a membership subscription system.",
        image: tech, 
        liveLink: "https://tech-discovery-auth.web.app", 
        repoLink: "https://github.com/mdhasanshuvo/tech-discovery-client", 
    },    
    {
        name: "Visarena: Visa Navigator Portal",
        description: "A modern web application that simplifies the visa application process, offering features like requirement checks, application submission, and real-time tracking for hassle-free international travel.",
        image: visa,
        liveLink: "https://visarena-auth.web.app",
        repoLink: "https://github.com/programming-hero-web-course2/b10-a10-client-side-mdhasanshuvo",
    },
];

const Projects = () => {
    return (
        <div id="projects" className="py-16 sm:py-24 lg:py-32 px-8 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-4xl font-bold mb-10">My Projects</h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Project Image */}
                            <div className="relative h-96 overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full object-cover"
                                    initial={{ y: 0 }}
                                    animate={{ y: [-100, 0, -400] }}
                                    transition={{
                                        duration: 8, // Duration of animation
                                        repeat: Infinity, // Infinite loop
                                        ease: "linear", // Smooth scrolling
                                    }}
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex justify-center items-center h-full">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white text-3xl mr-4"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white text-3xl"
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex space-x-4 text-sm text-blue-600">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
