import React, { useState } from 'react';
import { useAuthStore } from '../contexts/authStore';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'portfolio' | 'transactions'>('overview');

  // Sample data for charts
  const portfolioData: ChartData[] = [
    { name: 'AAPL', value: 25000 },
    { name: 'GOOGL', value: 18000 },
    { name: 'MSFT', value: 22000 },
    { name: 'TSLA', value: 15000 },
    { name: 'AMZN', value: 20000 },
  ];

  const performanceData = [
    { date: 'Jan', value: 50000 },
    { date: 'Feb', value: 55000 },
    { date: 'Mar', value: 52000 },
    { date: 'Apr', value: 61000 },
    { date: 'May', value: 68000 },
    { date: 'Jun', value: 75000 },
    { date: 'Jul', value: 80000 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome {user?.name}!</h1>
        <p className="text-gray-600">Here's your financial overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Total Portfolio Value</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$100,000</p>
          <p className="text-green-600 text-sm mt-2">+8.5% this month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Total Gain/Loss</p>
          <p className="text-3xl font-bold text-green-600 mt-2">+$15,200</p>
          <p className="text-gray-600 text-sm mt-2">+15.2% overall</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Cash Available</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$25,000</p>
          <p className="text-gray-600 text-sm mt-2">20% of portfolio</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Holdings</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
          <p className="text-gray-600 text-sm mt-2">Diversified assets</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition ${
                activeTab === 'portfolio'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('transactions')}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition ${
                activeTab === 'transactions'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Transactions
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Portfolio Performance Chart */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      dot={{ fill: '#3b82f6' }}
                      name="Portfolio Value"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Portfolio Allocation Pie Chart */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Allocation by Ticker</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {portfolioData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Holdings</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={portfolioData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="value" fill="#3b82f6" name="Current Value" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-gray-900">Date</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-900">Type</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-900">Symbol</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-900">Shares</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-900">Price</th>
                      <th className="px-6 py-3 text-left font-semibold text-gray-900">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900">2024-02-20</td>
                      <td className="px-6 py-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                          BUY
                        </span>
                      </td>
                      <td className="px-6 py-3 font-semibold text-gray-900">AAPL</td>
                      <td className="px-6 py-3 text-gray-600">10</td>
                      <td className="px-6 py-3 text-gray-600">$189.50</td>
                      <td className="px-6 py-3 font-semibold text-gray-900">$1,895.00</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900">2024-02-18</td>
                      <td className="px-6 py-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">
                          SELL
                        </span>
                      </td>
                      <td className="px-6 py-3 font-semibold text-gray-900">GOOGL</td>
                      <td className="px-6 py-3 text-gray-600">5</td>
                      <td className="px-6 py-3 text-gray-600">$142.30</td>
                      <td className="px-6 py-3 font-semibold text-gray-900">$711.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
