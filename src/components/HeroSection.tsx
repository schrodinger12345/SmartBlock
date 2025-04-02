
import React, { useEffect, useRef } from 'react';
import AbstractShape from './AbstractShape';
import { Button } from "./ui/button";

const HeroSection = () => {
  // References for animation
  const heading1 = useRef<HTMLHeadingElement>(null);
  const heading2 = useRef<HTMLHeadingElement>(null);
  const button = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply animation classes after component mount
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Word by word animation for the main heading
            if (heading1.current) {
              const words = heading1.current.innerText.split(' ');
              heading1.current.innerHTML = '';
              words.forEach((word, i) => {
                const span = document.createElement('span');
                span.innerText = (i > 0 ? ' ' : '') + word;
                span.classList.add('opacity-0');
                span.style.animationDelay = `${i * 0.2}s`;
                span.classList.add('animate-reveal');
                span.style.display = 'inline-block';
                heading1.current?.appendChild(span);
              });
            }
            
            // Simple fade in for subheader
            if (heading2.current) {
              heading2.current.classList.add('animate-fade-in');
              heading2.current.style.animationDelay = '0.7s';
            }
            
            // Button animation
            if (button.current) {
              button.current.classList.add('animate-fade-in');
              button.current.style.animationDelay = '1s';
            }
            
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heading1.current) {
      observer.observe(heading1.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 
              ref={heading1}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            >
              <span className="text-gradient">Decentralize Your Future</span>
            </h1>
            <h2 
              ref={heading2} 
              className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0"
            >
              Trade with zero fees. Powered by AI.
            </h2>
            <div ref={button} className="opacity-0">
              <Button 
                className="bg-electricblue hover:bg-darkblue border-2 border-electricblue text-darkblue hover:text-electricblue font-semibold rounded-md transition-all duration-300 hover:shadow-glow"
              >
                Get Early Access
              </Button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="w-full md:w-1/2">
            <div className="h-[300px] md:h-[400px] lg:h-[500px]">
              <AbstractShape />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
