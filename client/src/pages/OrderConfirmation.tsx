import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto px-4 py-8 bg-white rounded-lg shadow-md"
      >
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your order has been successfully placed and will be prepared shortly.
          </p>
          <div className="border-t border-b border-gray-200 py-4 my-6">
            <p className="text-sm text-gray-500 mb-2">Order number</p>
            <p className="text-lg font-semibold">{`#${Math.random().toString(36).substr(2, 9).toUpperCase()}`}</p>
          </div>
          <Link
            to="/menu"
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Return to Menu
          </Link>
        </div>
      </motion.div>
    </div>
  );
}