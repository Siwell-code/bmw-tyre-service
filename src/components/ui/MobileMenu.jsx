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
  // Закрытие при нажатии на Escape
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
    <div className="md:hidden bg-bmw-black fixed top-0 left-0 w-full h-screen z-40 overflow-y-auto">
      <div className="pt-20 pb-8 px-4">
        <nav>
          <ul className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-3 text-lg hover:text-bmw-blue transition ${
                      isActive ? 'text-bmw-blue' : 'text-white'
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