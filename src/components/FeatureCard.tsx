
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  delay
}) => {
  return (
    <div 
      className={cn(
        "glassmorphism rounded-xl p-6 transition-all duration-300",
        "hover:shadow-lg hover:shadow-electricblue/20 hover:scale-105",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 text-electricblue">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
