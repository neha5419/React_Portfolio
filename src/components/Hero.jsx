// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl">A showcase of my work and achievements</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-500 transition">
          Explore My Work
        </button>
      </div>
    </section>
  );
}

export default Hero;
