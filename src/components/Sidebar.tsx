import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../contexts/authStore';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuthStore();

  const menuItems = [
    { label: 'Dashboard', icon: '📊', path: '/dashboard' },
    { label: 'Analytics', icon: '📈', path: '/analytics' },
    { label: 'Wallet', icon: '💳', path: '/wallet' },
    { label: 'Invoice', icon: '📄', path: '/invoice' },
    { label: 'Portfolio', icon: '🎯', path: '/portfolio' },
    { label: 'Charts', icon: '📉', path: '/charts' },
    { label: 'Community', icon: '👥', path: '/community' },
    { label: 'Help & Support', icon: '🆘', path: '/help' },
    { label: 'Setting', icon: '⚙️', path: '/settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed left-0 top-0 h-screen w-56 bg-gradient-to-b from-purple-600 to-purple-800 text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-purple-600 font-bold">💰</span>
        </div>
        <h1 className="text-xl font-bold">Finance</h1>
      </div>

      {/* Menu Label */}
      <p className="text-purple-300 text-sm font-semibold mb-4 uppercase tracking-wider">Menu</p>

      {/* Navigation Items */}
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-full transition ${
              isActive(item.path)
                ? 'bg-white text-purple-600 font-semibold'
                : 'text-purple-100 hover:bg-purple-700'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="flex items-center gap-3 px-4 py-3 w-full rounded-full bg-purple-700 hover:bg-purple-900 text-white transition"
      >
        <span className="text-lg">🚪</span>
        <span>Logout</span>
      </button>
    </div>
  );
};
