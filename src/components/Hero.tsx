import React from 'react';
import { Server, Shield, Globe2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Power Your E-commerce Infrastructure
          </h1>
          <p className="text-xl text-emerald-50 mb-8 max-w-3xl mx-auto">
            Scale your online business with our enterprise-grade infrastructure solutions. 
            Built for performance, security, and reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
              Start Free Trial
            </button>
            <a 
              href="https://demo-commerce.ficksa.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              View Demo Store
            </a>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-white">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
            <Server className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure</h3>
            <p className="text-emerald-50">Enterprise-grade hosting with 99.99% uptime guarantee</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
            <Shield className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
            <p className="text-emerald-50">Multi-layer security with DDoS protection and SSL</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
            <Globe2 className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global CDN</h3>
            <p className="text-emerald-50">Lightning-fast content delivery across 200+ locations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;