import React, { useState } from 'react';

export const Wallet: React.FC = () => {
  const [balance] = useState(12500.50);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Wallet</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow p-6 text-white">
          <p className="text-blue-100 text-sm">Available Balance</p>
          <p className="text-3xl font-bold mt-2">${balance.toFixed(2)}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow p-6 text-white">
          <p className="text-green-100 text-sm">Total Income</p>
          <p className="text-3xl font-bold mt-2">$45,230</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-lg shadow p-6 text-white">
          <p className="text-red-100 text-sm">Total Expenses</p>
          <p className="text-3xl font-bold mt-2">$8,450</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Date</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Description</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Type</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-900">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3">Feb 23, 2026</td>
                <td className="px-4 py-3">Salary Deposit</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Income</span></td>
                <td className="px-4 py-3 text-right text-green-600 font-semibold">+$5,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Feb 22, 2026</td>
                <td className="px-4 py-3">Utilities Bill</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Expense</span></td>
                <td className="px-4 py-3 text-right text-red-600 font-semibold">-$250</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Feb 20, 2026</td>
                <td className="px-4 py-3">Stock Purchase</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Investment</span></td>
                <td className="px-4 py-3 text-right text-blue-600 font-semibold">-$1,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition">
            <p className="font-semibold text-gray-900">Visa Card</p>
            <p className="text-gray-600 text-sm">**** **** **** 4242</p>
          </div>
          <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-gray-400 transition">
            <p className="font-semibold text-gray-900">Bank Account</p>
            <p className="text-gray-600 text-sm">Primary Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};
