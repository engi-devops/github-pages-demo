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
    'PostgreSQL': (
      <>
        <h3 className="text-xl font-bold mb-4">PostgreSQL</h3>
        <p className="text-left">
          Strong understanding of relational database design and management with PostgreSQL. Skilled in writing complex queries, optimizing performance, and integrating databases with backend services.
        </p>
      </>
    ),
    'MongoDB': (
      <>
        <h3 className="text-xl font-bold mb-4">MongoDB</h3>
        <p className="text-left">
          Proficient in working with MongoDB for NoSQL database solutions, including designing flexible schemas, managing collections, and performing efficient CRUD operations for scalable applications.
        </p>
      </>
    ),
    'Redis': (
      <>
        <h3 className="text-xl font-bold mb-4">Redis</h3>
        <p className="text-left">
          Extensive experience with Redis as an in-memory data structure store for caching, session management, and real-time analytics. Skilled in implementing Redis for high-performance applications to reduce database load and optimize response times. Proficient in using data structures like hashes, lists, and sorted sets to solve complex problems. Hands-on experience with Redis clustering, replication, and persistence mechanisms to ensure scalability and fault tolerance in production environments.
        </p>
      </>
    ),
    'Socket.IO': (
      <>
        <h3 className="text-xl font-bold mb-4">Socket.IO</h3>
        <ul className="list-disc list-inside text-left">
          <li>Extensive experience in building real-time applications using Socket.IO, such as chat systems, notifications, and live dashboards.</li>
          <li>Proficient in integrating <strong>@socket.io/redis-adapter</strong> for scaling real-time systems across multiple servers by enabling communication through Redis.</li>
          <li>Skilled in using <strong>ioredis</strong> for connecting and managing Redis instances efficiently in distributed architectures.</li>
          <li>Implemented inter-server communication using Redis Pub/Sub mechanisms to handle events between two or more distinct servers seamlessly.</li>
          <li>Expertise in managing namespaces and rooms in Socket.IO to group users dynamically and broadcast messages efficiently.</li>
          <li>Hands-on experience with connection handling, reconnection strategies, and implementing custom middleware for authentication and authorization.</li>
          <li>Optimized WebSocket connections for high-throughput scenarios, ensuring low latency and reliable message delivery in real-time systems.</li>
          <li>Developed strategies for handling large-scale deployments by combining Socket.IO with Docker, Kubernetes, and load balancers for horizontal scaling.</li>
        </ul>
      </>
    ),
    'Docker': (
      <>
        <h3 className="text-xl font-bold mb-4">Docker</h3>
        <ul className="list-disc list-inside text-left">
          <li>Proficient in containerizing applications using Docker to ensure consistent environments across development, testing, and production.</li>
          <li>Experience in writing efficient <strong>Dockerfiles</strong> and managing multi-stage builds to optimize image sizes.</li>
          <li>Skilled in using <strong>docker-compose</strong> to define and manage multi-container applications.</li>
          <li>Familiar with creating and managing Docker networks to enable seamless communication between containers.</li>
          <li>Intermediate knowledge of Docker volumes for persistent data storage and sharing across containers.</li>
          <li>Experience with pulling, pushing, and managing images in container registries like <strong>Docker Hub</strong> and private registries.</li>
          <li>Understanding of best practices for securing Docker containers and limiting resources using options like <strong>--memory</strong> and <strong>--cpu</strong>.</li>
          <li>Capable of troubleshooting and debugging issues in Dockerized environments using logs and diagnostic commands like <strong>docker ps</strong>, <strong>docker logs</strong>, and <strong>docker inspect</strong>.</li>
        </ul>
      </>
    ),
    'AWS': (
      <>
        <h3 className="text-xl font-bold mb-4">AWS</h3>
        <ul className="list-disc list-inside text-left">
          <li>Proficient in managing AWS Identity and Access Management (<strong>IAM</strong>) to control user access and permissions securely.</li>
          <li>Hands-on experience in deploying and managing virtual servers using <strong>EC2</strong>, including configuring security groups and auto-scaling.</li>
          <li>Skilled in utilizing <strong>S3 buckets</strong> for object storage, managing lifecycle policies, and securing data with encryption and versioning.</li>
          <li>Experience with <strong>Simple Queue Service (SQS)</strong> for decoupling application components and managing message queues efficiently.</li>
          <li>Proficient in setting up <strong>Simple Notification Service (SNS)</strong> for real-time messaging and integrating it with other AWS services like Lambda and SQS.</li>
          <li>Knowledgeable in leveraging <strong>Amazon EventBridge</strong> for building event-driven architectures and managing workflows between AWS services.</li>
          <li>Hands-on experience with <strong>Elastic Beanstalk</strong> for deploying and scaling web applications seamlessly.</li>
          <li>Skilled in writing and deploying serverless applications using <strong>Lambda functions</strong> to run code without managing servers.</li>
          <li>Familiar with monitoring and optimizing resource usage across AWS services using tools like <strong>CloudWatch</strong>.</li>
        </ul>
      </>
    ),
    'Azure AI & Speech Services': (
      <>
        <h3 className="text-xl font-bold mb-4">Azure AI & Speech Services</h3>
        <ul className="list-disc list-inside text-left">
          <li>Proficient in managing Azure Virtual Machines (VMs), including configuration, deployment, and security management.</li>
          <li>Experienced in handling Azure Identity and Access Management (IAM) to manage user roles, permissions, and secure access to resources.</li>
          <li>Hands-on experience with <strong>Azure Speech Services</strong>, including speech-to-text, text-to-speech, and real-time transcription for diverse use cases.</li>
          <li>Skilled in integrating <strong>Azure AI services</strong> for building intelligent applications, including utilizing tools like <strong>Azure OpenAI</strong> for ChatGPT API integration.</li>
          <li>Capable of monitoring and optimizing the performance of AI services using <strong>Azure Monitor</strong> and other diagnostic tools.</li>
        </ul>
      </>
    ),
    'React.js': (
      <>
        <h3 className="text-xl font-bold mb-4">React.js</h3>
        <p className="text-left">
          Currently exploring the fundamentals of React.js, focusing on building reusable components, state management, and understanding the JSX syntax.
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