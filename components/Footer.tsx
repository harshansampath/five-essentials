
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold">FIVE</h3>
            <p className="mt-2 text-gray-400 max-w-sm">Quality essentials, designed for the modern individual. Simplify and elevate your everyday.</p>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold tracking-wider uppercase">Contact</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="mailto:hello@five.com" className="hover:text-white transition">hello@five.com</a></li>
              <li>123 Minimalist Way, Suite 100</li>
              <li>Design City, 55555</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FIVE. All Rights Reserved.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-white transition">Privacy Policy</a> | <a href="#" className="hover:text-white transition">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
