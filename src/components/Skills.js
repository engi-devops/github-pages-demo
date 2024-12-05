import React, { useState } from 'react';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
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
  ];

  // Skill details
  const skillDetails = {
    'Node.js': (
      <>
        <h3 className="text-xl font-bold mb-4">Node.js</h3>
        <ul className="list-disc list-inside text-left">
          <li>5+ years of experience in backend development.</li>
          <li>Proficient in building RESTful APIs endpoints for scalable and high-performance applications.</li>
          <li>Experience developing real-time systems using <strong>Socket.IO</strong>, such as chat and notification systems.</li>
          <li>Expertise in designing microservices architecture for modularity and scalability in large-scale systems.</li>
          <li>Hands-on integration with databases like <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, and <strong>Redis</strong>.</li>
          <li>Deep understanding of asynchronous programming with <strong>Promises</strong>, <strong>async/await</strong></li>
          <li>Skilled in integrating third-party APIs, such as <strong>Razorpay</strong>, <strong>Juspay</strong>, <strong>Azure Speech-to-Text</strong>, <strong>Azure AI services</strong>, and <strong>Facebook Conversion API</strong>.</li>
          <li>Optimized server performance using caching mechanisms (e.g., Redis) and load balancing techniques.</li>
          <li>Experienced in deploying Node.js applications on cloud platforms like <strong>AWS</strong>, <strong>Google Cloud</strong>, and <strong>Azure</strong>, leveraging tools like <strong>Docker</strong> and <strong>Kubernetes</strong>.</li>
        </ul>
      </>
    ),
    'Git': (
      <>
        <h3 className="text-xl font-bold mb-4">Git</h3>
        <ul className="list-disc list-inside text-left">
          <li>Extensive experience with Git for version control, managing complex workflows and branching strategies in both solo and collaborative environments.</li>
          <li>Proficient in working with Git commands such as <strong>git clone</strong>, <strong>git commit</strong>, <strong>git push</strong>, <strong>git pull</strong>, <strong>git merge</strong>, <strong>git rebase</strong>, <strong>git stash</strong>, and <strong>git tag</strong>.</li>
          <li>Experienced in branching strategies like <strong>Git Flow</strong> and <strong>GitHub Flow</strong>, ensuring efficient collaboration with feature branches, releases, and hotfixes.</li>
          <li>Familiar with handling merge conflicts and resolving them in both local and remote branches.</li>
          <li>Expert in setting up and working with Git remotes, including adding, removing, and syncing with remote repositories using <strong>git remote</strong> commands.</li>
          <li>Comfortable working with large repositories and managing commit history, ensuring clean commit messages and proper usage of <strong>git rebase</strong> for a linear history.</li>
          <li>Skilled in using <strong>git bisect</strong> for troubleshooting bugs and finding problematic commits.</li>
          <li>Experience in collaborating with CI/CD pipelines, integrating Git with Jenkins, GitHub Actions, and GitLab CI to automate deployments and testing.</li>
          <li>Proficient in creating and managing pull requests and performing code reviews, ensuring code quality and smooth integration with team members.</li>
        </ul>
      </>
    ),
    'HTML/CSS': (
      <>
        <h3 className="text-xl font-bold mb-4">HTML/CSS</h3>
        <p className="text-left">
          Basic understanding of HTML to structure web pages and CSS to style and layout content responsively.
        </p>
      </>
    ),
    default: (
      <>
        <h3 className="text-xl font-bold mb-4">Skill Details</h3>
        <p className="text-lg">Details about this skill will be added soon!</p>
      </>
    ),
  };

  return (
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
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className="bg-white text-indigo-600 text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1"
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Fullscreen Popup */}
      {selectedSkill && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white text-indigo-600 rounded-3xl p-6 shadow-lg w-full h-full md:w-1/3 md:h-auto md:max-w-lg md:max-h-96 overflow-auto">
            {skillDetails[selectedSkill] || skillDetails.default}
            <button
              onClick={() => setSelectedSkill(null)}
              className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-800 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-8 h-8 bg-blue-400 rounded-full opacity-50 animate-ping"></div>
      <div className="absolute top-20 right-20 w-7 h-7 bg-indigo-400 rounded-full opacity-50 animate-pulse"></div>
    </section>
  );
};

export default Skills;