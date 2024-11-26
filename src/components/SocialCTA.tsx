import React from 'react';
import { Twitter, Github, Linkedin, Youtube } from 'lucide-react';

export default function SocialCTA() {
  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, label: "Twitter", href: "#" },
    { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "#" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "#" },
    { icon: <Youtube className="w-6 h-6" />, label: "YouTube", href: "#" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto w-[80%] text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Connect with us on social media to stay updated with the latest AI tools and features
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-colors"
            >
              {social.icon}
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}