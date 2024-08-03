import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-700 mb-6">{project.details}</p>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-6" />
        <button
          onClick={onClose}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
