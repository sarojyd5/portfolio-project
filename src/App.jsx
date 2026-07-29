import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import LogoStrip from "./components/LogoStrip.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-base text-white">
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
