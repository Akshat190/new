import { useState } from 'react';
import { Download, PlusCircle, DollarSign, ShoppingBag, Users, Utensils } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import AddMenuItemModal from '../components/AddMenuItemModal';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState<Array<{ tableNumber: number; items: string[]; totalAmount: number }>>([]);

  // Mock data - In a real app, this would come from your backend
  const stats = {
    totalRevenue: 15849.99,
    totalOrders: 234,
    activeCustomers: 45,
    popularDish: "Grilled Salmon"
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'restaurant-menu-qr.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const handleNewOrder = (tableNumber: number, items: string[], totalAmount: number) => {
    setOrders(prevOrders => [...prevOrders, { tableNumber, items, totalAmount }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Monitor your restaurant's performance and manage menu items</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
              </div>
              <ShoppingBag className="h-8 w-8 text-blue-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Customers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeCustomers}</p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Popular Dish</p>
                <p className="text-2xl font-bold text-gray-900">{stats.popularDish}</p>
              </div>
              <Utensils className="h-8 w-8 text-orange-500" />
            </div>
          </motion.div>
        </div>

        {/* Orders Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
          <ul>
            {orders.map((order, index) => (
              <li key={index} className="mb-2">
                <p className="text-sm text-gray-600">Table Number: {order.tableNumber}</p>
                <p className="text-sm text-gray-600">Dishes: {order.items.join(', ')}</p>
                <p className="text-sm text-gray-600">Total Amount: ${order.totalAmount.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Menu QR Code</h2>
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <QRCodeSVG
                id="qr-code"
                value={window.location.origin + '/menu'}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <button
              onClick={downloadQRCode}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Download className="h-5 w-5 mr-2" />
              Download QR Code
            </button>
          </div>
        </motion.div>

        {/* Menu Management Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Menu Management</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Add Menu Item
            </button>
          </div>
        </motion.div>

        <AddMenuItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={(newItem) => {
            console.log('New item added:', newItem);
            setIsModalOpen(false);
          }}
        />
      </div>
    </div>
  );
}
