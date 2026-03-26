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

const Navigation = ({ isScrolled }) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-1 xl:space-x-2">
        {navigation.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 rounded-lg group ${
                  isActive 
                    ? 'text-bmw-blue' 
                    : 'text-white hover:text-bmw-blue'
                }`
              }
            >
              <span className="relative z-10">{item.name}</span>
              {({ isActive }) => (
                <span 
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/10 scale-100' 
                      : 'bg-white/0 scale-0 group-hover:scale-100 group-hover:bg-white/5'
                  }`}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;