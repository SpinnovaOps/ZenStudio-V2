import React from 'react';
import ChatInterface from '../components/ChatInterface';
import BackButton from '../components/BackButton';

const LinguisticAssistant = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BackButton />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Linguistic Assistant</h1>
        <p className="mt-2 text-lg text-gray-600">
          Perfect your writing with grammar correction, style suggestions, and text improvement.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recommended Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Primary Model</h3>
            <p className="text-lg font-bold text-indigo-600">phi-4</p>
            <p className="text-sm text-gray-500 mt-2">
              Advanced language model with excellent writing assistance capabilities.
              Perfect for comprehensive text improvement and style enhancement.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 4GB</li>
              <li>Best for: Complex writing tasks</li>
              <li>Specialties: Style improvement, content creation</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Alternative Model</h3>
            <p className="text-lg font-bold text-indigo-600">deepseek-r1</p>
            <p className="text-sm text-gray-500 mt-2">
              Powerful model for comprehensive writing assistance and advanced text improvements.
              Great for detailed content enhancement and style refinement.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 6.7GB</li>
              <li>Best for: Advanced writing solutions</li>
              <li>Specialties: Content enhancement, style optimization</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[600px]">
        <ChatInterface
          title="Linguistic Assistant"
          description="Let me help you improve your writing with suggestions for grammar, style, and clarity."
          primaryModel="phi4"
          alternativeModel="deepseek-r1"
          type="linguistic"
        />
      </div>
    </div>
  );
};

export default LinguisticAssistant;