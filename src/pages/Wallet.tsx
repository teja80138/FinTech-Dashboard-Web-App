import React, { useState } from 'react';

const transactions = [
  { date: 'Feb 23, 2026', desc: 'Salary Deposit', type: 'Income', amount: '+$5,000', positive: true },
  { date: 'Feb 22, 2026', desc: 'Utilities Bill', type: 'Expense', amount: '-$250', positive: false },
  { date: 'Feb 20, 2026', desc: 'Stock Purchase', type: 'Investment', amount: '-$1,500', positive: false },
  { date: 'Feb 18, 2026', desc: 'Freelance Payment', type: 'Income', amount: '+$2,200', positive: true },
  { date: 'Feb 15, 2026', desc: 'Subscription', type: 'Expense', amount: '-$49', positive: false },
];

export const Wallet: React.FC = () => {
  const [balance] = useState(12500.50);

  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="page-title">Wallet</h1>
        <p className="page-subtitle">Manage your funds and payment methods</p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Main balance card — virtual card style */}
        <div className="md:col-span-1 relative overflow-hidden rounded-2xl p-6 text-white"
          style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', boxShadow: '0 8px 40px rgba(124,58,237,0.35)' }}>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, white, transparent)', transform: 'translate(25%, -25%)' }} />
          <p className="text-indigo-200 text-xs font-medium uppercase tracking-widest mb-4">Available Balance</p>
          <p className="text-4xl font-bold mb-1">${balance.toFixed(2)}</p>
          <p className="text-indigo-200 text-sm mt-3">**** **** **** 4242</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-yellow-400/80"></div>
            <div className="w-7 h-7 rounded-full bg-orange-500/80 -ml-3"></div>
            <span className="text-xs text-indigo-200 ml-1">Visa</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(16,185,129,0.25)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 to-teal-600/15 pointer-events-none" />
          <div className="relative">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">Total Income</p>
            <p className="text-3xl font-bold text-emerald-400 mb-2">$45,230</p>
            <span className="badge-green">▲ +12.4% this month</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(244,63,94,0.25)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600/15 to-pink-600/15 pointer-events-none" />
          <div className="relative">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-3">Total Expenses</p>
            <p className="text-3xl font-bold text-rose-400 mb-2">$8,450</p>
            <span className="badge-red">▲ +3.1% this month</span>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <h2 className="text-base font-semibold text-white">Recent Transactions</h2>
          <button className="text-violet-400 text-xs hover:text-violet-300 transition-colors">View All →</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full dark-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i}>
                  <td className="text-slate-500 text-xs">{tx.date}</td>
                  <td className="font-medium text-slate-200">{tx.desc}</td>
                  <td>
                    <span className={tx.type === 'Income' ? 'badge-green' : tx.type === 'Expense' ? 'badge-red' : 'badge-blue'}>
                      {tx.type}
                    </span>
                  </td>
                  <td className={`text-right font-semibold ${tx.positive ? 'text-emerald-400' : 'text-rose-400'}`}>{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Methods */}
      <div>
        <h2 className="text-base font-semibold text-white mb-4">Payment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Visa Card', sub: '**** **** **** 4242', active: true, icon: '💳' },
            { name: 'Bank Account', sub: 'Primary Checking Account', active: false, icon: '🏦' },
          ].map((pm, i) => (
            <div key={i}
              className="flex items-center gap-4 rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:border-violet-500/50"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${pm.active ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.08)'}` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: pm.active ? 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(79,70,229,0.3))' : 'rgba(255,255,255,0.05)' }}>
                {pm.icon}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">{pm.name}</p>
                <p className="text-slate-500 text-sm">{pm.sub}</p>
              </div>
              {pm.active && <span className="badge-blue">Primary</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
