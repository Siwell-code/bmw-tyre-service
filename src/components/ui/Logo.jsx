import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ variant = 'full', className = '' }) => {
  // Слово с градиентом как у BMW
  const GradientText = () => (
    <span className="font-bold tracking-tight">
      <span className="text-[#00A3FF]">Шино</span>
      <span className="text-[#0066B3]">монт</span>
      <span className="text-[#FF0000]">аж</span>
    </span>
  );

  // Полная версия (десктоп)
  const FullLogo = () => (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl md:text-3xl font-bold tracking-tight">
        <GradientText />
      </span>
    </div>
  );

  // Компактная версия (мобильные)
  const CompactLogo = () => (
    <div className={`flex items-center ${className}`}>
      <span className="text-xl font-bold tracking-tight">
        <GradientText />
      </span>
    </div>
  );

  // Иконка для favicon (буква Ш)
  const IconLogo = () => (
    <div className={`relative ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-r from-[#00A3FF] via-[#0066B3] to-[#FF0000] rounded-lg flex items-center justify-center">
        <span className="font-bold text-white text-sm">Ш</span>
      </div>
    </div>
  );

  switch(variant) {
    case 'icon':
      return <Link to="/"><IconLogo /></Link>;
    case 'compact':
      return <Link to="/"><CompactLogo /></Link>;
    default:
      return <Link to="/"><FullLogo /></Link>;
  }
};

export default Logo;