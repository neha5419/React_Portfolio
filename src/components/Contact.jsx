// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-8">Interested in working together? Let's get in touch!</p>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full mb-4 p-3 rounded-lg text-black" />
          <input type="email" placeholder="Your Email" className="w-full mb-4 p-3 rounded-lg text-black" />
          <textarea placeholder="Your Message" className="w-full mb-4 p-3 rounded-lg text-black h-32"></textarea>
          <button className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-500 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
