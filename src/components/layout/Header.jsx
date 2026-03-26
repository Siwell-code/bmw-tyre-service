import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navigation from '../ui/Navigation';
import MobileMenu from '../ui/MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-bmw-black/95 backdrop-blur-md border-b border-white/10' 
            : 'bg-bmw-black'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Логотип */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-bmw-blue rounded-full flex items-center justify-center">
                <span className="font-bold text-sm md:text-lg text-white">BMW</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-white">
                Шиномонтаж
              </span>
            </Link>

            {/* Навигация - десктоп */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                {[
                  { name: 'Главная', path: '/' },
                  { name: 'Ремонт дисков', path: '/wheel-repair' },
                  { name: 'Хранение шин', path: '/tyre-storage' },
                  { name: 'Покраска дисков', path: '/wheel-painting' },
                  { name: 'Ремонт шин', path: '/tyre-repair' },
                  { name: 'Контакты', path: '/contacts' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-colors hover:text-bmw-blue ${
                        location.pathname === item.path 
                          ? 'text-bmw-blue' 
                          : 'text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Телефон */}
            <a 
              href="tel:+79991234567" 
              className="hidden lg:block text-white hover:text-bmw-blue transition-colors text-sm font-medium"
            >
              +7 (999) 123-45-67
            </a>

            {/* Мобильное меню кнопка */}
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      <div className="h-16 md:h-20"></div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;