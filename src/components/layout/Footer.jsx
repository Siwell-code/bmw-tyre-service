import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaClock, FaInstagram, FaVk, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bmw-black text-white pt-8 xs:pt-12 pb-4 xs:pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 mb-8">
          <div className="text-center xs:text-left">
            <h3 className="text-xl font-bold mb-3">BMW Шиномонтаж</h3>
            <p className="text-gray-300 text-sm">
              Профессиональный шиномонтаж для автомобилей BMW
            </p>
          </div>

          <div className="text-center xs:text-left">
            <h4 className="font-bold mb-3">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/wheel-repair" className="text-gray-300 hover:text-bmw-blue transition block">Ремонт дисков</Link></li>
              <li><Link to="/tyre-storage" className="text-gray-300 hover:text-bmw-blue transition block">Хранение шин</Link></li>
              <li><Link to="/wheel-painting" className="text-gray-300 hover:text-bmw-blue transition block">Покраска дисков</Link></li>
              <li><Link to="/tyre-repair" className="text-gray-300 hover:text-bmw-blue transition block">Ремонт шин</Link></li>
            </ul>
          </div>

          <div className="text-center xs:text-left">
            <h4 className="font-bold mb-3">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center xs:justify-start space-x-2">
                <FaPhone className="text-bmw-blue flex-shrink-0" />
                <a href="tel:+79991234567" className="text-gray-300 hover:text-bmw-blue transition">+7 (999) 123-45-67</a>
              </li>
              <li className="flex items-center justify-center xs:justify-start space-x-2">
                <FaMapMarkerAlt className="text-bmw-blue flex-shrink-0" />
                <span className="text-gray-300">г. Москва, ул. Автомобильная, 15</span>
              </li>
              <li className="flex items-center justify-center xs:justify-start space-x-2">
                <FaClock className="text-bmw-blue flex-shrink-0" />
                <span className="text-gray-300">Ежедневно: 9:00 - 21:00</span>
              </li>
            </ul>
          </div>

          <div className="text-center xs:text-left">
            <h4 className="font-bold mb-3">Мы в соцсетях</h4>
            <div className="flex justify-center xs:justify-start space-x-4">
              <a href="#" className="text-2xl hover:text-bmw-blue transition transform hover:scale-110">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-bmw-blue transition transform hover:scale-110">
                <FaVk />
              </a>
              <a href="#" className="text-2xl hover:text-bmw-blue transition transform hover:scale-110">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-2xl hover:text-bmw-blue transition transform hover:scale-110">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 BMW Шиномонтаж. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;