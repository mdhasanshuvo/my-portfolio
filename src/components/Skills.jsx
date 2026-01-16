import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaCuttlefish, FaGitAlt, FaAws, FaLink, FaCode } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiFirebase, SiPostgresql, SiTailwindcss, SiPrisma, SiSupabase, SiSqlite, SiTerraform } from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';
import { GrDocker } from 'react-icons/gr';

const skillCategories = [
  {
    title: "Languages & Frontend",
    color: "bg-purple-600",
    skills: [
      { name: "JavaScript", color: "bg-yellow-400", icon: <FaJs /> },
      { name: "C", color: "bg-blue-600", icon: <FaCuttlefish /> },
      { name: "C++", color: "bg-indigo-500", icon: <CgCPlusPlus /> },
      { name: "React.js", color: "bg-cyan-500", icon: <FaReact /> },
      { name: "Tailwind CSS", color: "bg-teal-400", icon: <SiTailwindcss /> },
    ]
  },
  {
    title: "Backend & APIs",
    color: "bg-green-600",
    skills: [
      { name: "Node.js", color: "bg-green-500", icon: <FaNodeJs /> },
      { name: "Express.js", color: "bg-gray-800", icon: <SiExpress /> },
      { name: "Prisma", color: "bg-slate-600", icon: <SiPrisma /> },
      { name: "WebSockets", color: "bg-red-500", icon: <FaCode /> },
      { name: "REST APIs", color: "bg-indigo-600", icon: <FaDatabase /> },
    ]
  },
  {
    title: "Databases & BaaS",
    color: "bg-blue-600",
    skills: [
      { name: "PostgreSQL", color: "bg-blue-700", icon: <SiPostgresql /> },
      { name: "MongoDB", color: "bg-green-700", icon: <SiMongodb /> },
      { name: "Firebase", color: "bg-orange-400", icon: <SiFirebase /> },
      { name: "Supabase", color: "bg-emerald-600", icon: <SiSupabase /> },
      { name: "SQLite", color: "bg-gray-600", icon: <SiSqlite /> },
    ]
  },
  {
    title: "Cloud & DevOps",
    color: "bg-orange-600",
    skills: [
      { name: "AWS", color: "bg-orange-600", icon: <FaAws /> },
      { name: "Git & GitHub", color: "bg-gray-700", icon: <FaGitAlt /> },
      { name: "CI/CD Pipelines", color: "bg-violet-600", icon: <GrDocker /> },
      { name: "Stripe", color: "bg-blue-600", icon: <FaLink /> },
      { name: "Terraform", color: "bg-purple-700", icon: <SiTerraform /> },
    ]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="bg-gradient-to-r from-purple-100 via-blue-50 to-pink-100 py-16 sm:py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Technical Skills</h2>
        
        {/* Skills Categories */}
        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className={`${category.color} text-white px-4 sm:px-6 py-2 rounded-full shadow-lg`}>
                  <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Skills Grid for this category */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
                }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${skill.color} text-white hover:shadow-xl transform transition`}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Icon */}
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    {/* Skill Name */}
                    <h4 className="text-sm font-semibold text-center">{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;