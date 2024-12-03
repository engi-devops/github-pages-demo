const Projects = () => (
  <section className="p-6">
    <h2 className="text-2xl font-bold text-center">Projects</h2>
    <div className="mt-4 space-y-4">
      {[
        { name: 'E-Commerce App', description: 'Built a full-stack e-commerce application.' },
        { name: 'Portfolio Website', description: 'Developed a personal portfolio using React.js.' },
      ].map((project) => (
        <div key={project.name}>
          <h3 className="font-bold">{project.name}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;