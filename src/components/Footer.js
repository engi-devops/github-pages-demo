import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white py-10 rounded-t-3xl shadow-xl overflow-hidden">
    {/* Background Animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-2xl animate-pulse"></div>

    {/* Content */}
    <div className="relative z-10 text-center">
      {/* Footer Text */}
      <p className="text-2xl font-bold mb-2 drop-shadow-lg">
        © 2024 Santosh Kumar Singh
      </p>
      <p className="text-lg font-medium opacity-90">
        Passionate Backend Engineer | Building Scalable Solutions
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mt-6">
        <a
          href="https://www.linkedin.com/in/backend-software-engineer-singhsantosh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-gray-300 transition-transform transform hover:scale-125"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/engi-devops"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-gray-300 transition-transform transform hover:scale-125"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>

    {/* Decorative Shapes */}
    <div className="absolute top-8 left-16 w-10 h-10 bg-blue-400 rounded-full opacity-50 animate-bounce"></div>
    <div className="absolute bottom-12 right-16 w-12 h-12 bg-purple-500 rounded-full opacity-50 animate-pulse"></div>
    <div className="absolute top-16 right-10 w-8 h-8 bg-indigo-500 rounded-full opacity-50 animate-ping"></div>
  </footer>
);

export default Footer;