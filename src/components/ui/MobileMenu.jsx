import React from 'react';
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
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-bmw-black absolute top-full left-0 w-full z-40">
      <nav className="container-custom py-4">
        <ul className="flex flex-col space-y-4">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 hover:text-bmw-blue transition ${
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
  );
};

export default MobileMenu;