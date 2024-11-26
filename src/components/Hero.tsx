import React from 'react';
import { ArrowRight, Bot, Brain, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[800px] bg-gradient-to-b from-indigo-50 to-white pt-[120px]">
      <div className="mx-auto w-[80%] h-full">
        <div className="flex flex-col items-center text-center pt-20 pb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            AI Tools for the
            <span className="text-indigo-600"> Modern Era</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            Harness the power of artificial intelligence to supercharge your workflow.
            Built for developers, designed for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-gray-800 px-8 py-3 rounded-lg border hover:bg-gray-50">
              View Documentation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Bot className="w-8 h-8 text-indigo-600" />,
              title: "AI Assistant",
              description: "24/7 intelligent support for all your development needs"
            },
            {
              icon: <Brain className="w-8 h-8 text-indigo-600" />,
              title: "Smart Analytics",
              description: "Deep insights powered by machine learning algorithms"
            },
            {
              icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
              title: "Code Generation",
              description: "Automated code suggestions and completions"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              {item.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}