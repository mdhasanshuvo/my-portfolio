import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMedal, FaTrophy, FaAward, FaTimes, FaFileAlt } from 'react-icons/fa';

const achievements = [
    {
        title: "1st Place: Software Development Project Showcase",
        organization: "IIUC",
        icon: <FaTrophy />,
        color: "bg-yellow-500",
        certificate: "/Software-development-competition.jpeg",
        type: "image"
    },
    {
        title: "2nd Runner-Up: Bangabandhu Innovation Fair 2024",
        organization: "2024",
        icon: <FaMedal />,
        color: "bg-gray-400",
        certificate: "/Bongobondhu-project-showcase.jpeg",
        type: "image"
    },
    {
        title: "2nd Runner-Up: Chatgaiya Idea Generation Contest",
        organization: "",
        icon: <FaMedal />,
        color: "bg-gray-400",
        certificate: "/Chatgaiya-idea-contest.png",
        type: "image"
    },
    {
        title: "5th Place: Programming Hero Idea Showcase",
        organization: "",
        icon: <FaAward />,
        color: "bg-blue-500",
        certificate: "/5th_Programming_Hero_Idea_contest.png",
        type: "image"
    },
    {
        title: "7th Place: IIUC Junior Competitive Programming Contest",
        organization: "",
        icon: <FaAward />,
        color: "bg-blue-500",
        certificate: "/programming-contest.jpeg",
        type: "image"
    },
    {
        title: "Primary Selected: NASA Space App Challenge",
        organization: "",
        icon: <FaTrophy />,
        color: "bg-indigo-500",
        certificate: "/Nasa_Space_App.png",
        type: "image"
    },
];

const Achievements = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const openCertificate = (achievement) => {
        setSelectedCertificate(achievement);
    };

    const closeCertificate = () => {
        setSelectedCertificate(null);
    };

    return (
        <div id="achievements" className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-16 sm:py-24 lg:py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-center text-4xl font-bold mb-12">Achievements & Awards</h2>

                {/* Achievements Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={`${achievement.color} text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                                {achievement.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                            {achievement.organization && (
                                <p className="text-gray-600 text-sm mb-4">{achievement.organization}</p>
                            )}
                            {/* View Certificate Button */}
                            <button
                                onClick={() => openCertificate(achievement)}
                                className="mt-auto inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm"
                                title="Click to view certificate"
                            >
                                <FaFileAlt className="text-lg" />
                                View Certificate
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certificate Modal */}
                <AnimatePresence>
                    {selectedCertificate && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                            onClick={closeCertificate}
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeCertificate}
                                    className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition z-10"
                                    aria-label="Close"
                                >
                                    <FaTimes className="text-xl" />
                                </button>

                                {/* Certificate Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-12">
                                        {selectedCertificate.title}
                                    </h3>
                                    
                                    {selectedCertificate.type === "image" ? (
                                        <img
                                            src={selectedCertificate.certificate}
                                            alt={selectedCertificate.title}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    ) : (
                                        <iframe
                                            src={selectedCertificate.certificate}
                                            className="w-full h-[70vh] rounded-lg"
                                            title={selectedCertificate.title}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Additional Info Section */}
                <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Extracurricular Activities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-blue-600 mb-3">Teaching & Leadership</h4>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Teaching Assistant at IIUC - Web Development Tools (CSE-3532)</li>
                                <li>• System Design - IIUC Transport Management Division</li>
                                <li>• Web Secretary - IIUC Competitive Programming Society</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-600 mb-3">Competitive Programming</h4>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Solved 200+ problems across various platforms</li>
                                <li>• Participated in 10+ online and offline contests</li>
                                <li>• Active member of competitive programming community</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
