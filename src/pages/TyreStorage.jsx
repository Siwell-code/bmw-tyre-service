import React from 'react';

const TyreStorage = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-bmw-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Хранение шин</h1>
          <p className="text-xl">Безопасное хранение шин в специальных условиях</p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Условия хранения</h2>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-bmw-blue rounded-full"></span>
                  <span>Отапливаемый склад с контролем температуры</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-bmw-blue rounded-full"></span>
                  <span>Стеллажное хранение с маркировкой</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-bmw-blue rounded-full"></span>
                  <span>Страхование шин на время хранения</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-bmw-blue rounded-full"></span>
                  <span>Бесплатная диагностика перед хранением</span>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-2xl font-bold text-bmw-blue mb-4">от 2000 ₽/сезон</p>
                <button className="bg-bmw-blue hover:bg-bmw-blue-dark px-8 py-3 rounded-lg text-white font-semibold transition">
                  Записаться
                </button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-500">Фото склада хранения шин</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TyreStorage;