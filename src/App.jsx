import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#FAFAFA] text-[#171717] selection:bg-[#4F46E5] selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col gap-16 sm:gap-24 overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
