
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-center min-h-[calc(100vh-80px)] md:min-h-[500px]">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-charcoal tracking-tight leading-tight">
              Crafted for Your Everyday
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of five essential items, designed with quality, simplicity, and purpose in mind.
            </p>
            <a
              href="#products"
              className="mt-8 inline-block bg-brand-green text-white font-bold py-3 px-8 rounded-md hover:bg-brand-green-dark transition-all duration-300 transform hover:scale-105"
            >
              Explore the Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
