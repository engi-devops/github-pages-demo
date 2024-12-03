import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-8">
    <div className="text-center">
      <p className="text-lg font-semibold">© 2024 Santosh Kumar Singh</p>
      <p className="text-sm mt-2">
        Passionate Backend Engineer | Building Scalable Solutions
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/backend-software-engineer-singhsantosh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-300 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/engi-devops"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-300 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;