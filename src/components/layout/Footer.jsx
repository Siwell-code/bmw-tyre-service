import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaClock, FaInstagram, FaVk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bmw-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BMW Шиномонтаж</h3>
            <p className="text-gray-300">
              Профессиональный шиномонтаж для автомобилей BMW
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/wheel-repair" className="text-gray-300 hover:text-bmw-blue transition">Ремонт дисков</Link></li>
              <li><Link to="/tyre-storage" className="text-gray-300 hover:text-bmw-blue transition">Хранение шин</Link></li>
              <li><Link to="/wheel-painting" className="text-gray-300 hover:text-bmw-blue transition">Покраска дисков</Link></li>
              <li><Link to="/tyre-repair" className="text-gray-300 hover:text-bmw-blue transition">Ремонт шин</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-bmw-blue" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-bmw-blue" />
                <span>г. Москва, ул. Автомобильная, 15</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaClock className="text-bmw-blue" />
                <span>Ежедневно: 9:00 - 21:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-bmw-blue transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-bmw-blue transition">
                <FaVk />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2024 BMW Шиномонтаж. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;