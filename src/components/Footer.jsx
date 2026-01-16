import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-8 pb-4 py-12">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Mohammed Hasan</h3>
                        <p className="text-gray-300">
                            Full Stack Engineer specializing in building enterprise-grade SaaS platforms with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li><a href="#home" className="hover:text-white transition">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition">About</a></li>
                            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                            <li><a href="#achievements" className="hover:text-white transition">Achievements</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                        <p className="text-gray-300 mb-4">
                            <strong>Email:</strong> mohammedhasan.contact@gmail.com<br />
                            <strong>Phone:</strong> +880 1516 556649<br />
                            <strong>Location:</strong> Chittagong, Bangladesh
                        </p>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-gray-700 pt-8 text-center text-gray-400">
                    <p>
                        © {new Date().getFullYear()} Mohammed Hasan - Full Stack Engineer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;