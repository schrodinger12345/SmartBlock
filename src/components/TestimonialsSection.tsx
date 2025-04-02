
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  delay: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  position,
  delay 
}) => {
  return (
    <div 
      className={cn(
        "glassmorphism p-6 rounded-lg",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electricblue to-blue-500 flex items-center justify-center mr-4">
          <span className="text-darkblue font-bold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-lg text-gray-300 italic mb-4">"{quote}"</p>
          <p className="font-semibold">{author}</p>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonials = document.querySelectorAll('.testimonial');
            testimonials.forEach((testimonial, index) => {
              testimonial.classList.add('animate-fade-in');
              (testimonial as HTMLElement).style.animationDelay = `${index * 0.3}s`;
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

  return (
    <section className="py-16" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          What Our Users Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonial
            quote="This platform revolutionized how I approach crypto trading. The AI recommendations have consistently outperformed my expectations."
            author="Om Kute"
            position="Crypto Investor"
            delay="0ms"
          />
          <Testimonial
            quote="Zero fees is a game-changer. I've saved thousands in transaction costs while the smart contract security gives me peace of mind."
            author="Aryan Tambe"
            position="Tech Entrepreneur"
            delay="200ms"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
