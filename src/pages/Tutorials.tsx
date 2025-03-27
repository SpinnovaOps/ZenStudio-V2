import React, { useEffect } from 'react';
import { BookOpen, Terminal, Settings, Shield, Cpu, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Tutorials = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <div className="relative">
        <Link
          to="/"
          className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 text-indigo-600 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          <span className="text-indigo-600 font-medium">Back to Home</span>
        </Link>

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Local AI Models & Ollama Tutorial
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50">
              <div className="flex items-center mb-6">
                <Terminal className="h-8 w-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-semibold">Getting Started with Ollama</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Ollama is a lightweight framework for running large language models locally. It simplifies the process of downloading, running, and managing AI models on your machine.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Easy installation process</li>
                <li>• Simple command-line interface</li>
                <li>• Efficient model management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">
              <div className="flex items-center mb-6">
                <Settings className="h-8 w-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-semibold">Model Configuration</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Learn how to configure and optimize models for your specific needs, including memory usage and performance settings.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Custom model parameters</li>
                <li>• Resource optimization</li>
                <li>• Performance tuning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-semibold">Privacy & Security</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Understand how local AI models protect your data and maintain privacy by keeping all processing on your device.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Data privacy benefits</li>
                <li>• Offline operation</li>
                <li>• Security best practices</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50">
              <div className="flex items-center mb-6">
                <Cpu className="h-8 w-8 text-indigo-600 mr-4" />
                <h2 className="text-2xl font-semibold">System Requirements</h2>
              </div>
              <p className="text-slate-600 mb-4">
                Learn about the hardware and software requirements for running different models effectively on your system.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Hardware recommendations</li>
                <li>• Software dependencies</li>
                <li>• Storage requirements</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-indigo-600 mr-4" />
              <h2 className="text-2xl font-semibold">Detailed Installation Guide</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-xl hover:bg-white transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">1. Install Ollama</h3>
                <pre className="bg-slate-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>curl https://ollama.ai/install.sh | sh</code>
                </pre>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl hover:bg-white transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">2. Pull Your First Model</h3>
                <pre className="bg-slate-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>ollama pull llama2</code>
                </pre>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl hover:bg-white transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">3. Run the Model</h3>
                <pre className="bg-slate-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>ollama run llama2</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorials;