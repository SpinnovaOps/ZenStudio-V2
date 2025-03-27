import React from 'react';
import { Link } from 'react-router-dom';
import { CodeIcon, BrainCircuitIcon, BookOpenIcon, CalculatorIcon, MessageSquareIcon } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            One Interface, Five Specialized Capabilities
          </h2>
          <p className="text-xl text-slate-600">
            ZenStudio provides tailored AI assistance for different types of
            tasks, all while keeping your data private and secure on your
            device.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-200">
            <div className="bg-indigo-100 p-4 rounded-full w-fit mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-3">
              <CodeIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Coding Assistant</h3>
            <p className="text-slate-600 mb-4">
              Solve programming challenges across all difficulty levels, get
              code explanations, and receive help with debugging and
              optimization.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm font-medium text-indigo-600">
                Recommended Models:
              </p>
              <ul className="mt-2 space-y-1 mb-4">
                <li className="text-sm text-slate-700">• deepseek-coder:6.7B</li>
                <li className="text-sm text-slate-700">• codegemma:7B</li>
              </ul>
              <Link
                to="/coding"
                className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md transition-all duration-300 relative overflow-hidden group hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] group-hover:animate-shine"></span>
                Try it Now
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-200">
            <div className="bg-indigo-100 p-4 rounded-full w-fit mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-3">
              <BrainCircuitIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Planning & Decision Making
            </h3>
            <p className="text-slate-600 mb-4">
              Get help with scheduling, task automation, logical
              decision-making, and strategic planning for complex projects.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm font-medium text-indigo-600">
                Recommended Models:
              </p>
              <ul className="mt-2 space-y-1 mb-4">
                <li className="text-sm text-slate-700">• Llama3.1:8B</li>
                <li className="text-sm text-slate-700">• Gemma3:12B</li>
              </ul>
              <Link
                to="/planning"
                className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md transition-all duration-300 relative overflow-hidden group hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] group-hover:animate-shine"></span>
                Try it Now
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-200">
            <div className="bg-indigo-100 p-4 rounded-full w-fit mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-3">
              <BookOpenIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Knowledge Assistant</h3>
            <p className="text-slate-600 mb-4">
              Access a broad knowledge base for general Q&A, research
              assistance, and information retrieval across various domains.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm font-medium text-indigo-600">
                Recommended Models:
              </p>
              <ul className="mt-2 space-y-1 mb-4">
                <li className="text-sm text-slate-700">• Llama3.1:8B</li>
                <li className="text-sm text-slate-700">• Mistral7B</li>
              </ul>
              <Link
                to="/knowledge"
                className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md transition-all duration-300 relative overflow-hidden group hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] group-hover:animate-shine"></span>
                Try it Now
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-200">
            <div className="bg-indigo-100 p-4 rounded-full w-fit mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-3">
              <CalculatorIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Logic & Reasoning</h3>
            <p className="text-slate-600 mb-4">
              Get help with mathematical problems, pattern recognition, logical
              puzzles, and analytical reasoning challenges.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm font-medium text-indigo-600">
                Recommended Models:
              </p>
              <ul className="mt-2 space-y-1 mb-4">
                <li className="text-sm text-slate-700">• Phi-4</li>
                <li className="text-sm text-slate-700">• deepseek-r1</li>
              </ul>
              <Link
                to="/logic"
                className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md transition-all duration-300 relative overflow-hidden group hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] group-hover:animate-shine"></span>
                Try it Now
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-200">
            <div className="bg-indigo-100 p-4 rounded-full w-fit mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-3">
              <MessageSquareIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Linguistic Assistant</h3>
            <p className="text-slate-600 mb-4">
              Perfect your writing with paraphrasing, grammar and spelling
              correction, style suggestions, and text improvement.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm font-medium text-indigo-600">
                Recommended Models:
              </p>
              <ul className="mt-2 space-y-1 mb-4">
                <li className="text-sm text-slate-700">• phi-4</li>
                <li className="text-sm text-slate-700">• deepseek-r1</li>
              </ul>
              <Link
                to="/linguistic"
                className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md transition-all duration-300 relative overflow-hidden group hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] group-hover:animate-shine"></span>
                Try it Now
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-xl shadow-md text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 group animate-blink">
            <h3 className="text-xl font-bold mb-3">Why Local AI Matters</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                <div className="mt-1 min-w-5">•</div>
                <span>Complete privacy for sensitive data and projects</span>
              </li>
              <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                <div className="mt-1 min-w-5">•</div>
                <span>No internet connection required after initial setup</span>
              </li>
              <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                <div className="mt-1 min-w-5">•</div>
                <span>No subscription fees or usage limits</span>
              </li>
              <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                <div className="mt-1 min-w-5">•</div>
                <span>Customizable to your specific needs</span>
              </li>
              <li className="flex items-start gap-2 transition-transform duration-300 hover:translate-x-2">
                <div className="mt-1 min-w-5">•</div>
                <span>Full control over your AI tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;