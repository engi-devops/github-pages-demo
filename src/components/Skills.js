import React from 'react';

const Skills = () => (
  <section className="relative p-12 bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 text-white rounded-3xl shadow-2xl overflow-hidden">
    {/* Background Animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-2xl animate-pulse"></div>

    {/* Title */}
    <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg relative z-10">
      Skills
    </h2>

    {/* Animated Separator */}
    <div className="relative flex items-center justify-center mb-8">
      <div className="h-1 w-1/4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"></div>
      <div className="mx-4 w-8 h-8 border-4 border-gray-100 rounded-full animate-spin"></div>
      <div className="h-1 w-1/4 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full"></div>
    </div>

    {/* Skills List */}
    <div className="flex justify-center gap-6 flex-wrap relative z-10">
      {[
        'Node.js',
        'JavaScript',
        'HTML/CSS',
        'Git',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Socket.IO',
        'Docker',
        'AWS',
        'Google Cloud Platform',
        'Azure AI & Speech Services',
        'React.js',
      ].map((skill, index) => (
        <span
          key={index}
          className="bg-white text-indigo-600 text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1"
        >
          {skill}
        </span>
      ))}
    </div>

    {/* Floating Decorative Elements */}
    <div className="absolute top-10 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-bounce"></div>
    <div className="absolute bottom-20 right-20 w-8 h-8 bg-blue-400 rounded-full opacity-50 animate-ping"></div>
    <div className="absolute top-20 right-20 w-7 h-7 bg-indigo-400 rounded-full opacity-50 animate-pulse"></div>
  </section>
);

export default Skills;