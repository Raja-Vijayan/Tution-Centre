import { ArrowRight } from 'lucide-react';

const Hero = ({ animatedElements }) => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 mb-12 md:mb-0 animate-on-scroll ${animatedElements['hero-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-1000`} id="hero-content">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">Empowering Through Free Education</h1>
            
            <p className="text-lg mb-8 text-indigo-100">
              Ambedkar Charity Tuition Center offers free, quality education for all children — nurturing bright minds, breaking barriers, and building a better future.
            </p>
            <p className="text-xl mb-8 text-indigo-100">
              “Cultivation of mind should be the ultimate aim of human existence.” <br /> — Dr. B.R. Ambedkar
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className={`md:w-1/2 animate-on-scroll ${animatedElements['hero-image'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-300`} id="hero-image">
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-indigo-300 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Hero" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-70"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero ;