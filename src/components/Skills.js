const Skills = () => (
  <section className="p-10 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-extrabold text-center mb-6">Skills</h2>
    <div className="flex justify-center gap-6 flex-wrap">
      {[
        'React.js',
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
      ].map((skill) => (
        <span
          key={skill}
          className="bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;