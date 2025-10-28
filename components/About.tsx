
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-charcoal">Less, but Better.</h2>
          <div className="mt-6 space-y-6 text-gray-600 text-lg">
            <p>
              In a world of endless options, we choose to focus on five. At FIVE, we believe in the power of simplicity and the importance of quality. Our journey began with a simple mission: to identify and perfect the essential items that enhance your daily life, without adding to the clutter.
            </p>
            <p>
              Each product in our curated collection is the result of meticulous design, sustainable sourcing, and a commitment to craftsmanship. We create items that are not just beautiful, but also durable and purposeful, designed to be cherished for years to come. Welcome to a more intentional way of living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
