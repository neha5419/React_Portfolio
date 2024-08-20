// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://github.com/neha5419" className="mx-2 hover:text-gray-400">GitHub</a>
          <a href="https://www.linkedin.com/in/neha-phadtare-97a31a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="mx-2 hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
