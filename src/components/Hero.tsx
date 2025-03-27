import React from 'react';
import { BrainIcon, LockIcon, ZapIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Your Private AI Companion, Locally Powered
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            ZenStudio connects powerful local language models on your laptop
            with an intuitive interface. Chat, upload sensitive data, and solve
            complex tasks—all without sending your data to the cloud.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors shadow-md text-lg font-medium"
            >
              Download ZenStudio
            </a>
            <a
              href="#models"
              className="px-8 py-3 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors shadow-sm text-lg font-medium"
            >
              Explore Models
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 animate-float-delay-0">
              <div className="bg-indigo-100 p-3 rounded-full w-fit mb-4">
                <BrainIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Task-Optimized Models
              </h3>
              <p className="text-slate-600">
                Specialized local AI models for coding, planning, knowledge
                retrieval, reasoning, and linguistic tasks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 animate-float-delay-150">
              <div className="bg-indigo-100 p-3 rounded-full w-fit mb-4">
                <LockIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Private</h3>
              <p className="text-slate-600">
                All processing happens on your device. Your sensitive data never
                leaves your computer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 animate-float-delay-300">
              <div className="bg-indigo-100 p-3 rounded-full w-fit mb-4">
                <ZapIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Seamless Experience
              </h3>
              <p className="text-slate-600">
                Intuitive web interface that makes interacting with local AI as
                simple as chatting with a colleague.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;