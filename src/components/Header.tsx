import React from 'react';
import { BrainCircuitIcon, MenuIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <BrainCircuitIcon className="h-8 w-8 text-indigo-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ZenStudio
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-slate-700 hover:text-indigo-600 transition-colors relative group"
          >
            Features
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </button>
          <button
            onClick={() => scrollToSection('models')}
            className="text-slate-700 hover:text-indigo-600 transition-colors relative group"
          >
            Models
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </button>
          <Link
            to="/tutorials"
            className="text-slate-700 hover:text-indigo-600 transition-colors relative group"
          >
            Documentation
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <a
            href="https://zenshastra.com/about-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-indigo-600 transition-colors relative group"
          >
            About
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </nav>
        <button className="md:hidden">
          <MenuIcon className="h-6 w-6 text-slate-700" />
        </button>
        <Link
          to="/"
          className="hidden md:block px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-md transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] group-hover:animate-shine"></span>
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;