
import React, { useState } from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
  <header id="home" className="bg-white/80 backdrop-blur-md sticky top-0 z-40 w-full border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-charcoal">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Primary navigation" className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <a key={link.name} href={link.href} className="text-brand-charcoal hover:text-brand-green transition-colors duration-300 font-medium text-sm md:text-base">
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#home" className="text-2xl font-bold text-brand-charcoal tracking-wider" aria-label="FIVE home">
              FIVE
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.slice(2, 4).map((link) => (
                <a key={link.name} href={link.href} className="text-brand-charcoal hover:text-brand-green transition-colors duration-300 font-medium text-sm md:text-base">
                  {link.name}
                </a>
              ))}
            </div>

            <button onClick={onCartClick} className="relative text-brand-charcoal hover:text-brand-green transition-colors duration-300">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-white text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-brand-charcoal">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <CloseIcon className="h-6 w-6"/>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg text-brand-charcoal hover:text-brand-green transition-colors duration-300 py-2">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
