import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../types';

interface MenuProps {
  cart: Array<{ item: MenuItem; quantity: number }>;
  addToOrder: (item: MenuItem) => void;
}

export default function Menu({ cart, addToOrder }: MenuProps) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = ['all', 'starters', 'main', 'desserts'];

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 text-sm font-medium capitalize
                  ${selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }
                  ${category === 'all' ? 'rounded-l-md' : ''}
                  ${category === 'desserts' ? 'rounded-r-md' : ''}
                  border border-gray-200
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <MenuCard
              key={item.id}
              item={item}
              onAddToOrder={addToOrder}
            />
          ))}
        </div>

        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <span className="text-lg font-semibold">
                  {cart.reduce((acc, curr) => acc + curr.quantity, 0)} items
                </span>
                <span className="mx-2">|</span>
                <span className="text-lg font-bold text-indigo-600">
                  ${cart.reduce((acc, curr) => acc + (curr.item.price * curr.quantity), 0).toFixed(2)}
                </span>
              </div>
              <button
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
                onClick={() => navigate('/order')}
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}