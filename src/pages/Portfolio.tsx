import React from 'react';

export const Portfolio: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm">Total Holdings</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">$125,450</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm">Total Gain</p>
          <p className="text-2xl font-bold text-green-600 mt-2">+$15,230</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm">Return %</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">+12.1%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm">Diversification</p>
          <p className="text-2xl font-bold text-purple-600 mt-2">8 Assets</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Your Holdings</h2>
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Symbol</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Shares</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Avg Cost</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Current Price</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Value</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Gain/Loss</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Return %</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold">AAPL</td>
              <td className="px-4 py-3">50</td>
              <td className="px-4 py-3">$150.00</td>
              <td className="px-4 py-3">$189.50</td>
              <td className="px-4 py-3">$9,475</td>
              <td className="px-4 py-3 text-green-600">+$1,975</td>
              <td className="px-4 py-3 text-green-600">+26.3%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold">GOOGL</td>
              <td className="px-4 py-3">30</td>
              <td className="px-4 py-3">$120.00</td>
              <td className="px-4 py-3">$142.30</td>
              <td className="px-4 py-3">$4,269</td>
              <td className="px-4 py-3 text-green-600">+$670</td>
              <td className="px-4 py-3 text-green-600">+18.6%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold">MSFT</td>
              <td className="px-4 py-3">25</td>
              <td className="px-4 py-3">$280.00</td>
              <td className="px-4 py-3">$320.45</td>
              <td className="px-4 py-3">$8,011</td>
              <td className="px-4 py-3 text-green-600">+$1,011</td>
              <td className="px-4 py-3 text-green-600">+14.4%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold">TSLA</td>
              <td className="px-4 py-3">20</td>
              <td className="px-4 py-3">$200.00</td>
              <td className="px-4 py-3">$245.60</td>
              <td className="px-4 py-3">$4,912</td>
              <td className="px-4 py-3 text-green-600">+$912</td>
              <td className="px-4 py-3 text-green-600">+22.8%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
