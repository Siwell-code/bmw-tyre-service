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
      <ul className="flex space-x-6 lg:space-x-8">
        {navigation.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium transition-colors hover:text-bmw-blue ${
                  isActive ? 'text-bmw-blue' : 'text-white'
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