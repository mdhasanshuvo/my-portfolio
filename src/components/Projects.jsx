import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
    {
        name: "Project One",
        description: "A brief description of your first project goes here. It can include the tech stack used, project purpose, or special features.",
        image: "https://via.placeholder.com/300x200", // Replace with your project image URL
        liveLink: "https://your-live-project-link.com",
        repoLink: "https://github.com/your-repo-link",
    },
    {
        name: "Project Two",
        description: "A brief description of your second project goes here. Explain what makes this project unique or challenging.",
        image: "https://via.placeholder.com/300x200", // Replace with your project image URL
        liveLink: "https://your-live-project-link.com",
        repoLink: "https://github.com/your-repo-link",
    },
    {
        name: "Project Three",
        description: "A brief description of your third project goes here. Share key features or technologies that were used in this project.",
        image: "https://via.placeholder.com/300x200", // Replace with your project image URL
        liveLink: "https://your-live-project-link.com",
        repoLink: "https://github.com/your-repo-link",
    },
];

const Projects = () => {
    return (
        <div className="py-16 px-8 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-4xl font-bold mb-10">My Projects</h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Project Image */}
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-64 object-cover group-hover:opacity-80 transition-all duration-300"
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
