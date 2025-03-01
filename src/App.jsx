import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import Tech from './sections/Tech.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero id="home" />
      <About id="about" />
      <Tech id="tech" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
};

export default App;
