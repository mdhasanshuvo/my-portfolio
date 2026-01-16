import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import hasan from '../assets/Hasan.png';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-16 sm:py-24 lg:py-32 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Image */}
        <div className="flex-shrink-0">
          <img
            src={hasan}
            alt="Mohammed Hasan"
            className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-lg"
          />
        </div>

        {/* Right Section: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-yellow-400">Mohammed Hasan</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            <span>I'm a </span>
            <span className="text-yellow-300">
              <Typewriter
                words={[
                  'Full Stack Engineer',
                  'SaaS Developer',
                  'Backend Specialist',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Full Stack Engineer building scalable SaaS platforms with expertise in system architecture. Leading Pocket Boss, an AI-powered CRM for multiple industries.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start my-8 gap-4">
            <a
              href="https://github.com/mdhasanshuvo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-2xl transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammedd-hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-2xl transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/hasanshuvoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-2xl transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1ysrbV8repYELBrux8IkZh0P8NNvUDddF/view?usp=sharing"
            target="_blank"
            className="btn btn-primary btn-lg shadow-md transform transition hover:scale-105"  
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
