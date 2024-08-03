import React from 'react';
import heroImage from '../assets/hero-image2.jpg'; // Asegúrate de que la ruta sea correcta

const Contact = () => {
  return (
    <div 
      className="container mx-auto p-8 flex flex-col items-center text-center min-h-screen bg-cover bg-center text-white relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Aplica un overlay oscuro sobre la imagen
          filter: 'brightness(70%)' // Aplica el filtro de brillo solo a la imagen
        }}
      />
      
      <div className="relative z-10"> {/* Contenido sobre el filtro */}
        <h1 className="text-5xl font-extrabold mb-8 animate-fade-in bg-black bg-opacity-50 p-4 rounded-lg">Get in Touch</h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in max-w-2xl bg-black bg-opacity-50 p-4 rounded-lg">
          We're excited to hear from you! Whether you're interested in collaborating, have questions about our projects, or just want to say hi, drop us a line below or send us an email.
        </p>
        
        <form className="w-full max-w-lg animate-fade-in bg-black bg-opacity-50 p-4 rounded-lg">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>
          <div className="mb-6">
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
        
        <p className="mt-8 text-lg animate-fade-in bg-black bg-opacity-50 p-4 rounded-lg">Or reach us directly at:</p>
        <a href="mailto:contact@neuralcodelab.com" className="text-blue-400 text-xl underline mt-2 animate-fade-in">
          contact@neuralcodelab.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
