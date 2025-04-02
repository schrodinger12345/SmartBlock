
import React, { useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              card.classList.add('animate-fade-in');
              (card as HTMLElement).style.animationDelay = `${index * 0.2}s`;
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      title: 'AI-Powered Trading',
      description: 'Advanced algorithms driving optimal trade execution.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="16" width="8" height="24" rx="1" fill="#00f5d0" className="animate-pulse" />
          <rect x="20" y="8" width="8" height="32" rx="1" fill="#00f5d0" />
          <rect x="34" y="20" width="8" height="20" rx="1" fill="#00f5d0" className="animate-pulse" />
        </svg>
      ),
      delay: '0ms'
    },
    {
      title: 'Zero-Fee Transactions',
      description: 'Trade without the burden of transaction fees.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="15" stroke="#00f5d0" strokeWidth="3" className="animate-pulse" />
          <path d="M24 16V32M20 20H28" stroke="#00f5d0" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      delay: '200ms'
    },
    {
      title: 'Secure Smart Contracts',
      description: 'Enterprise-grade security for all transactions.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12L10 18V28C10 33.5 16 38 24 42C32 38 38 33.5 38 28V18L24 12Z" stroke="#00f5d0" strokeWidth="3" className="animate-pulse" />
          <path d="M20 24L23 27L28 22" stroke="#00f5d0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      delay: '400ms'
    }
  ];

  return (
    <section id="features" className="py-20 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Cutting-Edge Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
