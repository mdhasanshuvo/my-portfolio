import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-purple-100 to-pink-200 text-gray-800 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-6">
          About Me
        </h2>
        <p className="text-center text-lg md:text-xl leading-relaxed mb-10">
          Hi! I’m <span className="text-blue-600 font-semibold">Mohammed Hasan</span>, a passionate web developer specializing in frontend and backend technologies. I love building dynamic, functional, and visually appealing web applications while brainstorming innovative ideas to solve real-world problems.
        </p>
        
        {/* Info Sections */}
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* Frontend Development */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
              💻
            </div>
            <h3 className="text-2xl font-semibold mt-4">Frontend Development</h3>
            <p className="mt-2 text-gray-700">
              Crafting responsive and interactive user interfaces with React and Tailwind CSS.
            </p>
          </div>

          {/* Backend Development */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
              ⚙️
            </div>
            <h3 className="text-2xl font-semibold mt-4">Backend Development</h3>
            <p className="mt-2 text-gray-700">
              Building robust and scalable backend systems with Node.js and Express.
            </p>
          </div>

          {/* Idea Innovation */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
              🚀
            </div>
            <h3 className="text-2xl font-semibold mt-4">Idea Innovation</h3>
            <p className="mt-2 text-gray-700">
              Transforming creative ideas into practical and impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
