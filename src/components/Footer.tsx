import React from 'react';
import { Server, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <Server className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-2xl font-bold text-white">Ficksa</span>
            </div>
            <p className="text-gray-400">
              Enterprise-grade e-commerce infrastructure solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500"><Github className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500">Cloud Hosting</a></li>
              <li><a href="#" className="hover:text-emerald-500">CDN</a></li>
              <li><a href="#" className="hover:text-emerald-500">Security</a></li>
              <li><a href="#" className="hover:text-emerald-500">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500">About</a></li>
              <li><a href="#" className="hover:text-emerald-500">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-500">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-500">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-emerald-500" />
              <span>contact@ficksa.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-emerald-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-emerald-500" />
              <span>123 Tech Street, San Francisco, CA 94105</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Ficksa. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-500">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-500">Terms of Service</a>
              <a href="#" className="hover:text-emerald-500">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;