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
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Right Section: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-yellow-400">Mohammed Hasan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            <span>I specialize in </span>
            <span className="text-yellow-300">
              <Typewriter
                words={[
                  'Frontend Development',
                  'React.js Applications',
                  'Tailwind CSS Designs',
                  'Modern UI/UX',
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
          <p className="text-lg md:text-xl mb-6">
            On a mission to build engaging and user-friendly websites while
            continuously learning and growing in web development.
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
              href="https://www.linkedin.com/in/mohammed-hasan-729701275"
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
              aria-label="Twitter"
            >
              <FaTwitter />
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
            href="https://drive.google.com/file/d/1DUrlguUIQM0Qg20KN4dqKtL33PHPCIf3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
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
