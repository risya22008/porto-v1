import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <nav className="space-x-6 hidden md:block">
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-purple-400 transition-colors">Certificates</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
