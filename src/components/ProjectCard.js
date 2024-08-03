import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={`/projects/${id}`} className="text-blue-500 hover:underline">Read More</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
