import React from 'react';
import hasan from '../assets/Hasan.png'
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Image */}
        <div className="flex-shrink-0">
          <img
            src={hasan} 
            alt="Your Name"
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
            On a mission to build engaging and user-friendly websites while continuously learning and growing in web development.
          </p>
          <a
            href="#contact"
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
