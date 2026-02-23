import React from 'react';

export const Charts: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Charts</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Stock Performance</h2>
          <div className="h-64 bg-gradient-to-r from-blue-50 to-blue-100 rounded flex items-center justify-center text-gray-400">
            Stock Performance Chart
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Asset Allocation</h2>
          <div className="h-64 bg-gradient-to-r from-purple-50 to-purple-100 rounded flex items-center justify-center text-gray-400">
            Allocation Chart
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Monthly Returns</h2>
          <div className="h-64 bg-gradient-to-r from-green-50 to-green-100 rounded flex items-center justify-center text-gray-400">
            Returns Chart
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trading Volume</h2>
          <div className="h-64 bg-gradient-to-r from-orange-50 to-orange-100 rounded flex items-center justify-center text-gray-400">
            Volume Chart
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Portfolio Performance Over Time</h2>
        <div className="h-80 bg-gradient-to-r from-gray-50 to-gray-100 rounded flex items-center justify-center text-gray-400">
          Full Portfolio Chart
        </div>
      </div>
    </div>
  );
};
