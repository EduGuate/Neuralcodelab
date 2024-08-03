import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(project => project.id === parseInt(id));

  if (!project) {
    return <p className="text-center text-gray-700">Project not found</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-96 object-cover mb-8" />
      <p className="text-lg text-gray-700 mb-8">{project.details}</p>
    </div>
  );
};

export default ProjectDetail;
