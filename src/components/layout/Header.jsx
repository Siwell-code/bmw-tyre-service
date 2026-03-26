import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaTelegram, FaCar } from 'react-icons/fa';
import Navigation from '../ui/Navigation';
import MobileMenu from '../ui/MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Эффект скролла для изменения прозрачности
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокировка скролла при открытом меню
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

  // Закрытие меню при смене страницы
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-bmw-black/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-bmw-black/80 backdrop-blur-sm py-3 md:py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Логотип с анимацией */}
            <Link 
              to="/" 
              className="group relative flex items-center space-x-2 md:space-x-3 z-50"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-bmw-blue rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-bmw-blue to-bmw-blue-dark rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <FaCar className="text-white text-lg md:text-xl" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base md:text-xl tracking-tight">
                  BMW <span className="text-bmw-blue">Шиномонтаж</span>
                </span>
                <span className="text-xs text-gray-300 hidden sm:block">Профессиональный сервис</span>
              </div>
            </Link>

            {/* Десктопная навигация */}
            <Navigation isScrolled={isScrolled} />

            {/* Контактные кнопки для десктопа */}
            <div className="hidden lg:flex items-center space-x-3">
              <a 
                href="tel:+79991234567" 
                className="flex items-center space-x-2 bg-white/10 hover:bg-bmw-blue px-4 py-2 rounded-full transition-all duration-300 group"
              >
                <FaPhone className="text-bmw-blue group-hover:text-white transition-colors" />
                <span className="text-sm font-medium">+7 (999) 123-45-67</span>
              </a>
              <div className="flex space-x-2">
                <a 
                  href="https://wa.me/79991234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-green-500/20 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaWhatsapp className="text-green-500 text-lg" />
                </a>
                <a 
                  href="https://t.me/bmw_tyre" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-blue-500/20 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaTelegram className="text-blue-500 text-lg" />
                </a>
              </div>
            </div>

            {/* Мобильное меню кнопка */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center z-50 rounded-full hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Меню"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl relative z-10" />
              ) : (
                <FaBars className="text-2xl relative z-10" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Отступ для фиксированного хедера */}
      <div className="h-16 md:h-20"></div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;