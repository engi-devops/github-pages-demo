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
          As a Senior Backend Software Engineer at <span className="font-bold">Tamasha.live</span>, I specialize in creating and deploying scalable backend solutions that boost product innovation and reliability. My core responsibilities include:
          <ul className="list-disc ml-5 mt-2">
            <li>Managing production infrastructure.</li>
            <li>Leading feature architecture discussions.</li>
            <li>Conducting code reviews to ensure quality.</li>
            <li>Optimizing functionalities for performance and resilience.</li>
          </ul>
          I utilize my expertise in <span className="font-bold">Node.js</span>, <span className="font-bold">PostgreSQL</span>, <span className="font-bold">MongoDB</span>, <span className="font-bold">Redis</span>, <span className="font-bold">Socket.IO</span>, <span className="font-bold">Docker</span>, <span className="font-bold">AWS</span>, <span className="font-bold">Google Cloud</span>, and <span className="font-bold">Azure AI/Speech Services</span>, along with version control tools like <span className="font-bold">GitHub</span> and <span className="font-bold">GitLab</span>. My goal is to ensure seamless service delivery and enhance the user experience by maintaining efficient and reliable systems.
        </p>
      </div>


      {/* Job 2 */}
      <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-600">Backend Software Engineer</h3>
        <p className="text-sm text-gray-500 mt-1">Jun 2018 - Nov 2020 · 2 yrs 6 mos</p>
        <p className="text-sm text-gray-500 mb-4">Ahmedabad, Gujarat, India</p>
        <p className="text-gray-700 leading-relaxed">
          In my role, I focus on implementing complex business logic and building reliable APIs and services. My key responsibilities include:
          <ul className="list-disc ml-5 mt-2">
            <li>Developing and maintaining server-side logic.</li>
            <li>Defining and managing databases with precision.</li>
            <li>Ensuring high performance and responsive communication with the front-end.</li>
          </ul>
          My work is dedicated to delivering seamless and efficient backend functionality to support the overall system architecture.
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