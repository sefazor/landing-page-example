import React from 'react';
import { Code, Database, Lock, MessageSquare } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      title: "Code Assistant",
      description: "AI-powered code completion and suggestions for faster development"
    },
    {
      icon: <Database className="w-12 h-12 text-indigo-600" />,
      title: "Data Analyzer",
      description: "Intelligent data analysis and visualization tools"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-indigo-600" />,
      title: "Chat Bot",
      description: "Advanced conversational AI for customer support"
    },
    {
      icon: <Lock className="w-12 h-12 text-indigo-600" />,
      title: "Security Scanner",
      description: "AI-driven security vulnerability detection"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="mx-auto w-[80%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our AI Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our suite of AI-powered tools designed to enhance your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-indigo-600 transition-colors">
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}