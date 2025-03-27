import React from 'react';
import ChatInterface from '../components/ChatInterface';
import BackButton from '../components/BackButton';

const PlanningAssistant = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BackButton />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Planning Assistant</h1>
        <p className="mt-2 text-lg text-gray-600">
          Get help with scheduling, task automation, and strategic planning for complex projects.
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
              Advanced model with strong capabilities in planning, strategy, and decision-making.
              Excellent for complex project planning and task organization.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 8GB</li>
              <li>Best for: Complex planning scenarios</li>
              <li>Specialties: Project planning, scheduling, strategy</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">Alternative Model</h3>
            <p className="text-lg font-bold text-indigo-600">Gemma3:12B</p>
            <p className="text-sm text-gray-500 mt-2">
              Powerful model for comprehensive planning tasks and complex decision-making scenarios.
              Great for detailed project organization and strategic planning.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
              <li>Size: 12GB</li>
              <li>Best for: Strategic planning solutions</li>
              <li>Specialties: Task organization, complex scheduling</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[600px]">
        <ChatInterface
          title="Planning Assistant"
          description="Let me help you with planning, scheduling, and organizing your tasks and projects."
          primaryModel="Llama3.1:8B"
          alternativeModel="Gemma3:12B"
          type="planning"
        />
      </div>
    </div>
  );
};

export default PlanningAssistant;