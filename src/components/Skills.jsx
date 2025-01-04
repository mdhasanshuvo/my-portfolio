import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaCuttlefish } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';

const skills = [
  { name: "JavaScript", color: "bg-yellow-400", icon: <FaJs /> },
  { name: "React", color: "bg-blue-400", icon: <FaReact /> },
  { name: "Node.js", color: "bg-green-500", icon: <FaNodeJs /> },
  { name: "Express.js", color: "bg-gray-800", icon: <SiExpress /> },
  { name: "MongoDB", color: "bg-green-700", icon: <SiMongodb /> },
  { name: "Firebase", color: "bg-orange-400", icon: <SiFirebase /> },
  { name: "C", color: "bg-blue-600", icon: <FaCuttlefish /> },
  { name: "C++", color: "bg-indigo-500", icon: <CgCPlusPlus /> },
];

const Skills = () => {
  return (
    <div id="skills"  className="bg-gradient-to-r from-purple-100 via-blue-50 to-pink-100 py-16  sm:py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-10">My Skills</h2>
        
        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg ${skill.color} text-white`}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{skill.icon}</div>
              {/* Skill Name */}
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
