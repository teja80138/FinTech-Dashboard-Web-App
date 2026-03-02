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

const PIE_COLORS = ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b', '#f43f5e'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: 'rgba(17,24,39,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 16px' }}>
        <p style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '4px' }}>{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} style={{ color: p.color, fontWeight: 600, fontSize: '14px' }}>
            ${Number(p.value).toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const stats = [
  {
    label: 'Total Portfolio Value',
    value: '$100,000',
    change: '+8.5% this month',
    positive: true,
    icon: '💼',
    gradient: 'from-violet-600/20 to-indigo-600/20',
    border: 'border-violet-500/30',
    iconGrad: 'from-violet-600 to-indigo-600',
  },
  {
    label: 'Total Gain / Loss',
    value: '+$15,200',
    change: '+15.2% overall',
    positive: true,
    icon: '📈',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    border: 'border-emerald-500/30',
    iconGrad: 'from-emerald-500 to-teal-500',
  },
  {
    label: 'Cash Available',
    value: '$25,000',
    change: '20% of portfolio',
    positive: true,
    icon: '💵',
    gradient: 'from-cyan-600/20 to-blue-600/20',
    border: 'border-cyan-500/30',
    iconGrad: 'from-cyan-500 to-blue-500',
  },
  {
    label: 'Holdings',
    value: '5',
    change: 'Diversified assets',
    positive: true,
    icon: '🎯',
    gradient: 'from-amber-600/20 to-orange-600/20',
    border: 'border-amber-500/30',
    iconGrad: 'from-amber-500 to-orange-500',
  },
];

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'portfolio' | 'transactions'>('overview');

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Welcome, {user?.name?.split(' ')[0]} 👋</h1>
          <p className="page-subtitle">Here's your financial overview for today</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-slate-400"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Mar 2, 2026
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <div key={i}
            className={`relative overflow-hidden rounded-2xl p-5 border transition-all duration-300 hover:border-white/20 hover:shadow-card-hover`}
            style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', animationDelay: `${i * 80}ms` }}>
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-40 pointer-events-none`} />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide">{s.label}</p>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br ${s.iconGrad}`}>{s.icon}</span>
              </div>
              <p className={`text-2xl font-bold mb-1 ${s.label === 'Total Gain / Loss' ? 'text-emerald-400' : 'text-white'}`}>{s.value}</p>
              <p className={`text-xs ${s.positive ? 'text-emerald-400' : 'text-rose-400'}`}>{s.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs + Charts */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        {/* Tab bar */}
        <div className="flex border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          {(['overview', 'portfolio', 'transactions'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium capitalize transition-all duration-200 ${activeTab === tab
                  ? 'text-violet-400 border-b-2 border-violet-400 -mb-px'
                  : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-base font-semibold text-white mb-4">Portfolio Performance</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="value" stroke="#7c3aed" strokeWidth={2.5} dot={{ fill: '#7c3aed', r: 4, strokeWidth: 0 }} activeDot={{ r: 6, fill: '#a78bfa' }} name="Portfolio Value" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-4">Allocation by Ticker</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={portfolioData} cx="50%" cy="50%" innerRadius={60} outerRadius={100}
                      labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      dataKey="value" stroke="none">
                      {portfolioData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, 'Value']} contentStyle={{ background: 'rgba(17,24,39,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#e2e8f0' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Your Holdings</h3>
              <ResponsiveContainer width="100%" height={360}>
                <BarChart data={portfolioData} barSize={40}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Current Value" radius={[6, 6, 0, 0]}>
                    {portfolioData.map((_entry, index) => (
                      <Cell key={`bar-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Recent Transactions</h3>
              <div className="overflow-x-auto">
                <table className="w-full dark-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Symbol</th>
                      <th>Shares</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: '2024-02-20', type: 'BUY', symbol: 'AAPL', shares: 10, price: '$189.50', total: '$1,895.00' },
                      { date: '2024-02-18', type: 'SELL', symbol: 'GOOGL', shares: 5, price: '$142.30', total: '$711.50' },
                      { date: '2024-02-15', type: 'BUY', symbol: 'MSFT', shares: 8, price: '$320.45', total: '$2,563.60' },
                      { date: '2024-02-12', type: 'BUY', symbol: 'TSLA', shares: 3, price: '$245.60', total: '$736.80' },
                    ].map((tx, i) => (
                      <tr key={i}>
                        <td className="text-slate-400">{tx.date}</td>
                        <td>
                          <span className={tx.type === 'BUY' ? 'badge-green' : 'badge-red'}>{tx.type}</span>
                        </td>
                        <td className="font-semibold text-white">{tx.symbol}</td>
                        <td>{tx.shares}</td>
                        <td>{tx.price}</td>
                        <td className="font-semibold text-white">{tx.total}</td>
                      </tr>
                    ))}
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
