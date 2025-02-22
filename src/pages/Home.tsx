import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertCircle, CheckCircle, MapPin, TrendingUp, Users } from 'lucide-react';

const Home = () => {
  const [itemsFound, setItemsFound] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    // Animate statistics
    const timer = setInterval(() => {
      setItemsFound(prev => Math.min(prev + 1, 127));
      setSuccessRate(prev => Math.min(prev + 1, 92));
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      text: "Found my laptop within hours of posting! The community here is amazing.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Engineering Major",
      text: "Someone found my lost research notes and returned them the same day. Lifesaver!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Lost Something on Campus?
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-indigo-100">
              We help connect lost items with their owners across campus
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for lost items..."
                  className="w-full px-6 py-4 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                to="/report"
                className="group px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <AlertCircle className="h-5 w-5" />
                <span>Report Lost Item</span>
              </Link>
              <Link
                to="/report"
                className="group px-8 py-4 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Report Found Item</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{itemsFound}</div>
                  <div className="text-sm text-gray-600">Items Found Today</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{successRate}%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">5,000+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{testimonial.role}</div>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Items Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recently Lost Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1486312338219-ce68d2c6f44d' : item === 2 ? '1434493789847-2e41f7c35a4f' : '1526170375885-4d8ecf77b99f'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80`}
                  alt={`Lost Item ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {item === 1 ? 'MacBook Pro Laptop' : item === 2 ? 'Blue Backpack' : 'Car Keys'}
                  </h3>
                  <p className="text-gray-600 mb-2">Location: {item === 1 ? 'Library Study Room' : item === 2 ? 'Student Center' : 'Parking Lot B'}</p>
                  <p className="text-gray-600">Lost on March {item}, 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;