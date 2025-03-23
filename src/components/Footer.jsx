import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'; // lightweight icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-white">SRM Mapify</h2>
          <p className="text-sm leading-6">
            Bringing you closer to SRM with interactive maps and event details.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Events</li>
            <li className="hover:text-yellow-400 cursor-pointer">Map</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Connect with Us</h3>
          <div className="flex space-x-4 mb-3">
            <Facebook className="hover:text-yellow-400 cursor-pointer" />
            <Twitter className="hover:text-yellow-400 cursor-pointer" />
            <Instagram className="hover:text-yellow-400 cursor-pointer" />
            <Mail className="hover:text-yellow-400 cursor-pointer" />
          </div>
          <p className="text-sm">Email: info@srmmapify.com</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        © 2025 SRM Mapify | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
