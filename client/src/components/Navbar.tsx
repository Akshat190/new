
import { Link } from 'react-router-dom';
import { Menu, User, Info, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Menu className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">QR Menu</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/about" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            <Link to="/signin" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}