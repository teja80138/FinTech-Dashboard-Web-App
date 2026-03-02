import React, { useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell,
} from 'recharts';

const stockData = [
  { month: 'Jan', AAPL: 182, GOOGL: 135, MSFT: 310, TSLA: 210 },
  { month: 'Feb', AAPL: 185, GOOGL: 138, MSFT: 315, TSLA: 195 },
  { month: 'Mar', AAPL: 188, GOOGL: 141, MSFT: 318, TSLA: 220 },
  { month: 'Apr', AAPL: 186, GOOGL: 139, MSFT: 320, TSLA: 235 },
  { month: 'May', AAPL: 190, GOOGL: 142, MSFT: 319, TSLA: 245 },
  { month: 'Jun', AAPL: 194, GOOGL: 145, MSFT: 325, TSLA: 250 },
  { month: 'Jul', AAPL: 189, GOOGL: 143, MSFT: 321, TSLA: 242 },
];

const allocationData = [
  { name: 'AAPL', value: 9475, color: '#7c3aed' },
  { name: 'GOOGL', value: 4269, color: '#06b6d4' },
  { name: 'MSFT', value: 8011, color: '#10b981' },
  { name: 'TSLA', value: 4912, color: '#f59e0b' },
  { name: 'Cash', value: 4000, color: '#f43f5e' },
];

const monthlyReturns = [
  { month: 'Jan', return: 2.5, benchmark: 1.8 },
  { month: 'Feb', return: -1.2, benchmark: 0.5 },
  { month: 'Mar', return: 3.8, benchmark: 2.1 },
  { month: 'Apr', return: 1.5, benchmark: 0.9 },
  { month: 'May', return: 4.2, benchmark: 2.8 },
  { month: 'Jun', return: 2.9, benchmark: 1.6 },
  { month: 'Jul', return: -0.5, benchmark: 0.3 },
];

const volumeData = [
  { day: 'Mon', buy: 12000, sell: 8500 },
  { day: 'Tue', buy: 9500, sell: 11200 },
  { day: 'Wed', buy: 14500, sell: 9800 },
  { day: 'Thu', buy: 11000, sell: 12500 },
  { day: 'Fri', buy: 16000, sell: 13000 },
];

const portfolioHistory = [
  { date: 'Aug', value: 58000 },
  { date: 'Sep', value: 62000 },
  { date: 'Oct', value: 59000 },
  { date: 'Nov', value: 68000 },
  { date: 'Dec', value: 72000 },
  { date: 'Jan', value: 78000 },
  { date: 'Feb', value: 82000 },
  { date: 'Mar', value: 100000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: 'rgba(17,24,39,0.97)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 16px' }}>
        <p style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '6px' }}>{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} style={{ color: p.color, fontWeight: 600, fontSize: '13px', marginBottom: '2px' }}>
            {p.name}: {typeof p.value === 'number' && p.value > 999
              ? `$${p.value.toLocaleString()}`
              : `${p.value}${p.name === 'return' || p.name === 'benchmark' ? '%' : ''}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};



export const Charts: React.FC = () => {
  const [activeChart, setActiveChart] = useState<string | null>(null);

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Charts</h1>
          <p className="page-subtitle">Interactive financial data visualizations</p>
        </div>
        <div className="flex gap-2">
          {['1W', '1M', '3M', '1Y'].map((r) => (
            <button
              key={r}
              onClick={() => setActiveChart(r === activeChart ? null : r)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${activeChart === r
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
                }`}
              style={activeChart === r
                ? { background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', border: '1px solid rgba(139,92,246,0.4)' }
                : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* 2x2 Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Stock Performance */}
        <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-white">Stock Performance</h2>
            <span className="badge-blue">Last 7 months</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }} />
              <Line type="monotone" dataKey="AAPL" stroke="#7c3aed" strokeWidth={2} dot={false} name="AAPL" />
              <Line type="monotone" dataKey="GOOGL" stroke="#06b6d4" strokeWidth={2} dot={false} name="GOOGL" />
              <Line type="monotone" dataKey="MSFT" stroke="#10b981" strokeWidth={2} dot={false} name="MSFT" />
              <Line type="monotone" dataKey="TSLA" stroke="#f59e0b" strokeWidth={2} dot={false} name="TSLA" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Asset Allocation — bar chart */}
        <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-white">Asset Allocation</h2>
            <span className="badge-blue">By value</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={allocationData} barSize={32}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} name="Value">
                {allocationData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          {/* Legend */}
          <div className="flex flex-wrap gap-3 mt-4">
            {allocationData.map((a) => (
              <span key={a.name} className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full" style={{ background: a.color }} />
                {a.name} (${(a.value / 1000).toFixed(1)}k)
              </span>
            ))}
          </div>
        </div>

        {/* Monthly Returns */}
        <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-white">Monthly Returns</h2>
            <span className="badge-green">vs Benchmark</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={monthlyReturns} barGap={4} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }} />
              <Bar dataKey="return" name="return" fill="url(#retGrad)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="benchmark" name="benchmark" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Trading Volume */}
        <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-white">Trading Volume</h2>
            <span className="badge-yellow">This week</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={volumeData} barGap={4} barSize={24}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }} />
              <Bar dataKey="buy" name="Buy Orders" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="sell" name="Sell Orders" fill="#f43f5e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Full-width portfolio performance */}
      <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-white">Portfolio Performance Over Time</h2>
            <p className="text-slate-500 text-xs mt-0.5">All-time value growth</p>
          </div>
          <span className="badge-green">▲ +72.4% total</span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={portfolioHistory}>
            <defs>
              <linearGradient id="portGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" stroke="#7c3aed" strokeWidth={2.5}
              fill="url(#portGrad)" name="Portfolio" dot={{ fill: '#7c3aed', r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#a78bfa' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
