import React from 'react';
import ChatInterface from '../components/ChatInterface';
import BackButton from '../components/BackButton';

const KnowledgeAssistant = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BackButton />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Knowledge Assistant</h1>
        <p className="mt-2 text-lg text-gray-600">
          Access a broad knowledge base for research, information retrieval, and general Q&A.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recommended Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Primary Model</h3>
            <p className="text-lg font-bold text-indigo-600">Llama3.1:8B</p>
            <p className="text-sm text-gray-500 mt-2">
              Comprehensive knowledge model with strong capabilities in general knowledge,
              research assistance, and detailed explanations.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 8GB</li>
              <li>Best for: In-depth research and explanations</li>
              <li>Specialties: General knowledge, academic topics</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Alternative Model</h3>
            <p className="text-lg font-bold text-indigo-600">Mistral7B</p>
            <p className="text-sm text-gray-500 mt-2">
              Powerful model with broad knowledge coverage and excellent instruction-following
              capabilities. Great for quick information retrieval.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 7GB</li>
              <li>Best for: Quick information lookup</li>
              <li>Specialties: Factual knowledge, current events</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[600px]">
        <ChatInterface
          title="Knowledge Assistant"
          description="Ask me anything about any topic - I'm here to help you learn and understand."
          primaryModel="Llama3.1:8B"
          alternativeModel="Mistral:7B"
          type="knowledge"
        />
      </div>
    </div>
  );
};

export default KnowledgeAssistant;