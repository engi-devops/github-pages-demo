import React from 'react';

const Education = () => (
  <section className="relative p-12 bg-gradient-to-br from-gray-50 via-gray-100 to-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden">
    {/* Background Animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-10 blur-2xl animate-pulse"></div>

    {/* Title */}
    <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg relative z-10">
      Education
    </h2>

    {/* Animated Separator */}
    <div className="relative flex items-center justify-center mb-8">
      <div className="h-1 w-1/4 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full"></div>
      <div className="mx-4 w-8 h-8 border-4 border-gray-200 rounded-full animate-spin"></div>
      <div className="h-1 w-1/4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"></div>
    </div>

    {/* Education Cards */}
    <div className="relative z-10 space-y-10">
      {/* Degree */}
      <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-indigo-600">Bachelor’s Degree</h3>
        <p className="text-lg text-gray-700 mt-2">Computer Engineering</p>
        <p className="text-sm text-gray-500 mt-1">Completed: [Insert Year Here]</p>
        <p className="text-sm text-gray-500">Institution: [Insert University/College Name Here]</p>
      </div>
    </div>

    {/* Floating Decorative Elements */}
    <div className="absolute top-10 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-bounce"></div>
    <div className="absolute bottom-20 right-20 w-8 h-8 bg-blue-400 rounded-full opacity-50 animate-ping"></div>
    <div className="absolute top-20 right-20 w-7 h-7 bg-indigo-400 rounded-full opacity-50 animate-pulse"></div>
  </section>
);

export default Education;