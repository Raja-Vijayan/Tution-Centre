import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = ({ animatedElements }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-on-scroll ${
            animatedElements['contact-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-700`} id="contact-title">Contact Us</h2>
          <div className={`w-16 h-1 bg-indigo-600 mx-auto animate-on-scroll ${
            animatedElements['contact-underline'] ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          } transition-all duration-700 origin-left`} id="contact-underline"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="h-full">
            <div className={`bg-white p-8 rounded-xl shadow-lg h-full animate-on-scroll ${
              animatedElements['contact-form'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-700 delay-100`} id="contact-form">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`animate-on-scroll ${
                    animatedElements['contact-name'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  } transition-all duration-700 delay-200`} id="contact-name">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                      required
                    />
                  </div>
                  <div className={`animate-on-scroll ${
                    animatedElements['contact-email'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                  } transition-all duration-700 delay-200`} id="contact-email">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                      required
                    />
                  </div>
                </div>
                <div className={`animate-on-scroll ${
                  animatedElements['contact-subject'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                } transition-all duration-700 delay-300`} id="contact-subject">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                    required
                  />
                </div>
                <div className={`animate-on-scroll ${
                  animatedElements['contact-message'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                } transition-all duration-700 delay-300`} id="contact-message">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div className={`animate-on-scroll ${
                  animatedElements['contact-button'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } transition-all duration-700 delay-400`} id="contact-button">
                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Info and Map */}
          <div className="h-full flex flex-col">
            <div className={`bg-white p-8 rounded-xl shadow-lg mb-6 flex-1 animate-on-scroll ${
              animatedElements['contact-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            } transition-all duration-700 delay-200`} id="contact-info">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className={`flex items-start animate-on-scroll ${
                  animatedElements['contact-location'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                } transition-all duration-700 delay-300`} id="contact-location">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Our Location</h4>
                    <p className="text-gray-600">Kakkan Street, Seithur, Tamil Nadu 626138</p>
                  </div>
                </div>
                <div className={`flex items-start animate-on-scroll ${
                  animatedElements['contact-email-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                } transition-all duration-700 delay-400`} id="contact-email-info">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email Us</h4>
                    <p className="text-gray-600">rajavijayan8667@gmail.com</p>
                  </div>
                </div>
                <div className={`flex items-start animate-on-scroll ${
                  animatedElements['contact-phone'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                } transition-all duration-700 delay-500`} id="contact-phone">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Call Us</h4>
                    <p className="text-gray-600">+91 8667326535</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className={`bg-white p-0 rounded-xl shadow-lg overflow-hidden flex-1 animate-on-scroll ${
              animatedElements['contact-map'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-700 delay-300`} id="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2585!2d77.9281883!3d9.8995289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d5b0e0e6a5a1%3A0x9b9b9b9b9b9b9b9b!2sSeithur%2C%20Tamil%20Nadu%20626138!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;