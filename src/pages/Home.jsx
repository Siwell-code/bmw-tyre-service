import React from 'react';
import { Link } from 'react-router-dom';
import { FaWrench, FaWarehouse, FaPaintRoller, FaCar } from 'react-icons/fa';

const services = [
  {
    icon: FaWrench,
    title: 'Ремонт дисков',
    description: 'Профессиональный ремонт литых и кованых дисков любой сложности',
    link: '/wheel-repair',
  },
  {
    icon: FaWarehouse,
    title: 'Хранение шин',
    description: 'Сезонное хранение шин и дисков в специально оборудованном складе',
    link: '/tyre-storage',
  },
  {
    icon: FaPaintRoller,
    title: 'Покраска дисков',
    description: 'Полимерная порошковая покраска дисков в любой цвет',
    link: '/wheel-painting',
  },
  {
    icon: FaCar,
    title: 'Ремонт шин',
    description: 'Качественный ремонт шин любой сложности',
    link: '/tyre-repair',
  },
];

const Home = () => {
  return (
    <div className="animate-fade-in">
      <section className="relative bg-bmw-black text-white py-20 md:py-32">
        <div className="relative container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            Профессиональный шиномонтаж
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Для автомобилей BMW и не только
          </p>
          <Link
            to="/contacts"
            className="inline-block bg-bmw-blue hover:bg-bmw-blue-dark px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Записаться онлайн
          </Link>
        </div>
      </section>

      <section className="section bg-bmw-gray-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши <span className="text-bmw-blue">услуги</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <service.icon className="text-5xl text-bmw-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему <span className="text-bmw-blue">выбирают нас</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-bmw-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Опыт работы 10+ лет</h3>
              <p className="text-gray-600">Профессионалы своего дела</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bmw-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Современное оборудование</h3>
              <p className="text-gray-600">Немецкое качество</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bmw-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">На все виды работ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;