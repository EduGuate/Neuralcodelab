// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href="#" className="text-blue-500 mt-4 block">Read More</a>
    </div>
  );
};

export default ProjectCard;
