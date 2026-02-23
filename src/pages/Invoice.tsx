import React from 'react';

export const Invoice: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Invoice</h1>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          + New Invoice
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex gap-4 mb-4">
            <button className="px-4 py-2 bg-purple-600 text-white rounded font-medium">ALL</button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">PAID</button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">PENDING</button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">OVERDUE</button>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Invoice ID</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Client</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">INV-001</td>
              <td className="px-6 py-4">Tech Solutions Inc</td>
              <td className="px-6 py-4">Feb 15, 2026</td>
              <td className="px-6 py-4">$2,500</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Paid</span>
              </td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline text-sm">View</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">INV-002</td>
              <td className="px-6 py-4">Global Marketing</td>
              <td className="px-6 py-4">Feb 18, 2026</td>
              <td className="px-6 py-4">$3,200</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Pending</span>
              </td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline text-sm">View</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">INV-003</td>
              <td className="px-6 py-4">Creative Agency</td>
              <td className="px-6 py-4">Feb 10, 2026</td>
              <td className="px-6 py-4">$1,800</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">Overdue</span>
              </td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline text-sm">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
