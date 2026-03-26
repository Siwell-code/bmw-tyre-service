import React from 'react';
import { Link } from 'react-router-dom';
import { FaWrench, FaWarehouse, FaPaintRoller, FaCar, FaShieldAlt, FaTools, FaTachometerAlt, FaUserTie } from 'react-icons/fa';

const services = [
  {
    icon: FaWrench,
    title: 'Ремонт дисков',
    description: 'Профессиональный ремонт литых и кованых дисков любой сложности',
    link: '/wheel-repair',
    price: 'от 1500 ₽'
  },
  {
    icon: FaWarehouse,
    title: 'Хранение шин',
    description: 'Сезонное хранение шин и дисков в специально оборудованном складе',
    link: '/tyre-storage',
    price: 'от 2000 ₽/сезон'
  },
  {
    icon: FaPaintRoller,
    title: 'Покраска дисков',
    description: 'Полимерная порошковая покраска дисков в любой цвет',
    link: '/wheel-painting',
    price: 'от 4000 ₽/диск'
  },
  {
    icon: FaCar,
    title: 'Ремонт шин',
    description: 'Качественный ремонт шин любой сложности',
    link: '/tyre-repair',
    price: 'от 500 ₽'
  },
];

const advantages = [
  {
    icon: FaUserTie,
    title: 'Опыт работы 10+ лет',
    description: 'Профессионалы своего дела'
  },
  {
    icon: FaTools,
    title: 'Современное оборудование',
    description: 'Немецкое качество'
  },
  {
    icon: FaShieldAlt,
    title: 'Гарантия качества',
    description: 'На все виды работ'
  },
  {
    icon: FaTachometerAlt,
    title: 'Быстрое обслуживание',
    description: 'Запись без ожидания'
  }
];

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Адаптивный */}
      <section className="relative bg-bmw-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div className="relative z-20 container-custom min-h-[60vh] xs:min-h-[70vh] sm:min-h-[80vh] flex items-center">
          <div className="py-12 xs:py-16 sm:py-20 md:py-24">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 xs:mb-4 animate-slide-up leading-tight">
              Профессиональный
              <br />
              <span className="text-bmw-blue">шиномонтаж</span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-6 xs:mb-8 text-gray-200 max-w-2xl animate-slide-up">
              Для автомобилей BMW и не только. Качественный ремонт, покраска дисков и хранение шин.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 animate-slide-up">
              <Link
                to="/contacts"
                className="btn btn-primary text-center"
              >
                Записаться онлайн
              </Link>
              <a
                href="tel:+79991234567"
                className="btn border-2 border-white hover:bg-white hover:text-bmw-black text-white text-center"
              >
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Адаптивная сетка */}
      <section className="section bg-bmw-gray-light">
        <div className="container-custom">
          <h2 className="text-center mb-8 xs:mb-10 sm:mb-12">
            Наши <span className="text-bmw-blue">услуги</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 xs:mb-12 sm:mb-16 max-w-2xl mx-auto">
            Предлагаем полный спектр услуг по обслуживанию колесных дисков и шин
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-xl p-4 xs:p-5 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-bmw-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4 group-hover:bg-bmw-blue transition-colors duration-300">
                  <service.icon className="text-2xl xs:text-3xl sm:text-4xl text-bmw-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm xs:text-base mb-3">{service.description}</p>
                <p className="text-bmw-blue font-bold text-sm xs:text-base">{service.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - Адаптивная сетка */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-8 xs:mb-10 sm:mb-12">
            Почему <span className="text-bmw-blue">выбирают нас</span>
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 xs:w-20 xs:h-20 bg-bmw-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="text-2xl xs:text-3xl text-white" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm xs:text-base">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Адаптивная */}
      <section className="bg-gradient-to-r from-bmw-blue to-bmw-blue-dark py-12 xs:py-16">
        <div className="container-custom text-center">
          <h2 className="text-white mb-3 xs:mb-4">Готовы обслужить ваш автомобиль?</h2>
          <p className="text-white/90 mb-6 xs:mb-8 max-w-2xl mx-auto text-sm xs:text-base">
            Запишитесь прямо сейчас и получите скидку 10% на первый визит
          </p>
          <Link
            to="/contacts"
            className="inline-block bg-white text-bmw-blue hover:bg-gray-100 px-6 xs:px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Записаться сейчас
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;