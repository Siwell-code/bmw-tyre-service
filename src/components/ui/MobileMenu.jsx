import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaTelegram, FaInstagram, FaVk, FaTimes } from 'react-icons/fa';

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
    <div className="fixed inset-0 bg-bmw-black/95 backdrop-blur-xl z-40 overflow-y-auto animate-slide-down">
      <div className="min-h-screen flex flex-col">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
        >
          <FaTimes className="text-white text-xl" />
        </button>

        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <nav className="w-full max-w-md">
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li 
                  key={item.path}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  className="animate-fade-in"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-4 px-6 text-center text-lg font-medium rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-bmw-blue to-bmw-blue-dark text-white shadow-lg' 
                          : 'text-white hover:bg-white/10'
                      }`
                    }
                    onClick={onClose}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Контакты в мобильном меню */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="space-y-3">
                <a 
                  href="tel:+79991234567" 
                  className="flex items-center justify-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <FaPhone className="text-bmw-blue" />
                  <span className="text-white">+7 (999) 123-45-67</span>
                </a>
                <div className="flex justify-center space-x-4 pt-2">
                  <a 
                    href="https://wa.me/79991234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500/20 hover:bg-green-500 rounded-full flex items-center justify-center transition-all"
                  >
                    <FaWhatsapp className="text-green-500 text-xl" />
                  </a>
                  <a 
                    href="https://t.me/bmw_tyre" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-500/20 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all"
                  >
                    <FaTelegram className="text-blue-500 text-xl" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-pink-500/20 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all"
                  >
                    <FaInstagram className="text-pink-500 text-xl" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-blue-400/20 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all"
                  >
                    <FaVk className="text-blue-400 text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Адрес внизу */}
        <div className="pb-8 text-center">
          <p className="text-gray-400 text-sm">
            г. Москва, ул. Автомобильная, 15
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Ежедневно: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;