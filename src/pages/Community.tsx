import React, { useState } from 'react';

const discussions = [
  { title: 'Best stocks to invest in 2026?', author: 'Sarah Miller', replies: 23, likes: 47, category: 'Stocks', time: '2h ago', avatar: 'SM' },
  { title: 'Tips for portfolio diversification with low risk', author: 'John Davis', replies: 45, likes: 82, category: 'Portfolio', time: '5h ago', avatar: 'JD' },
  { title: 'Market trends for Q1 2026 — deep dive analysis', author: 'Mike Johnson', replies: 18, likes: 34, category: 'Analysis', time: '8h ago', avatar: 'MJ' },
  { title: 'How to hedge against inflation with crypto?', author: 'Amy Chen', replies: 31, likes: 59, category: 'Crypto', time: '1d ago', avatar: 'AC' },
  { title: 'Beginner\'s guide to ETFs — questions welcome!', author: 'Tom Wilson', replies: 67, likes: 128, category: 'Beginner', time: '2d ago', avatar: 'TW' },
];

const forums = [
  { name: 'Investment Strategies', posts: '2.5K', members: '8.2K', icon: '📈', color: '#7c3aed' },
  { name: 'Market Analysis', posts: '1.8K', members: '5.6K', icon: '🔍', color: '#06b6d4' },
  { name: "Beginner's Guide", posts: '980', members: '12.4K', icon: '📚', color: '#10b981' },
  { name: 'Crypto & Web3', posts: '3.1K', members: '9.8K', icon: '₿', color: '#f59e0b' },
  { name: 'Real Estate', posts: '620', members: '3.2K', icon: '🏡', color: '#f43f5e' },
];

const members = [
  { name: 'Sarah Miller', role: 'Top Contributor', posts: 342, avatar: 'SM', color: '#7c3aed' },
  { name: 'John Davis', role: 'Market Expert', posts: 289, avatar: 'JD', color: '#06b6d4' },
  { name: 'Mike Johnson', role: 'Analyst', posts: 215, avatar: 'MJ', color: '#10b981' },
  { name: 'Amy Chen', role: 'Crypto Specialist', posts: 198, avatar: 'AC', color: '#f59e0b' },
];

const categoryColors: Record<string, string> = {
  Stocks: 'badge-green',
  Portfolio: 'badge-blue',
  Analysis: 'badge-yellow',
  Crypto: 'badge-yellow',
  Beginner: 'badge-blue',
};

export const Community: React.FC = () => {
  const [joined, setJoined] = useState(false);

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">Community</h1>
          <p className="page-subtitle">Connect, share insights, and grow with fellow investors</p>
        </div>
        <button
          onClick={() => setJoined(!joined)}
          className={`transition-all duration-300 font-semibold rounded-xl px-5 py-2.5 text-sm ${joined
              ? 'text-slate-300 hover:text-rose-400'
              : 'text-white'
            }`}
          style={joined
            ? { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }
            : { background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow: '0 0 20px rgba(124,58,237,0.3)' }}
        >
          {joined ? '✓ Joined' : '+ Join Community'}
        </button>
      </div>

      {/* Stats banner */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Active Members', value: '12,543', icon: '👥' },
          { label: 'Discussions', value: '8,920', icon: '💬' },
          { label: 'Posts Today', value: '342', icon: '📝' },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl p-5 flex items-center gap-4"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span className="text-2xl">{s.icon}</span>
            <div>
              <p className="text-xl font-bold text-white">{s.value}</p>
              <p className="text-slate-500 text-xs">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Latest Discussions — main column */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-base font-semibold text-white">Latest Discussions</h2>
            <button className="text-violet-400 text-xs hover:text-violet-300 transition-colors">View All →</button>
          </div>
          {discussions.map((d, i) => (
            <div key={i}
              className="rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:border-white/20 group"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? '#7c3aed,#4f46e5' : '#06b6d4,#0284c7'})` }}>
                  {d.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-200 group-hover:text-white transition-colors text-sm leading-snug">{d.title}</p>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className="text-slate-500 text-xs">{d.author}</span>
                    <span className="text-slate-700">·</span>
                    <span className="text-slate-500 text-xs">{d.time}</span>
                    <span className={categoryColors[d.category]}>{d.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-3 pl-12">
                <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  {d.replies} replies
                </span>
                <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  {d.likes} likes
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right column: Forums + Top Members */}
        <div className="space-y-5">
          {/* Forums */}
          <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 className="text-sm font-semibold text-white mb-4">📢 Forums</h3>
            <div className="space-y-2">
              {forums.map((f, i) => (
                <button key={i} className="w-full flex items-center gap-3 p-3 rounded-xl text-left hover:bg-white/5 transition-colors group">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: `${f.color}22` }}>{f.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors truncate">{f.name}</p>
                    <p className="text-slate-600 text-xs">{f.posts} posts · {f.members} members</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Top Members */}
          <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 className="text-sm font-semibold text-white mb-4">👥 Top Members</h3>
            <div className="space-y-3">
              {members.map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}88)` }}>
                    {m.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 text-sm font-medium">{m.name}</p>
                    <p className="text-slate-600 text-xs">{m.role} · {m.posts} posts</p>
                  </div>
                  <span className="text-slate-600">#{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
