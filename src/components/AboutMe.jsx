import React from 'react';

const AboutMe = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-blue-200 via-purple-100 to-pink-200 text-gray-800 py-16 sm:py-24 lg:py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-6">
          About Me
        </h2>
        <p className="text-center text-lg md:text-xl leading-relaxed mb-10 w-9/12 mx-auto">
          Hi! I'm <span className="text-blue-600 font-semibold">Mohammed Hasan</span>, Full Stack Engineer at <span className="font-semibold">Quantum OS AI</span>. I specialize in enterprise SaaS development with expertise in system architecture. I lead Pocket Boss, an AI-powered CRM, managing technical architecture and team collaboration. Passionate about building robust solutions that drive impact.
        </p>
        
        {/* Info Sections */}
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* Full Stack Development */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
              💻
            </div>
            <h3 className="text-2xl font-semibold mt-4">Full Stack Development</h3>
            <p className="mt-2 text-gray-700">
              Building enterprise-grade SaaS platforms with React.js, Node.js, PostgreSQL, and modern cloud technologies.
            </p>
          </div>

          {/* Backend & Scalability */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
              ⚙️
            </div>
            <h3 className="text-2xl font-semibold mt-4">Backend & Scalability</h3>
            <p className="mt-2 text-gray-700">
              Building scalable backend systems, real-time features, and robust third-party API integrations.
            </p>
          </div>

          {/* Team Leadership */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
              🚀
            </div>
            <h3 className="text-2xl font-semibold mt-4">Team Leadership</h3>
            <p className="mt-2 text-gray-700">
              Mentoring junior developers, cross-team collaboration, and driving product innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
