import React, { useState } from 'react';

const invoices = [
  { id: 'INV-001', client: 'Tech Solutions Inc', date: 'Feb 15, 2026', due: 'Mar 15, 2026', amount: '$2,500', status: 'Paid' },
  { id: 'INV-002', client: 'Global Marketing Co', date: 'Feb 18, 2026', due: 'Mar 18, 2026', amount: '$3,200', status: 'Pending' },
  { id: 'INV-003', client: 'Creative Agency Ltd', date: 'Feb 10, 2026', due: 'Mar 10, 2026', amount: '$1,800', status: 'Overdue' },
  { id: 'INV-004', client: 'DataStream Corp', date: 'Feb 22, 2026', due: 'Mar 22, 2026', amount: '$5,400', status: 'Paid' },
  { id: 'INV-005', client: 'Nexus Analytics', date: 'Feb 25, 2026', due: 'Mar 25, 2026', amount: '$2,950', status: 'Pending' },
  { id: 'INV-006', client: 'CloudBase Inc', date: 'Jan 30, 2026', due: 'Feb 28, 2026', amount: '$1,200', status: 'Overdue' },
];

const stats = [
  { label: 'Total Invoiced', value: '$17,050', color: 'text-white', border: 'rgba(255,255,255,0.08)', grad: 'from-violet-600/15 to-indigo-600/15' },
  { label: 'Total Paid', value: '$7,900', color: 'text-emerald-400', border: 'rgba(16,185,129,0.25)', grad: 'from-emerald-600/15 to-teal-600/15' },
  { label: 'Pending', value: '$6,150', color: 'text-amber-400', border: 'rgba(245,158,11,0.25)', grad: 'from-amber-600/15 to-orange-600/15' },
  { label: 'Overdue', value: '$3,000', color: 'text-rose-400', border: 'rgba(244,63,94,0.25)', grad: 'from-rose-600/15 to-pink-600/15' },
];

const statusBadge = (status: string) => {
  if (status === 'Paid') return <span className="badge-green">Paid</span>;
  if (status === 'Pending') return <span className="badge-yellow">Pending</span>;
  return <span className="badge-red">Overdue</span>;
};

type FilterType = 'All' | 'Paid' | 'Pending' | 'Overdue';

export const Invoice: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');

  const filtered = filter === 'All' ? invoices : invoices.filter(inv => inv.status === filter);
  const filters: FilterType[] = ['All', 'Paid', 'Pending', 'Overdue'];

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Invoices</h1>
          <p className="page-subtitle">Manage and track your billing & invoices</p>
        </div>
        <button className="gradient-btn flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          New Invoice
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-white/20"
            style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${s.border}` }}>
            <div className={`absolute inset-0 bg-gradient-to-br ${s.grad} pointer-events-none`} />
            <div className="relative">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-2">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <h2 className="text-base font-semibold text-white">Invoice List</h2>
          {/* Filter tabs */}
          <div className="flex gap-1 p-1 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${filter === f ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
                style={filter === f ? { background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' } : {}}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full dark-table">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Client</th>
                <th>Date</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((inv, i) => (
                <tr key={i}>
                  <td className="font-mono text-violet-400 font-medium">{inv.id}</td>
                  <td className="font-medium text-slate-200">{inv.client}</td>
                  <td className="text-slate-500 text-xs">{inv.date}</td>
                  <td className="text-slate-500 text-xs">{inv.due}</td>
                  <td className="font-bold text-white">{inv.amount}</td>
                  <td>{statusBadge(inv.status)}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="text-violet-400 hover:text-violet-300 text-xs font-medium transition-colors">View</button>
                      <span className="text-slate-700">·</span>
                      <button className="text-slate-400 hover:text-slate-300 text-xs font-medium transition-colors">Download</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-slate-500">No {filter.toLowerCase()} invoices found.</p>
          </div>
        )}

        <div className="px-6 py-3 border-t flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-slate-500 text-xs">{filtered.length} invoice{filtered.length !== 1 ? 's' : ''}</p>
          <button className="text-violet-400 text-xs hover:text-violet-300 transition-colors">Export CSV →</button>
        </div>
      </div>
    </div>
  );
};
