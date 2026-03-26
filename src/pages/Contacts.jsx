import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-bmw-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-xl">Свяжитесь с нами любым удобным способом</p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-2xl text-bmw-blue mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                    <p className="text-gray-600">+7 (999) 765-43-21</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-bmw-blue mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Автомобильная, 15</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaClock className="text-2xl text-bmw-blue mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="text-gray-600">Понедельник - Воскресенье: 9:00 - 21:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-2xl text-bmw-blue mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">info@bmw-tyre.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Мы на карте</h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-500">Здесь будет карта Яндекс/Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;