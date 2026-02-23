import React from 'react';

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Total Views</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">45,231</p>
          <p className="text-green-600 text-sm mt-2">+12.5% from last week</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Conversion Rate</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">3.8%</p>
          <p className="text-green-600 text-sm mt-2">+2.1% improvement</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm">Average Order Value</p>
          <p className="text-3xl font-bold text-pink-600 mt-2">$1,245</p>
          <p className="text-red-600 text-sm mt-2">-3.2% from last week</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Traffic Overview</h2>
        <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded flex items-center justify-center text-gray-400">
          Chart visualization will be rendered here
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Pages</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Dashboard</span>
              <span className="text-gray-500">8,542</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Portfolio</span>
              <span className="text-gray-500">6,234</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Analytics</span>
              <span className="text-gray-500">4,123</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">User Activity</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Active Users</span>
              <span className="text-blue-600 font-semibold">1,234</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">New Signups</span>
              <span className="text-green-600 font-semibold">+45</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Bounce Rate</span>
              <span className="text-red-600 font-semibold">2.5%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
