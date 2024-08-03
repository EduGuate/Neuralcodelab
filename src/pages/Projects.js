import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';
import heroImage from '../assets/hero-image3.jpg';  // Importa la imagen

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8">
      <div 
        className="flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${heroImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '300px',  // Altura ajustada a 300px
          width: '100%',    // Ancho completo
        }}
      >
        <h1 className="text-5xl font-bold text-white">Our Amazing Projects</h1>
      </div>
      
      <div className="mb-8">
        <input 
          type="text" 
          placeholder="Search for projects..." 
          className="w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              id={project.id} 
              title={project.title} 
              description={project.description} 
              image={project.image}
            />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
