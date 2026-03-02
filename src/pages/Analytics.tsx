import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const trafficData = [
  { day: 'Mon', visitors: 4200, conversions: 185 },
  { day: 'Tue', visitors: 3800, conversions: 142 },
  { day: 'Wed', visitors: 5100, conversions: 210 },
  { day: 'Thu', visitors: 4700, conversions: 198 },
  { day: 'Fri', visitors: 6200, conversions: 256 },
  { day: 'Sat', visitors: 5800, conversions: 230 },
  { day: 'Sun', visitors: 4900, conversions: 194 },
];

const metrics = [
  { label: 'Total Views', value: '45,231', change: '+12.5%', positive: true, color: 'text-violet-400', bg: 'from-violet-600/20 to-indigo-600/20', border: 'rgba(124,58,237,0.25)' },
  { label: 'Conversion Rate', value: '3.8%', change: '+2.1%', positive: true, color: 'text-cyan-400', bg: 'from-cyan-600/20 to-blue-600/20', border: 'rgba(6,182,212,0.25)' },
  { label: 'Avg. Order Value', value: '$1,245', change: '-3.2%', positive: false, color: 'text-rose-400', bg: 'from-rose-600/20 to-pink-600/20', border: 'rgba(244,63,94,0.25)' },
];

const topPages = [
  { name: 'Dashboard', visits: 8542, pct: 90 },
  { name: 'Portfolio', visits: 6234, pct: 66 },
  { name: 'Analytics', visits: 4123, pct: 44 },
  { name: 'Wallet', visits: 3891, pct: 41 },
  { name: 'Charts', visits: 2650, pct: 28 },
];

const userActivity = [
  { label: 'Active Users', value: '1,234', color: 'text-violet-400', badge: 'badge-blue' },
  { label: 'New Signups', value: '+45', color: 'text-emerald-400', badge: 'badge-green' },
  { label: 'Bounce Rate', value: '2.5%', color: 'text-rose-400', badge: 'badge-red' },
  { label: 'Avg. Session', value: '4m 32s', color: 'text-cyan-400', badge: 'badge-blue' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: 'rgba(17,24,39,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 16px' }}>
        <p style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '6px' }}>{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} style={{ color: p.color, fontWeight: 600, fontSize: '13px', marginBottom: '2px' }}>
            {p.name}: {p.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="page-title">Analytics</h1>
        <p className="page-subtitle">Track your platform performance and user insights</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {metrics.map((m, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-white/20"
            style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${m.border}` }}>
            <div className={`absolute inset-0 bg-gradient-to-br ${m.bg} opacity-40 pointer-events-none`} />
            <div className="relative">
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">{m.label}</p>
              <p className={`text-3xl font-bold ${m.color} mb-1`}>{m.value}</p>
              <span className={m.positive ? 'badge-green' : 'badge-red'}>
                {m.positive ? '▲' : '▼'} {m.change} from last week
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Traffic Chart */}
      <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-white">Traffic Overview</h2>
          <span className="badge-blue">Last 7 days</span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={trafficData}>
            <defs>
              <linearGradient id="visitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="conversions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="visitors" stroke="#7c3aed" strokeWidth={2} fill="url(#visitors)" name="Visitors" />
            <Area type="monotone" dataKey="conversions" stroke="#06b6d4" strokeWidth={2} fill="url(#conversions)" name="Conversions" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Top Pages */}
        <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="text-base font-semibold text-white mb-5">Top Pages</h2>
          <div className="space-y-4">
            {topPages.map((page, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-slate-300 text-sm">{page.name}</span>
                  <span className="text-slate-400 text-xs">{page.visits.toLocaleString()}</span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-1.5 rounded-full" style={{ width: `${page.pct}%`, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Activity */}
        <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="text-base font-semibold text-white mb-5">User Activity</h2>
          <div className="space-y-4">
            {userActivity.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                <span className="text-slate-400 text-sm">{item.label}</span>
                <span className={`font-bold ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
