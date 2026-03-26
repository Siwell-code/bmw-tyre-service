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

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-6">
        {navigation.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `hover:text-bmw-blue transition ${
                  isActive ? 'text-bmw-blue border-b-2 border-bmw-blue' : 'text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;