import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';

const navigation = [
  { name: 'Главная', path: '/' },
  { name: 'Ремонт дисков', path: '/wheel-repair' },
  { name: 'Хранение шин', path: '/tyre-storage' },
  { name: 'Покраска дисков', path: '/wheel-painting' },
  { name: 'Ремонт шин', path: '/tyre-repair' },
  { name: 'Контакты', path: '/contacts' },
];

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-bmw-black z-50 lg:hidden">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <Logo variant="compact" />
          <button onClick={onClose} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-6 py-4 text-lg font-medium transition-colors ${
                      isActive 
                        ? 'text-bmw-blue bg-white/5' 
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`
                  }
                  onClick={onClose}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-white/10">
          <a 
            href="tel:+79991234567" 
            className="block text-center text-white/80 hover:text-bmw-blue transition-colors"
          >
            +7 (999) 123-45-67
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;