import React from 'react';
import Hero from './Hero';
import {Link} from "react-router-dom"
function Header() {
  return (
    
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          <li><Link to="/about" className="text-white hover:text-gray-400">About</Link></li>
          <li><Link to="/projects" className="text-white hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
   
    
  );
}

export default Header;
