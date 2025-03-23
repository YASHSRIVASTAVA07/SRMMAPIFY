import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Map', path: '/map' },           // Map link ✅
    { name: 'Contact', path: '/contact' },
    { name: 'Traffic', path: '/traffic' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold tracking-wide">SRM Mapify</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path} className="hover:text-yellow-400 transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-8 py-4">
          {navItems.map((item) => (
            <li key={item.name} className="py-2">
              <Link to={item.path} onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
