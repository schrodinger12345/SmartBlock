
import React from 'react';

const AbstractShape = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main circle */}
      <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-electricblue/30 animate-pulse" />
      
      {/* Inner cryptocurrency symbol */}
      <div className="relative z-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M60 10L75 30L60 50L45 30L60 10Z" 
            fill="#00f5d0" 
            className="animate-pulse"
          />
          <path 
            d="M60 70L75 90L60 110L45 90L60 70Z" 
            fill="#00f5d0" 
            className="animate-pulse" 
          />
          <path 
            d="M30 40L50 40L50 80L30 80L30 40Z" 
            fill="#3a80ff" 
            fillOpacity="0.8" 
            className="animate-pulse"
          />
          <path 
            d="M70 40L90 40L90 80L70 80L70 40Z" 
            fill="#3a80ff" 
            fillOpacity="0.8" 
            className="animate-pulse"
          />
        </svg>
      </div>
      
      {/* Orbiting dots */}
      <div 
        className="absolute w-full h-full rounded-full" 
        style={{animation: 'spin 8s linear infinite'}}
      >
        <div className="absolute w-4 h-4 rounded-full bg-electricblue top-0 left-1/2 transform -translate-x-1/2" />
      </div>
      
      <div 
        className="absolute w-full h-full rounded-full" 
        style={{animation: 'spin 12s linear infinite'}}
      >
        <div className="absolute w-3 h-3 rounded-full bg-blue-400 bottom-4 right-8" />
      </div>
      
      {/* Small decorative shapes */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 rotate-45 bg-blue-500/20 rounded-sm animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-electricblue/30 rounded-full" />
    </div>
  );
};

export default AbstractShape;
