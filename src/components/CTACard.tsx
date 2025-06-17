
import React from 'react';
import { Button } from '@/components/ui/button';

interface CTACardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonStyle: 'primary' | 'secondary' | 'outline';
  backgroundColor: string;
  onButtonClick: () => void;
}

const CTACard: React.FC<CTACardProps> = ({
  title,
  description,
  buttonText,
  buttonStyle,
  backgroundColor,
  onButtonClick
}) => {
  const getButtonClasses = () => {
    switch (buttonStyle) {
      case 'primary':
        return 'bg-blue-dark hover:bg-blue-dark/90 text-white';
      case 'secondary':
        return 'bg-orange-warm hover:bg-orange-warm/90 text-white';
      case 'outline':
        return 'border-2 border-blue-dark text-blue-dark bg-transparent hover:bg-blue-dark hover:text-white';
      default:
        return 'bg-blue-dark hover:bg-blue-dark/90 text-white';
    }
  };

  return (
    <div 
      className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
      style={{ backgroundColor }}
    >
      <h3 className="text-xl font-semibold font-lato text-gray-800 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 font-lato mb-6 leading-relaxed">
        {description}
      </p>
      <Button
        onClick={onButtonClick}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${getButtonClasses()}`}
      >
        Submit Details
      </Button>
    </div>
  );
};

export default CTACard;
