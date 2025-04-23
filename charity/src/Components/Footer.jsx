import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = ({ animatedElements }) => {
  return (
        <div>
            <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className={`animate-on-scroll ${animatedElements['footer-brand'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`} id="footer-brand">
                  <h3 className="text-2xl font-bold text-white mb-4">Ambedkar Charity</h3>
                  <p className="text-gray-400 mb-4">Empowering through education since 2010. We provide quality education to underprivileged children and help them build a brighter future through knowledge and skills.</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                
                <div className={`animate-on-scroll ${animatedElements['footer-links-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-100`} id="footer-links-1">
                  <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                    <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                    <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonial</a></li>
                    <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
                
                <div className={`animate-on-scroll ${animatedElements['footer-links-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-200`} id="footer-links-2">
                  <h4 className="text-lg font-bold text-white mb-4">Services</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Design</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-commerce</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
                  </ul>
                </div>
                
                <div className={`animate-on-scroll ${animatedElements['footer-newsletter'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-300`} id="footer-newsletter">
                  <h4 className="text-lg font-bold text-white mb-4">Newsletter</h4>
                  <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                  <form className="flex">
                    <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none" />
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <p className="text-center text-gray-500">© 2025 Ambedkar Charity. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
  )
}

export default Footer