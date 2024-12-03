import React from 'react';

const Experience = () => (
  <section className="relative p-12 bg-gradient-to-br from-gray-50 via-gray-100 to-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden">
    {/* Background Animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 opacity-10 blur-2xl animate-pulse"></div>

    {/* Title */}
    <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg relative z-10">
      Experience
    </h2>

    {/* Animated Separator */}
    <div className="relative flex items-center justify-center mb-8">
      <div className="h-1 w-1/4 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full"></div>
      <div className="mx-4 w-8 h-8 border-4 border-gray-200 rounded-full animate-spin"></div>
      <div className="h-1 w-1/4 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full"></div>
    </div>

    {/* Experience Cards */}
    <div className="relative z-10 space-y-10">
      {/* Job 1 */}
      <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-600">Senior Backend Software Engineer</h3>
        <p className="text-sm text-gray-500 mt-1">Nov 2020 - Present</p>
        <p className="text-sm text-gray-500 mb-4">Bengaluru, Karnataka, India · Remote</p>
        <p className="text-gray-700 leading-relaxed">
          As a Senior Backend Software Engineer at <span className="font-bold">Tamasha.live</span>, I play a key role in developing and deploying advanced backend solutions that drive product innovation and scalability. My responsibilities include managing production infrastructure, leading discussions on feature architecture, conducting thorough code reviews, and optimizing existing functionalities to improve performance and resilience. Leveraging my expertise in <span className="font-bold">Node.js</span>, <span className="font-bold">PostgreSQL</span>, <span className="font-bold">MongoDB</span>, <span className="font-bold">Redis</span>, <span className="font-bold">Socket.IO</span>, <span className="font-bold">Docker</span>, <span className="font-bold">AWS</span>, <span className="font-bold">Google Cloud Platform</span>, and <span className="font-bold">Azure AI & Speech Services</span>, I ensure efficient, reliable, and seamless service delivery across all systems.
        </p>
      </div>

      {/* Job 2 */}
      <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-600">Backend Software Engineer</h3>
        <p className="text-sm text-gray-500 mt-1">Jun 2018 - Nov 2020 · 2 yrs 6 mos</p>
        <p className="text-sm text-gray-500 mb-4">Ahmedabad, Gujarat, India</p>
        <p className="text-gray-700 leading-relaxed">
          In my role, I implemented intricate business logic and crafted robust APIs and services. My primary dedication revolved around developing all server-side logic, meticulously defining and maintaining databases, and ensuring an unwavering commitment to high performance and responsiveness to front-end requests.
        </p>
      </div>
    </div>

    {/* Floating Decorative Elements */}
    <div className="absolute top-10 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-bounce"></div>
    <div className="absolute bottom-20 right-20 w-8 h-8 bg-blue-400 rounded-full opacity-50 animate-ping"></div>
    <div className="absolute top-20 right-20 w-7 h-7 bg-indigo-400 rounded-full opacity-50 animate-pulse"></div>
  </section>
);

export default Experience;