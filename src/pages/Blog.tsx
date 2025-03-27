import React, { useEffect } from 'react';
import { Calendar, User, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      <Header />
      <div className="relative">
        <Link
          to="/"
          className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 text-indigo-600 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          <span className="text-indigo-600 font-medium">Back to Home</span>
        </Link>

        {/* Modern UI Background Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Latest Updates & Insights
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <a 
              href="https://mistral.ai/news/mixtral-of-experts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/gweb-cloudblog-publish/images/mistral_ai.max-2500x2500.jpg" 
                  alt="Mistral AI" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Mar 15, 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <User className="h-4 w-4 mr-1" />
                    <span>ZenStudio Team</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-indigo-600 transition-colors">
                  Introducing Mistral 8x7B: A New Era of Local AI
                </h2>
                <p className="text-slate-600 mb-4">
                  Explore the capabilities of Mistral 8x7B and how it's revolutionizing local AI processing with improved performance and efficiency.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-indigo-600">AI Models</span>
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://deepseekcoder.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://didyouknowbg8.wordpress.com/wp-content/uploads/2024/06/0_zg3vt8nqterbamkt.png?w=471" 
                  alt="DeepSeek Coder" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Mar 10, 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <User className="h-4 w-4 mr-1" />
                    <span>AI Research Team</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-indigo-600 transition-colors">
                  DeepSeek Coder: The Future of Code Generation
                </h2>
                <p className="text-slate-600 mb-4">
                  Deep dive into how DeepSeek Coder is changing the landscape of code generation and development assistance.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>7 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-indigo-600">Development</span>
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://blog.google/technology/developers/gemma-open-ai-model/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemma-social-share.width-1300.jpg" 
                  alt="Gemma AI Model" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Mar 8, 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <User className="h-4 w-4 mr-1" />
                    <span>Tech Lead</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-indigo-600 transition-colors">
                  Gemma: Google's Lightweight Yet Powerful AI Model
                </h2>
                <p className="text-slate-600 mb-4">
                  Discover how Gemma brings enterprise-grade AI capabilities to local development environments with impressive efficiency.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>6 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-indigo-600">Technology</span>
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://www.microsoft.com/en-us/research/blog/phi-2-the-surprising-power-of-small-language-models/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://pbs.twimg.com/media/GXNTrCBWoAAK7tE.jpg" 
                  alt="Phi Model" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-600/20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Mar 5, 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <User className="h-4 w-4 mr-1" />
                    <span>Research Team</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-indigo-600 transition-colors">
                  Phi: Microsoft's Compact Yet Capable AI Model
                </h2>
                <p className="text-slate-600 mb-4">
                  Learn about Microsoft's Phi model and how it achieves remarkable performance despite its smaller size.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>4 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-indigo-600">Research</span>
                  </div>
                </div>
              </div>
            </a>

            <article className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Local AI vs Cloud" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Mar 5, 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <User className="h-4 w-4 mr-1" />
                    <span>Tech Lead</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-indigo-600 transition-colors">
                  Local AI vs Cloud: Making the Right Choice
                </h2>
                <p className="text-slate-600 mb-4">
                  Understanding the trade-offs between local and cloud-based AI solutions for your specific needs.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>6 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-indigo-600">Technology</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;