import React from 'react';

const holdings = [
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 50, avgCost: 150.0, price: 189.5, value: 9475, gain: 1975, gainPct: 26.3 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 30, avgCost: 120.0, price: 142.3, value: 4269, gain: 670, gainPct: 18.6 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 25, avgCost: 280.0, price: 320.45, value: 8011, gain: 1011, gainPct: 14.4 },
  { symbol: 'TSLA', name: 'Tesla Inc.', shares: 20, avgCost: 200.0, price: 245.6, value: 4912, gain: 912, gainPct: 22.8 },
];

const stats = [
  { label: 'Total Holdings', value: '$125,450', color: 'text-white', border: 'rgba(255,255,255,0.08)' },
  { label: 'Total Gain', value: '+$15,230', color: 'text-emerald-400', border: 'rgba(16,185,129,0.25)' },
  { label: 'Return %', value: '+12.1%', color: 'text-violet-400', border: 'rgba(124,58,237,0.25)' },
  { label: 'Assets', value: '8', color: 'text-cyan-400', border: 'rgba(6,182,212,0.25)' },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="page-title">Portfolio</h1>
        <p className="page-subtitle">Monitor and manage your investment holdings</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-2xl p-5 transition hover:border-white/20"
            style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${s.border}` }}>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-2">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Holdings Table */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <h2 className="text-base font-semibold text-white">Your Holdings</h2>
          <button className="gradient-btn text-xs py-1.5 px-4">+ Add Position</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full dark-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Shares</th>
                <th>Avg Cost</th>
                <th>Current Price</th>
                <th>Value</th>
                <th>Gain / Loss</th>
                <th>Return %</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                        {h.symbol.charAt(0)}
                      </div>
                      <span className="font-bold text-white">{h.symbol}</span>
                    </div>
                  </td>
                  <td className="text-slate-400">{h.name}</td>
                  <td>{h.shares}</td>
                  <td>${h.avgCost.toFixed(2)}</td>
                  <td className="font-semibold text-white">${h.price.toFixed(2)}</td>
                  <td className="font-semibold text-white">${h.value.toLocaleString()}</td>
                  <td className="text-emerald-400 font-semibold">+${h.gain.toLocaleString()}</td>
                  <td>
                    <span className="badge-green">+{h.gainPct}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Allocation bars */}
        <div className="px-6 py-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Allocation</p>
          <div className="flex gap-1.5 h-3 rounded-full overflow-hidden">
            {holdings.map((h, i) => {
              const colors = ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b'];
              const total = holdings.reduce((s, h) => s + h.value, 0);
              return <div key={i} style={{ width: `${(h.value / total) * 100}%`, background: colors[i] }} title={h.symbol} />;
            })}
          </div>
          <div className="flex gap-4 mt-2 flex-wrap">
            {holdings.map((h, i) => {
              const colors = ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b'];
              const total = holdings.reduce((s, h) => s + h.value, 0);
              return (
                <span key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full" style={{ background: colors[i] }}></span>
                  {h.symbol} {((h.value / total) * 100).toFixed(1)}%
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
