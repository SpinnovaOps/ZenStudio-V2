import React from 'react';
import ChatInterface from '../components/ChatInterface';
import BackButton from '../components/BackButton';

const CodingAssistant = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BackButton />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Coding Assistant</h1>
        <p className="mt-2 text-lg text-gray-600">
          Solve coding problems across all difficulty levels with intelligent
          suggestions and explanations.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recommended Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Primary Model</h3>
            <p className="text-lg font-bold text-indigo-600">deepseek-coder:6.7B</p>
            <p className="text-sm text-gray-500 mt-2">
              Specialized for coding tasks with extensive knowledge of
              programming languages and frameworks. Optimized for code
              completion, debugging, and explanation.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 6.7GB</li>
              <li>Best for: Complex coding problems</li>
              <li>Languages: JavaScript, Python, Java, C++, and more</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Alternative Model</h3>
            <p className="text-lg font-bold text-indigo-600">codegemma:7B</p>
            <p className="text-sm text-gray-500 mt-2">
              Powerful coding assistant with excellent performance for advanced
              programming tasks. Great for complex solutions and detailed explanations.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 7GB</li>
              <li>Best for: Advanced coding solutions</li>
              <li>Languages: All major programming languages</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[600px]">
        <ChatInterface
          title="Coding Assistant"
          description="Ask me any coding question or request help with a programming problem."
          primaryModel="deepseek-coder:6.7B"
          alternativeModel="codegemma:7B"
          type="coding"
        />
      </div>
    </div>
  );
};

export default CodingAssistant;