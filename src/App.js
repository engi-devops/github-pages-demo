// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hi Santosh, welcome to the world of React!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import AuthPage from "./components/AuthPage";

// const App = () => {
//   return (
//     <div>
//       <AuthPage />
//     </div>
//   );
// };

// export default App;


import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;