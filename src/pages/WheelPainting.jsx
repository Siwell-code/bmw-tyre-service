import React from 'react';

const WheelPainting = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-bmw-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Покраска дисков</h1>
          <p className="text-xl">Полимерная порошковая покраска дисков</p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Наши услуги</h2>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-bmw-blue rounded-full"></span>
                  <span>Порошковая покраска дисков</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-bmw-blue rounded-full"></span>
                  <span>Подбор цвета по RAL или по образцу</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-bmw-blue rounded-full"></span>
                  <span>Матовый и глянцевый финиш</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-bmw-blue rounded-full"></span>
                  <span>Полировка и подготовка поверхности</span>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-2xl font-bold text-bmw-blue mb-4">от 4000 ₽/диск</p>
                <button className="bg-bmw-blue hover:bg-bmw-blue-dark px-8 py-3 rounded-lg text-white font-semibold transition">
                  Записаться
                </button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-500">Фото покраски дисков</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WheelPainting;