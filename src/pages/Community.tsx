import React from 'react';

export const Community: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Community</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-4">Connect with other investors, share insights, and learn together.</p>
        <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          Join Community
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📢 Community Forums</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">▸</span>
              <span className="text-gray-700">Investment Strategies</span>
              <span className="ml-auto text-gray-500 text-sm">2.5K posts</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">▸</span>
              <span className="text-gray-700">Market Analysis</span>
              <span className="ml-auto text-gray-500 text-sm">1.8K posts</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">▸</span>
              <span className="text-gray-700">Beginner's Guide</span>
              <span className="ml-auto text-gray-500 text-sm">980 posts</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">👥 Community Members</h3>
          <p className="text-gray-600 mb-4">Total Active Members: <span className="font-bold text-purple-600">12,543</span></p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-200"></div>
              <span className="text-gray-700">John Davis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-200"></div>
              <span className="text-gray-700">Sarah Miller</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-pink-200"></div>
              <span className="text-gray-700">Mike Johnson</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📚 Latest Discussions</h3>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <p className="font-semibold text-gray-900">Best stocks to invest in 2026?</p>
            <p className="text-gray-600 text-sm">Started by Sarah Miller • 23 replies</p>
          </div>
          <div className="border-b pb-4">
            <p className="font-semibold text-gray-900">Tips for portfolio diversification</p>
            <p className="text-gray-600 text-sm">Started by John Davis • 45 replies</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Market trends for Q1 2026</p>
            <p className="text-gray-600 text-sm">Started by Mike Johnson • 18 replies</p>
          </div>
        </div>
      </div>
    </div>
  );
};
