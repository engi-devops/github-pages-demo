import React from 'react';

const Header = () => (
  <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-10 text-center rounded-b-3xl shadow-2xl relative overflow-hidden">
    {/* Background animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-10 blur-xl animate-pulse"></div>

    {/* Name and Title */}
    <h1 className="text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
      Santosh Kumar Singh
    </h1>
    <p className="text-2xl font-medium font-extrabold mb-6 drop-shadow-md">
      Software Engineer
    </p>

    {/* Contact Info */}
    <div className="text-lg relative z-10">
      <p className="mb-4">
        E-mail: 
        <a
          href="mailto:singhsantosh.edu.in@gmail.com"
          className="text-blue-300 hover:text-blue-500 transition-all duration-300 underline underline-offset-4"
        >
          singhsantosh.edu.in@gmail.com
        </a>
      </p>
      <p>
        Phone: 
        <span className="text-blue-300 hover:text-blue-500 transition-all duration-300 cursor-pointer">
          +91-9429929149
        </span>
      </p>
    </div>

    {/* Animated icons or decoration */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3 mt-6 opacity-70">
      <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
      <div className="w-6 h-6 bg-white rounded-full animate-bounce delay-150"></div>
      <div className="w-8 h-8 bg-white rounded-full animate-bounce delay-300"></div>
    </div>
  </header>
);

export default Header;