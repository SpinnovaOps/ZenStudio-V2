import React from 'react';
import ChatInterface from '../components/ChatInterface';
import BackButton from '../components/BackButton';

const LogicAssistant = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BackButton />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Logic & Reasoning Assistant</h1>
        <p className="mt-2 text-lg text-gray-600">
          Get help with mathematical problems, pattern recognition, and analytical reasoning challenges.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recommended Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Primary Model</h3>
            <p className="text-lg font-bold text-indigo-600">Phi-4</p>
            <p className="text-sm text-gray-500 mt-2">
              Specialized model for mathematical and logical reasoning tasks.
              Excellent at solving complex problems step by step.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 4GB</li>
              <li>Best for: Mathematical reasoning</li>
              <li>Specialties: Problem-solving, pattern recognition</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Alternative Model</h3>
            <p className="text-lg font-bold text-indigo-600">deepseek-r1</p>
            <p className="text-sm text-gray-500 mt-2">
              Versatile model with strong analytical capabilities.
              Great for complex logic problems and reasoning tasks.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 6.7GB</li>
              <li>Best for: Complex logic problems</li>
              <li>Specialties: Analytical reasoning, deduction</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[600px]">
        <ChatInterface
          title="Logic Assistant"
          description="Let me help you solve mathematical problems and tackle logical reasoning challenges."
          primaryModel="Phi4"
          alternativeModel="deepseek-r1"
          type="logic"
        />
      </div>
    </div>
  );
};

export default LogicAssistant;