
import React from 'react';

const testimonials = [
  {
    quote: "The quality is simply outstanding. You can feel the craftsmanship in every detail. My new favorite mug!",
    author: "Alex Johnson",
  },
  {
    quote: "I love the minimalist aesthetic. It's so hard to find products that are both beautiful and functional. FIVE nails it.",
    author: "Samantha Bee",
  },
  {
    quote: "Finally, a brand that gets it. No overwhelming choices, just five perfect things. The throw blanket is my constant companion.",
    author: "Michael Carter",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-charcoal">What Our Customers Say</h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-brand-charcoal">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
