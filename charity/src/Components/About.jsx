const About = ({ animatedElements }) => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll ${animatedElements['about-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`} id="about-title">About Us</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className={`md:w-1/2 animate-on-scroll ${animatedElements['about-image'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000`} id="about-image">
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRlYWNoaW5nJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D" alt="About Us" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className={`md:w-1/2 animate-on-scroll ${animatedElements['about-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-1000 delay-300`} id="about-content">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p className="text-gray-600 mb-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-bold text-indigo-600 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-bold text-indigo-600 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About ;

// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown, ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
// import TestimonialsCarousel from './TestimonialsCarousel';
// import Contact from './Contact';
// import Footer from './Footer';

// export default function About() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');
//   const [animatedElements, setAnimatedElements] = useState({});

//   // Handle scroll and animations
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['hero', 'about', 'gallery', 'testimonials', 'contact', 'footer'];
//       const scrollPosition = window.scrollY;
      
//       // Find current section based on scroll position
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const elementTop = element.offsetTop - 100;
//           const elementBottom = elementTop + element.offsetHeight;
          
//           if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
      
//       // Animate elements when they come into view
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setAnimatedElements(prev => ({
//               ...prev,
//               [entry.target.id]: true
//             }));
//           }
//         });
//       }, { threshold: 0.1 });
      
//       document.querySelectorAll('.animate-on-scroll').forEach(element => {
//         observer.observe(element);
//       });
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Smooth scroll function
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: 'smooth'
//       });
//       setIsMenuOpen(false);
//     }
//   };

//   // Testimonial data
//   const testimonials = [
//     {
//       id: 1,
//       name: "Jane Cooper",
//       role: "CEO at ABC Company",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       id: 2,
//       name: "Robert Johnson",
//       role: "Marketing Director",
//       content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//     {
//       id: 3,
//       name: "Maria Garcia",
//       role: "Design Lead",
//       content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     }
//   ];

//   // Gallery images (using placeholder images)
//   const galleryImages = [
//     { id: 1, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D", alt: "Gallery Image 1" },
//     { id: 2, src: "https://plus.unsplash.com/premium_photo-1683887033741-f7ae791b4831?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8", alt: "Gallery Image 2" },
//     { id: 3, src: "https://images.unsplash.com/photo-1573894999291-f440466112cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8", alt: "Gallery Image 3" },
//     { id: 4, src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", alt: "Gallery Image 4" },
//     { id: 5, src: "https://images.unsplash.com/photo-1573894998033-c0cef4ed722b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8", alt: "Gallery Image 5" },
//     { id: 6, src: "https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhY2hpbmclMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D", alt: "Gallery Image 6" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
//       {/* Navigation */}
//       <nav className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <div className="text-2xl font-bold text-indigo-600">Ambedkar Charity</div>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {['hero', 'about', 'gallery', 'testimonials', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`text-sm font-medium ${
//                     activeSection === section 
//                       ? 'text-indigo-600 border-b-2 border-indigo-600' 
//                       : 'text-gray-500 hover:text-indigo-600'
//                   } transition-colors duration-300 py-2`}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </button>
//               ))}
//             </div>
            
//             {/* Mobile menu button */}
//             <div className="flex items-center md:hidden">
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white shadow-lg">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {['hero', 'about', 'gallery', 'testimonials', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
//                     activeSection === section 
//                       ? 'text-indigo-600 bg-indigo-50' 
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
//                   } transition-colors duration-300`}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className={`md:w-1/2 mb-12 md:mb-0 animate-on-scroll ${animatedElements['hero-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-1000`} id="hero-content">
//               <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Create Stunning Digital Experiences</h1>
//               <p className="text-xl mb-8 text-indigo-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
//               <div className="flex space-x-4">
//                 <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
//                   Get Started <ArrowRight size={18} className="ml-2" />
//                 </button>
//                 <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-all duration-300">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//             <div className={`md:w-1/2 animate-on-scroll ${animatedElements['hero-image'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-300`} id="hero-image">
//               <div className="relative">
//                 <div className="w-full h-64 md:h-96 bg-indigo-300 rounded-lg overflow-hidden">
//                   <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Hero" className="w-full h-full object-cover" />
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-70"></div>
//                 <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-70"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll ${animatedElements['about-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`} id="about-title">About Us</h2>
//             <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
//           </div>
//           <div className="flex flex-col md:flex-row gap-12 items-center">
//             <div className={`md:w-1/2 animate-on-scroll ${animatedElements['about-image'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000`} id="about-image">
//               <div className="relative">
//                 <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
//                   <img src="https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRlYWNoaW5nJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D" alt="About Us" className="w-full h-full object-cover" />
//                 </div>
//                 {/* <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-indigo-600 rounded-lg"></div> */}
//               </div>
//             </div>
//             <div className={`md:w-1/2 animate-on-scroll ${animatedElements['about-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-1000 delay-300`} id="about-content">
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
//               <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
//               <p className="text-gray-600 mb-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="bg-indigo-50 p-4 rounded-lg">
//                   <h4 className="font-bold text-indigo-600 mb-2">Our Mission</h4>
//                   <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </div>
//                 <div className="bg-indigo-50 p-4 rounded-lg">
//                   <h4 className="font-bold text-indigo-600 mb-2">Our Vision</h4>
//                   <p className="text-sm text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section id="gallery" className="py-16 md:py-24 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll ${animatedElements['gallery-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`} id="gallery-title">Our Gallery</h2>
//             <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
//             <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {galleryImages.map((image, index) => (
//               <div 
//                 key={image.id}
//                 className={`group relative overflow-hidden rounded-lg shadow-lg h-64 animate-on-scroll ${
//                   animatedElements[`gallery-item-${image.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//                 } transition-all duration-700 delay-${index * 100}`}
//                 id={`gallery-item-${image.id}`}
//               >
//                 <img 
//                   src={`${image.src}/${400 + image.id * 10}/${300 + image.id * 5}`} 
//                   alt={image.alt} 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                   <div>
//                     <h3 className="text-white font-bold text-lg">Project Title {image.id}</h3>
//                     <p className="text-gray-200 text-sm">Lorem ipsum dolor sit amet</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <TestimonialsCarousel/>

//      <Contact/>

//      <Footer animatedElements={animatedElements}/>
//     </div>
//   );
// }