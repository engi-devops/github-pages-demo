import React from 'react';

const About = () => (
  <section className="p-12 bg-gradient-to-br from-gray-100 via-gray-200 to-white text-center rounded-3xl shadow-2xl relative overflow-hidden">
    {/* Background Animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 blur-2xl animate-pulse"></div>

    {/* Title */}
    <h2 className="text-4xl font-extrabold text-gray-800 mb-6 drop-shadow-lg">
      About Me
    </h2>

    {/* Animated Separator */}
    <div className="relative flex items-center justify-center mb-6">
      <div className="h-1 w-1/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      <div className="mx-4 w-8 h-8 border-4 border-gray-300 rounded-full animate-spin"></div>
      <div className="h-1 w-1/4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
    </div>

    {/* Content */}
    <p className="mt-6 text-gray-700 text-lg leading-relaxed relative z-10">
      As a <span className="font-bold text-blue-600">Senior Backend Software Engineer</span> at 
      <span className="font-bold text-blue-600"> Tamasha.live</span>, I play a key role in developing and deploying advanced backend solutions that drive product innovation and scalability. My responsibilities include managing production infrastructure, leading discussions on feature architecture, conducting thorough code reviews, and optimizing existing functionalities to improve performance and resilience.
    </p>
    <p className="mt-6 text-gray-700 text-lg leading-relaxed relative z-10">
      Leveraging my expertise in 
      <span className="font-semibold text-gray-900"> Node.js</span>, 
      <span className="font-semibold text-gray-900"> PostgreSQL</span>, 
      <span className="font-semibold text-gray-900"> MongoDB</span>, 
      <span className="font-semibold text-gray-900"> Redis</span>, 
      <span className="font-semibold text-gray-900"> Socket.IO</span>, 
      <span className="font-semibold text-gray-900"> Docker</span>, 
      <span className="font-semibold text-gray-900"> AWS</span>, 
      <span className="font-semibold text-gray-900"> Google Cloud Platform</span>, and 
      <span className="font-semibold text-gray-900"> Azure AI & Speech Services</span>—as well as code management tools like 
      <span className="font-semibold text-gray-900"> GitHub</span> and 
      <span className="font-semibold text-gray-900"> GitLab</span>—I am dedicated to delivering high-quality code and addressing issues proactively.
    </p>
    <p className="mt-6 text-gray-700 text-lg leading-relaxed relative z-10">
      I strive to enhance the user experience by ensuring efficient, reliable, and seamless service delivery across all systems.
    </p>

    {/* Floating Decorative Dots */}
    <div className="absolute top-10 left-10 w-5 h-5 bg-purple-400 rounded-full opacity-50 animate-ping"></div>
    <div className="absolute bottom-10 right-10 w-7 h-7 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
    <div className="absolute top-20 right-20 w-6 h-6 bg-indigo-400 rounded-full opacity-50 animate-bounce"></div>
  </section>
);

export default About;