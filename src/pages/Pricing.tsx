import React, { useEffect } from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features with different usage limits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-slate-600">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Access to all basic models</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>5 concurrent requests</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Community support</span>
              </li>
            </ul>
            <Link
              to="/#features"
              className="block w-full py-3 px-6 text-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-b from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white relative">
            <div className="absolute top-4 right-4 flex items-center bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 mr-1" />
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span>/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>Access to all models</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>20 concurrent requests</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>Advanced features</span>
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-white text-indigo-600 font-medium hover:bg-slate-100 transition-colors">
              Upgrade to Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Unlimited access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Unlimited concurrent requests</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Custom integrations</span>
              </li>
            </ul>
            <a
              href="https://zenshastra.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="grid gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <h3 className="font-semibold mb-2 group-hover:text-indigo-600 transition-colors">Can I switch plans later?</h3>
              <p className="text-slate-600 group-hover:text-slate-800">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <h3 className="font-semibold mb-2 group-hover:text-indigo-600 transition-colors">What payment methods do you accept?</h3>
              <p className="text-slate-600 group-hover:text-slate-800">We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <h3 className="font-semibold mb-2 group-hover:text-indigo-600 transition-colors">Is there a free trial?</h3>
              <p className="text-slate-600 group-hover:text-slate-800">Yes, you can try our Pro features for 14 days with no commitment required.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;