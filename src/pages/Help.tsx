import React, { useState } from 'react';

const faqs = [
  { q: 'How do I create an account?', a: 'Click the Sign Up button on the login page and fill in your details. Verification takes less than 2 minutes.' },
  { q: 'How do I add funds to my wallet?', a: 'Navigate to the Wallet page, click "Add Funds", and follow the bank transfer or card payment flow.' },
  { q: 'Is my data secure?', a: 'Yes. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. All passwords are hashed with bcrypt.' },
  { q: 'How do I withdraw my funds?', a: 'Go to Wallet → Withdraw, enter your bank account details, and the transfer usually completes within 1–3 business days.' },
  { q: 'What are the trading fees?', a: 'We charge a flat 0.1% per trade with no minimum. There are no account maintenance or inactivity fees.' },
  { q: 'Can I set price alerts?', a: 'Yes! Visit any stock on the Analytics page and toggle the bell icon to set custom price alert thresholds.' },
];

const knowledgeBase = [
  { title: 'Getting Started Guide', desc: 'Step-by-step setup for new users', icon: '🚀', badge: 'Popular' },
  { title: 'Investment Basics', desc: 'Learn stocks, bonds, ETFs, and more', icon: '📊', badge: null },
  { title: 'Portfolio Management', desc: 'Advanced strategies for diversification', icon: '💼', badge: null },
  { title: 'Risk Management', desc: 'How to protect your investments', icon: '🛡️', badge: 'New' },
  { title: 'Tax Information', desc: 'Capital gains and tax-loss harvesting', icon: '📑', badge: null },
  { title: 'API Documentation', desc: 'Developer integration guides', icon: '⚙️', badge: null },
];

const support = [
  { icon: '💬', label: 'Live Chat', desc: 'Available 24/7', color: '#7c3aed', action: 'Start Chat' },
  { icon: '📧', label: 'Email Support', desc: 'support@fintech.io', color: '#06b6d4', action: 'Send Email' },
  { icon: '📱', label: 'Phone Support', desc: '+1 (800) 123-4567', color: '#10b981', action: 'Call Now' },
];

export const Help: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="page-title">Help & Support</h1>
        <p className="page-subtitle">Find answers, explore guides, or contact our team</p>
      </div>

      {/* Search */}
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for help articles, FAQs, guides..."
          className="dark-input pl-10"
        />
      </div>

      {/* Contact Support */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {support.map((s, i) => (
          <div key={i} className="rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:border-white/20 cursor-pointer group"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 duration-300"
              style={{ background: `${s.color}22` }}>
              {s.icon}
            </div>
            <div>
              <p className="font-semibold text-white">{s.label}</p>
              <p className="text-slate-500 text-xs mt-0.5">{s.desc}</p>
            </div>
            <button className="text-xs font-semibold px-4 py-1.5 rounded-lg transition-all duration-200 hover:scale-105"
              style={{ color: s.color, background: `${s.color}18`, border: `1px solid ${s.color}33` }}>
              {s.action}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* FAQ Accordion */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <h2 className="text-base font-semibold text-white">❓ Frequently Asked Questions</h2>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
            {filteredFaqs.length === 0 ? (
              <p className="text-slate-500 text-sm px-6 py-8 text-center">No results for "{search}"</p>
            ) : filteredFaqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors group"
                >
                  <span className={`text-sm font-medium transition-colors ${open === i ? 'text-violet-400' : 'text-slate-300 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 flex-shrink-0 ml-4 text-slate-500 transition-transform duration-200 ${open === i ? 'rotate-180 text-violet-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {open === i && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Base */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <h2 className="text-base font-semibold text-white">📖 Knowledge Base</h2>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
            {knowledgeBase.map((kb, i) => (
              <button key={i} className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-white/5 transition-colors group">
                <span className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.06)' }}>
                  {kb.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{kb.title}</p>
                    {kb.badge && (
                      <span className={kb.badge === 'Popular' ? 'badge-yellow' : 'badge-green'}>{kb.badge}</span>
                    )}
                  </div>
                  <p className="text-slate-600 text-xs mt-0.5">{kb.desc}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tip Banner */}
      <div className="rounded-2xl p-5 flex items-start gap-4"
        style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(6,182,212,0.1))', border: '1px solid rgba(139,92,246,0.25)' }}>
        <span className="text-2xl flex-shrink-0">💡</span>
        <div>
          <p className="font-semibold text-white mb-1">Pro Tip</p>
          <p className="text-slate-400 text-sm">Check out our video tutorials on YouTube for step-by-step guidance on using all platform features — from setting up your portfolio to advanced trading strategies.</p>
        </div>
      </div>
    </div>
  );
};
