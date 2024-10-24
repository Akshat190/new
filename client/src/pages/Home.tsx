
import { Link } from 'react-router-dom';
import { QrCode, ChefHat } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Scan. Order. <span className="text-indigo-200">Enjoy.</span>
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Experience contactless dining with our smart QR menu system. 
            Quick, easy, and safe ordering right from your table.
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <QRCodeSVG 
                value="https://qr-menu-demo.com/menu" 
                size={200}
                level="H"
                includeMargin={true}
              />
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <QrCode className="mr-2 h-5 w-5" />
                View Menu
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 shadow-sm"
              >
                <ChefHat className="mr-2 h-5 w-5" />
                Restaurant Dashboard
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
