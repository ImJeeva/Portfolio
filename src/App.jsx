import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Banner />
      <About />
      <Skills />
      <Experiance />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
