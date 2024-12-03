const Header = () => (
  <header className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white p-8 text-center rounded-b-lg shadow-xl">
    <h1 className="text-5xl font-extrabold mb-2">Santosh Kumar Singh</h1>
    <p className="text-xl font-semibold mb-4">Software Engineer</p>
    <div className="text-lg">
      <p className="mb-2">E-mail: <a href="mailto:singhsantosh.edu.in@gmail.com" className="text-blue-300 hover:text-blue-500 transition duration-300">singhsantosh.edu.in@gmail.com</a></p>
      <p className="mb-2">Phone: <span className="text-blue-300 hover:text-blue-500 transition duration-300">+91-9429929149</span></p>
    </div>
  </header>
);

export default Header;