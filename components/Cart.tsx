
import React from 'react';
import type { CartItem, Product } from '../types';
import CloseIcon from './icons/CloseIcon';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold text-brand-charcoal">Shopping Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-brand-charcoal">
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex items-center justify-center">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-4">
              <ul className="space-y-4">
                {cartItems.map(item => (
                  <li key={item.product.id} className="flex items-start space-x-4">
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 object-cover rounded-md" />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-brand-charcoal">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => onUpdateQuantity(item.product.id, parseInt(e.target.value, 10))}
                          className="w-16 p-1 border rounded-md text-center"
                        />
                        <button onClick={() => onRemoveItem(item.product.id)} className="ml-4 text-sm text-red-600 hover:underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between font-semibold text-lg">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Shipping and taxes calculated at checkout.</p>
              <button className="w-full mt-4 bg-brand-green text-white font-bold py-3 rounded-md hover:bg-brand-green-dark transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
