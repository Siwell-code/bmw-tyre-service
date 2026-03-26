import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Главная', path: '/' },
  { name: 'Ремонт дисков', path: '/wheel-repair' },
  { name: 'Хранение шин', path: '/tyre-storage' },
  { name: 'Покраска дисков', path: '/wheel-painting' },
  { name: 'Ремонт шин', path: '/tyre-repair' },
  { name: 'Контакты', path: '/contacts' },
];

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-bmw-black z-40 overflow-y-auto animate-slide-down">
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <nav className="w-full max-w-md">
          <ul className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-4 text-center text-xl font-medium rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-bmw-blue bg-white/10' 
                        : 'text-white hover:text-bmw-blue hover:bg-white/5'
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
      </div>
    </div>
  );
};

export default MobileMenu;