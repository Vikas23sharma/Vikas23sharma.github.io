import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Github from './components/Github';
import Skills from './components/Skills';
import Project from './components/Project';
import End from './components/end';

function App() {
  return (
    <div className="body">
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Github />
      <Contact />
      <End />
    </div>
  );
}

export default App;
