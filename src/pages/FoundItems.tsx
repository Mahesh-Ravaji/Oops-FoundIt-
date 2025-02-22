import React from 'react';
import { Search } from 'lucide-react';

const FoundItems = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Found Items</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search found items..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder items - will be replaced with real data */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Found Item #{item}</h3>
              <p className="text-gray-600 mb-2">Location: Student Center</p>
              <p className="text-gray-600 mb-2">Date: March 1, 2024</p>
              <p className="text-gray-600 mb-4">Category: Personal Items</p>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Claim Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundItems;