
import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-darkblue to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you.
            Reach out to us at any time.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glassmorphism p-8 rounded-xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center md:items-start p-6 rounded-lg transition-all duration-300 hover:bg-white/5">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-electricblue mr-2" />
                <h3 className="text-xl font-semibold">Support</h3>
              </div>
              <a 
                href="mailto:support@smartblock.com" 
                className="text-gray-300 hover:text-electricblue transition-colors"
              >
                support@smartblock.com
              </a>
              <p className="mt-3 text-sm text-gray-400">
                Get help with your account, transactions, or technical issues
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-6 rounded-lg transition-all duration-300 hover:bg-white/5">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-electricblue mr-2" />
                <h3 className="text-xl font-semibold">Executive Team</h3>
              </div>
              <a 
                href="mailto:ceo@smartblock.com" 
                className="relative group text-gray-300 hover:text-electricblue transition-colors"
              >
                ceo@smartblock.com
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electricblue group-hover:w-full transition-all duration-300"></span>
              </a>
              <p className="mt-3 text-sm text-gray-400">
                For business inquiries and partnership opportunities
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-400">
              Our team is available Monday to Friday, 9AM - 6PM ET.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
