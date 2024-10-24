import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';

interface OrderPageProps {
  cart: Array<{ item: MenuItem; quantity: number }>;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

export default function OrderPage({ cart, updateQuantity, removeItem, clearCart }: OrderPageProps) {
  const navigate = useNavigate();
  const [tableNumber, setTableNumber] = useState<string>('');
  const [error, setError] = useState<string>('');

  const totalAmount = cart.reduce(
    (acc, curr) => acc + curr.item.price * curr.quantity,
    0
  );

  const maxEstimatedTime = Math.max(
    ...cart.map(item => item.item.estimatedTime)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tableNumber) {
      setError('Please enter your table number');
      return;
    }
    
    // Here you would typically send the order to a backend
    const order = {
      items: cart,
      tableNumber: parseInt(tableNumber),
      totalAmount,
      timestamp: new Date(),
      status: 'pending'
    };

    console.log('Order placed:', order);
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cart.map(({ item, quantity }) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="flex items-center mt-2 text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{item.estimatedTime} mins</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, quantity - 1)}
                        className="text-gray-500 hover:text-gray-700"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, quantity + 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold">${(item.price * quantity).toFixed(2)}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold mb-6">Complete Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="tableNumber" className="block text-sm font-medium text-gray-700">
                  Table Number
                </label>
                <input
                  type="number"
                  id="tableNumber"
                  value={tableNumber}
                  onChange={(e) => {
                    setTableNumber(e.target.value);
                    setError('');
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your table number"
                />
                {error && (
                  <div className="mt-2 flex items-center text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {error}
                  </div>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 text-gray-600">
                  <span>Estimated Time</span>
                  <span>{maxEstimatedTime} mins</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Place Order
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}