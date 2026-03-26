import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../ui/Logo';
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

  const menuItems = [
    { name: 'Главная', path: '/' },
    { name: 'Ремонт дисков', path: '/wheel-repair' },
    { name: 'Хранение шин', path: '/tyre-storage' },
    { name: 'Покраска дисков', path: '/wheel-painting' },
    { name: 'Ремонт шин', path: '/tyre-repair' },
    { name: 'Контакты', path: '/contacts' },
  ];

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
            <Logo variant="full" className="hidden md:flex" />
            <Logo variant="compact" className="md:hidden" />

            {/* Навигация - десктоп */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-colors hover:text-bmw-blue ${
                        location.pathname === item.path 
                          ? 'text-bmw-blue' 
                          : 'text-white/80 hover:text-white'
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
              className="hidden lg:block text-sm text-white/80 hover:text-bmw-blue transition-colors"
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