import React from 'react';
const ModelSection = () => {
  return (
    <section id="models" className="py-20 bg-white animate-float">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Optimized Models for Every Task
          </h2>
          <p className="text-xl text-slate-600">
            ZenStudio leverages the power of Ollama to run these specialized
            models locally on your device, all optimized for specific tasks
            while maintaining efficiency.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 border-b">
                  Task Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 border-b">
                  Primary Model
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 border-b">
                  Alternative Model
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 border-b">
                  Strengths
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="table-row-hover">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  Coding
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  deepseek-coder:6.7B
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  codegemma:7B
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  Code generation, debugging, optimization, explanations
                </td>
              </tr>
              <tr className="table-row-hover">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  Planning & Decision Making
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  Llama3.1:8B
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  Gemma3:12B
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  Task automation, scheduling, logical decision-making
                </td>
              </tr>
              <tr className="table-row-hover">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  Knowledge Based
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  Llama3.1:8B
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  Mistral7B
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  General Q&A, research assistance, information retrieval
                </td>
              </tr>
              <tr className="table-row-hover">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  Logic & Reasoning
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">Phi-4</td>
                <td className="px-6 py-4 text-sm text-slate-700">deepseek-r1</td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  Math problems, pattern recognition, analytical reasoning
                </td>
              </tr>
              <tr className="table-row-hover">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  Linguistic
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  phi-4
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  deepseek-r1
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  Paraphrasing, grammar correction, style improvement
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-12 max-w-3xl mx-auto bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h3 className="text-lg font-semibold mb-2 text-indigo-800">
            Why these models?
          </h3>
          <p className="text-slate-700">
            We've carefully selected these models to balance performance and
            resource requirements. Each model is optimized for its specific task
            domain while maintaining efficient resource usage on modern hardware.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ModelSection;