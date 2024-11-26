import React from 'react';
import { Phone, Check } from 'lucide-react';

export default function MobileCTA() {
  return (
    <section id="download" className="py-20 bg-indigo-900 text-white">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get Our Mobile App</h2>
            <p className="text-indigo-200 mb-8">
              Take the power of AI with you wherever you go. Our mobile app provides all the features you need, right in your pocket.
            </p>
            <div className="space-y-4">
              {[
                "Access all AI tools on the go",
                "Real-time code suggestions",
                "Voice-activated assistant",
                "Offline capabilities"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-indigo-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-3 rounded-lg hover:bg-indigo-50">
                <Phone className="w-5 h-5" />
                Download for iOS
              </button>
              <button className="flex items-center justify-center gap-2 bg-indigo-800 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
                <Phone className="w-5 h-5" />
                Download for Android
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1024&q=80"
              alt="Mobile App"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}