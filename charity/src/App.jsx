import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [animatedElements, setAnimatedElements] = useState({});

  // Handle scroll and animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'gallery', 'testimonials', 'contact', 'footer'];
      const scrollPosition = window.scrollY;
      
      // Find current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop - 100;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // Animate elements when they come into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero animatedElements={animatedElements} />
      <About animatedElements={animatedElements} />
      <Gallery animatedElements={animatedElements} />
      <Testimonials animatedElements={animatedElements} />
      <Contact animatedElements={animatedElements} />
      <Footer animatedElements={animatedElements} />
    </div>
  );
}

export default App;