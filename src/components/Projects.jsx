import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import pocketbossImg from '../assets/pocketboss-dashboard.jpg';
import hotelImg from '../assets/hotel-website.png';
import lendenImg from '../assets/lenden.png';

const projects = [
    {
        name: "Pocket Boss – AI-Powered Smart CRM Platform",
        description: "Enterprise-grade AI-powered CRM platform designed to unify sales, marketing, and customer support operations. Achieved 31% faster onboarding and 59% improved customer data visibility.",
        technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL", "WebSockets", "REST APIs", "OAuth", "AWS", "CI/CD"],
        role: "Full Stack Engineer & Core Product In-Charge",
        impact: "Integrated many third-party applications through robust API and webhook architecture. Multi-tenant SaaS platform used by real businesses across multiple industries.",
        links: {
            overview: "https://mypocketboss.netlify.app/"
        },
        image: pocketbossImg,
        isLongImage: false,
    },
    {
        name: "Haven Haven Hotel & Suites",
        description: "Developed a hotel booking website with React.js and Tailwind CSS for the frontend. Built the backend with Node.js and Express.js to handle user authentication and bookings, storing data in MongoDB.",
        technologies: ["React.js", "Tailwind CSS", "DaisyUI", "Node.js", "Express.js", "Firebase", "MongoDB"],
        role: "Full Stack Developer",
        impact: "Created a mobile-first, responsive website with a secure booking system and improved user engagement.",
        links: {
            client: "https://github.com/mdhasanshuvo/haven-hotel-and-suites",
            server: "https://github.com/mdhasanshuvo/haven-hotel-and-suites-server",
            live: "https://haven-hotel-and-suites.web.app/"
        },
        image: hotelImg,
        isLongImage: true,
    },
    {
        name: "LenDen - Mobile Banking System",
        description: "Built a secure mobile financial service (MFS) web app for seamless money transfer, cash-in, and cash-out, with role-based access (User, Agent, Admin), encrypted PIN authentication and one-device login restriction.",
        technologies: ["React.js", "Tailwind CSS", "DaisyUI", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe Payment Gateway"],
        role: "Full Stack Developer",
        impact: "Created a real-world inspired system improving transaction security, user management, and financial operations.",
        links: {
            client: "https://github.com/mdhasanshuvo/lenden-client",
            server: "https://github.com/mdhasanshuvo/lenden-server",
            live: "https://lenden-mfs.netlify.app"
        },
        image: lendenImg,
        isLongImage: false,
    },
];

const Projects = () => {
    return (
        <div id="projects" className="py-16 sm:py-24 lg:py-32 px-8 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">Featured Projects</h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 flex flex-col h-full"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Project Image */}
                            <div className={`relative ${project.isLongImage ? 'h-48 sm:h-56 md:h-64' : 'h-40 sm:h-48 md:h-56'} overflow-hidden bg-gray-100 group`}>
                                <img 
                                    src={project.image} 
                                    alt={project.name}
                                    className={`w-full ${project.isLongImage ? 'h-auto object-top hover:object-bottom transition-all duration-[3000ms] ease-linear' : 'h-full object-cover'}`}
                                />
                                
                                {/* Hover Overlay with Icons */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    {(project.links.live || project.links.overview) && (
                                        <a
                                            href={project.links.live || project.links.overview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white bg-opacity-90 text-blue-600 p-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                                            title="View Live Site"
                                        >
                                            <FaExternalLinkAlt className="text-lg" />
                                        </a>
                                    )}
                                    {(project.links.client || project.links.server) && (
                                        <a
                                            href={project.links.client || project.links.server}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white bg-opacity-90 text-gray-800 p-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                                            title="View on GitHub"
                                        >
                                            <FaGithub className="text-lg" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-600">{project.name}</h3>
                                <p className="text-sm sm:text-base text-gray-700 mb-4">{project.description}</p>
                                
                                {/* Technologies */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Role */}
                                <div className="mb-3">
                                    <span className="font-semibold text-gray-800">Role:</span> <span className="text-gray-700">{project.role}</span>
                                </div>

                                {/* Impact */}
                                <div className="mb-6 flex-grow">
                                    <span className="font-semibold text-gray-800">Impact:</span> 
                                    <p className="text-gray-700 text-sm mt-1">{project.impact}</p>
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-3 text-sm mt-auto">
                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-blue-600 hover:underline font-semibold"
                                        >
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                    )}
                                    {project.links.overview && (
                                        <a
                                            href={project.links.overview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-blue-600 hover:underline font-semibold"
                                        >
                                            <FaExternalLinkAlt /> Live Overview
                                        </a>
                                    )}
                                    {project.links.client && (
                                        <a
                                            href={project.links.client}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-gray-700 hover:underline font-semibold"
                                        >
                                            <FaGithub /> Client
                                        </a>
                                    )}
                                    {project.links.server && (
                                        <a
                                            href={project.links.server}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-gray-700 hover:underline font-semibold"
                                        >
                                            <FaGithub /> Server
                                        </a>
                                    )}
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
