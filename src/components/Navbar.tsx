import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, UserCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">CampusFind</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/lost-items" className="text-gray-600 hover:text-indigo-600">Lost Items</Link>
            <Link to="/found-items" className="text-gray-600 hover:text-indigo-600">Found Items</Link>
            <Link to="/report" className="text-gray-600 hover:text-indigo-600">Report Item</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <UserCircle className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;