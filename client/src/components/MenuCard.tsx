import React from 'react';
import { Clock } from 'lucide-react';
import { MenuItem } from '../types';
import { motion } from 'framer-motion';

interface MenuCardProps {
  item: MenuItem;
  onAddToOrder: (item: MenuItem) => void;
}

export default function MenuCard({ item, onAddToOrder }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
        <p className="mt-2 text-gray-600">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <Clock className="h-5 w-5 mr-1" />
            <span>{item.estimatedTime} mins</span>
          </div>
          <span className="text-xl font-bold text-indigo-600">${item.price}</span>
        </div>
        <button
          onClick={() => onAddToOrder(item)}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add to Order
        </button>
      </div>
    </motion.div>
  );
}