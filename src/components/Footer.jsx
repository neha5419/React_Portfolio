// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://github.com/your-username" className="mx-2 hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/your-username" className="mx-2 hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
