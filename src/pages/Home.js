import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData'; // Asegúrate de que la ruta sea correcta

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    // Función para mezclar los proyectos
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };

    // Mezcla los proyectos y selecciona los primeros 3
    const shuffledProjects = shuffleArray(projectsData).slice(0, 3);
    setFeaturedProjects(shuffledProjects);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Sección de Héroe */}
      <section className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center text-center text-white">
        <div className="px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">Welcome to NeuralCodeLab</h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in">Explore a collection of coding projects built with passion and precision.</p>
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-8 rounded-full shadow-lg animate-bounce"
          >
            Explore Projects
          </Link>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          At NeuralCodeLab, we are passionate about leveraging the power of AI to build cutting-edge web applications. Our team is dedicated to creating innovative solutions that push the boundaries of what's possible in the digital world.
        </p>
        <p className="text-lg text-center text-gray-700 mb-8">
          With years of experience in web development, we specialize in creating dynamic and responsive websites that not only look great but also deliver a seamless user experience.
        </p>
      </section>

      {/* Sección de Proyectos Destacados */}
      <section className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link to={`/projects/${project.id}`} className="text-blue-500 hover:underline">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="bg-gray-200 p-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <p className="text-gray-700 mb-4">"NeuralCodeLab helped us bring our vision to life with an innovative and user-friendly website. Highly recommended!"</p>
            <p className="font-bold text-gray-800">- Client 1</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <p className="text-gray-700 mb-4">"Their expertise in AI and web development is unmatched. We saw significant improvements in our online presence."</p>
            <p className="font-bold text-gray-800">- Client 2</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <p className="text-gray-700 mb-4">"Working with NeuralCodeLab was a pleasure. They delivered a top-notch product on time and within budget."</p>
            <p className="font-bold text-gray-800">- Client 3</p>
          </div>
        </div>
      </section>

      {/* Sección de Llamada a la Acción */}
      <section className="bg-blue-600 text-white text-center p-16">
        <h2 className="text-4xl font-bold mb-4">Ready to Collaborate?</h2>
        <p className="text-lg mb-8">Let's work together on your next project. Reach out to us today!</p>
        <Link to="/contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
