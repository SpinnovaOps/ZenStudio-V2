import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ModelSection from './components/ModelSection';
import Features from './components/Features';
import Footer from './components/Footer';
import CodingAssistant from './pages/CodingAssistant';
import PlanningAssistant from './pages/PlanningAssistant';
import KnowledgeAssistant from './pages/KnowledgeAssistant';
import LogicAssistant from './pages/LogicAssistant';
import LinguisticAssistant from './pages/LinguisticAssistant';
import Tutorials from './pages/Tutorials';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
            <Header />
            <main className="w-full">
              <Hero />
              <Features />
              <ModelSection />
              <Footer />
            </main>
          </div>
        } />
        <Route path="/coding" element={<CodingAssistant />} />
        <Route path="/planning" element={<PlanningAssistant />} />
        <Route path="/knowledge" element={<KnowledgeAssistant />} />
        <Route path="/logic" element={<LogicAssistant />} />
        <Route path="/linguistic" element={<LinguisticAssistant />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}