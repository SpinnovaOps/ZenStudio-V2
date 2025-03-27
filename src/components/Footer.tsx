import React from 'react';
import { BrainCircuitIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
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
    <footer className="bg-slate-900 text-slate-300 py-12 relative overflow-hidden">
      {/* Shining background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1e293b_30%,#334155_50%,#1e293b_70%)] animate-shimmer"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link to="/" className="flex items-center gap-2 mb-6 md:mb-0">
            <BrainCircuitIcon className="h-8 w-8 text-indigo-400" />
            <span className="text-2xl font-bold text-white">ZenStudio</span>
          </Link>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/zenshastra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group overflow-hidden"
            >
              <GithubIcon className="h-6 w-6 text-slate-300 transition-colors group-hover:text-indigo-400" />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] group-hover:animate-shine"></div>
            </a>
            <a 
              href="https://www.linkedin.com/company/zen-shastra/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group overflow-hidden"
            >
              <LinkedinIcon className="h-6 w-6 text-slate-300 transition-colors group-hover:text-indigo-400" />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] group-hover:animate-shine"></div>
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-8 py-8 border-t border-slate-800">
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('models')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  Models
                </button>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-indigo-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tutorials" className="hover:text-indigo-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('models')}
                  className="hover:text-indigo-400 transition-colors"
                >
                  API Reference
                </button>
              </li>
              <li>
                <Link to="/tutorials" className="hover:text-indigo-400 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://zenshastra.com/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="https://zenshastra.com/careers/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="https://zenshastra.com/contact-us/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-indigo-400 transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Stay Updated</h3>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-slate-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full" 
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>© {new Date().getFullYear()} ZenStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;