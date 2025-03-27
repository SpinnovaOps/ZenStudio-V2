import React, { useEffect } from 'react';
import { Shield, Lock, Server, UserCheck, ArrowLeft, CheckCircle, AlertTriangle, Database, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      {/* Modern UI Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Back Button */}
        <div className="flex justify-end mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ArrowLeft className="h-5 w-5 text-indigo-600 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-indigo-600 font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="relative mb-16 animate-float">
          <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Privacy & Data Protection
          </h1>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300 animate-float relative overflow-hidden group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50">
          <div className="relative">
            <div className="flex items-center mb-6">
              <Shield className="h-10 w-10 text-indigo-600 mr-4 animate-pulse" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Commitment to Privacy
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              At ZenStudio, we prioritize your privacy and data security above all else. Our local-first approach ensures that your sensitive information never leaves your device, giving you complete control over your data.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: Lock,
              title: "Local Processing",
              description: "All AI processing happens directly on your device. Your data never reaches external servers or cloud services.",
              gradient: "hover:from-blue-50 hover:to-cyan-500"
            },
            {
              icon: Server,
              title: "Offline Capability",
              description: "Work without an internet connection. Once models are downloaded, everything runs locally.",
              gradient: "hover:from-emerald-50 hover:to-green-500"
            },
            {
              icon: UserCheck,
              title: "User Control",
              description: "You have complete control over model selection, data usage, and storage preferences.",
              gradient: "hover:from-amber-50 hover:to-orange-500"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-xl rounded-xl p-8 shadow-lg transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden animate-float hover:bg-gradient-to-r ${feature.gradient}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                {feature.description}
              </p>
              <Sparkles className="absolute bottom-2 right-2 h-5 w-5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 shadow-xl transition-all duration-300 transform hover:scale-[1.01] animate-float hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">Why We Choose Local Models</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Enhanced Privacy: Your data stays on your device, eliminating privacy concerns associated with cloud processing.",
                "Data Security: No risk of data breaches or unauthorized access through cloud services.",
                "Complete Control: You decide which models to use and how to process your data.",
                "Offline Access: Continue working without internet connectivity."
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-indigo-600 mr-3 text-xl group-hover:transform group-hover:scale-110 transition-transform">•</span>
                  <span className="text-slate-600 group-hover:text-slate-800 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 shadow-xl transition-all duration-300 transform hover:scale-[1.01] animate-float hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-150">
            <div className="flex items-center mb-6">
              <Database className="h-8 w-8 text-indigo-500 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">Data Usage & Storage</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: CheckCircle,
                  text: "All processing happens locally on your device",
                  color: "text-green-500",
                  gradient: "hover:from-teal-50 hover:to-green-500"
                },
                {
                  icon: AlertTriangle,
                  text: "No data is sent to external servers",
                  color: "text-amber-500",
                  gradient: "hover:from-amber-50 hover:to-yellow-500"
                },
                {
                  icon: Lock,
                  text: "You control data retention and deletion",
                  color: "text-indigo-5000",
                  gradient: "hover:from-blue-50 hover:to-indigo-500"
                },
                {
                  icon: Shield,
                  text: "Model updates are verified and secure",
                  color: "text-purple-500",
                  gradient: "hover:from-purple-50 hover:to-fuchsia-500"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 rounded-lg bg-slate-50/80 backdrop-blur-sm transition-all duration-300 group hover:shadow-md hover:bg-gradient-to-r ${item.gradient}`}
                >
                  <item.icon className={`h-6 w-6 ${item.color} mr-3 group-hover:scale-110 transition-transform`} />
                  <span className="text-slate-700 group-hover:text-slate-900 transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;