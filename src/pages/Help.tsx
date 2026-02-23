import React from 'react';

export const Help: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">❓ Frequently Asked Questions</h3>
          <ul className="space-y-3">
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">How do I create an account?</p>
            </li>
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">How do I add funds to my wallet?</p>
            </li>
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">Is my data secure?</p>
            </li>
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">How do I withdraw my funds?</p>
            </li>
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">What are trading fees?</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📖 Knowledge Base</h3>
          <ul className="space-y-3">
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">Getting Started Guide</p>
            </li>
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">Investment Basics</p>
            </li>
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">Portfolio Management</p>
            </li>
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">Risk Management</p>
            </li>
            <li>
              <p className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">Tax Information</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📞 Contact Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl mb-2">💬</p>
            <p className="font-semibold text-gray-900">Live Chat</p>
            <p className="text-gray-600 text-sm">Available 24/7</p>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-2">📧</p>
            <p className="font-semibold text-gray-900">Email Support</p>
            <p className="text-gray-600 text-sm">support@finance.com</p>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-2">📱</p>
            <p className="font-semibold text-gray-900">Phone Support</p>
            <p className="text-gray-600 text-sm">+1 (800) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-2">💡 Tip</h3>
        <p className="text-blue-800">Check out our video tutorials on YouTube for step-by-step guidance on using all features of the platform.</p>
      </div>
    </div>
  );
};
