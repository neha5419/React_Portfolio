// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    { title: 'Floral Design Studio', description: 'Welcome to Floral Design Studio ,Your go-to place for stunning transformations and design inspiration.', imageUrl: './Home_Page.png' },
    { title: 'Keeper App', description: 'Helps you to add and delete notes for your personal notes keeping', imageUrl: './keeper.png' },
    // Add more projects as needed
  ];

  return (
    <section  className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
