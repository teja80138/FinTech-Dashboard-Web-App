import React, { useState } from 'react';
import { useAuthStore } from '../contexts/authStore';

type TabId = 'account' | 'security' | 'notifications' | 'preferences' | 'privacy';

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: 'account', label: 'Account', icon: '👤' },
  { id: 'security', label: 'Security', icon: '🔒' },
  { id: 'notifications', label: 'Notifications', icon: '🔔' },
  { id: 'preferences', label: 'Preferences', icon: '⚙️' },
  { id: 'privacy', label: 'Privacy', icon: '🛡️' },
];

const Toggle: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <button
    onClick={onChange}
    className="relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none flex-shrink-0"
    style={{ background: checked ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'rgba(255,255,255,0.1)' }}
  >
    <span
      className="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-300"
      style={{ transform: checked ? 'translateX(24px)' : 'translateX(4px)' }}
    />
  </button>
);

export const Settings: React.FC = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<TabId>('account');
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    pushAlerts: false,
    smsAlerts: false,
    twoFactor: false,
    loginAlerts: true,
    darkMode: true,
    compactView: false,
    language: 'English',
    timezone: 'UTC',
    currency: 'USD',
    profilePublic: false,
    portfolioPublic: false,
    analyticsSharing: true,
  });

  const toggle = (key: keyof typeof settings) =>
    setSettings((p) => ({ ...p, [key]: typeof p[key] === 'boolean' ? !p[key] : p[key] }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="rounded-2xl overflow-hidden mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      <div className="px-6 py-4 space-y-5">{children}</div>
    </div>
  );

  const ToggleRow: React.FC<{ label: string; desc: string; settingKey: keyof typeof settings }> = ({ label, desc, settingKey }) => (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-slate-200 text-sm font-medium">{label}</p>
        <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
      </div>
      <Toggle checked={settings[settingKey] as boolean} onChange={() => toggle(settingKey)} />
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-up">
      <div>
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account preferences and configurations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Sidebar tabs */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl overflow-hidden p-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {/* Profile mini-card */}
            <div className="flex items-center gap-3 p-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                {user?.name?.charAt(0) ?? 'U'}
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold truncate">{user?.name ?? 'User'}</p>
                <p className="text-slate-500 text-xs truncate">{user?.email ?? ''}</p>
              </div>
            </div>
            <div className="space-y-0.5">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-200 ${activeTab === t.id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  style={activeTab === t.id
                    ? { background: 'linear-gradient(135deg,rgba(124,58,237,0.35),rgba(79,70,229,0.25))', border: '1px solid rgba(139,92,246,0.25)' }
                    : {}}
                >
                  <span>{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === 'account' && (
            <>
              <SectionCard title="Profile Information">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Full Name</label>
                    <input type="text" defaultValue={user?.name} className="dark-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Email Address</label>
                    <input type="email" defaultValue={user?.email} className="dark-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Phone Number</label>
                    <input type="tel" placeholder="+1 (000) 000-0000" className="dark-input" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Date of Birth</label>
                    <input type="date" className="dark-input" />
                  </div>
                </div>
              </SectionCard>
              <SectionCard title="Danger Zone">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-200 text-sm font-medium">Delete Account</p>
                    <p className="text-slate-500 text-xs mt-0.5">Permanently remove your account and all data</p>
                  </div>
                  <button className="px-4 py-2 rounded-xl text-rose-400 text-sm font-semibold transition-all duration-200 hover:bg-rose-500/10 hover:text-rose-300 border border-rose-500/20">
                    Delete
                  </button>
                </div>
              </SectionCard>
            </>
          )}

          {activeTab === 'security' && (
            <>
              <SectionCard title="Authentication">
                <ToggleRow label="Two-Factor Authentication" desc="Add an extra layer of security to your account" settingKey="twoFactor" />
                <ToggleRow label="Login Alerts" desc="Get notified when a new login occurs on your account" settingKey="loginAlerts" />
              </SectionCard>
              <SectionCard title="Password">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Current Password</label>
                    <input type="password" className="dark-input" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">New Password</label>
                    <input type="password" className="dark-input" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Confirm New Password</label>
                    <input type="password" className="dark-input" placeholder="••••••••" />
                  </div>
                </div>
              </SectionCard>
            </>
          )}

          {activeTab === 'notifications' && (
            <SectionCard title="Notification Preferences">
              <ToggleRow label="In-App Notifications" desc="Receive notifications within the dashboard" settingKey="notifications" />
              <ToggleRow label="Email Alerts" desc="Receive important updates and alerts via email" settingKey="emailAlerts" />
              <ToggleRow label="Push Notifications" desc="Receive push notifications on your mobile browser" settingKey="pushAlerts" />
              <ToggleRow label="SMS Alerts" desc="Get critical alerts via SMS to your phone" settingKey="smsAlerts" />
            </SectionCard>
          )}

          {activeTab === 'preferences' && (
            <SectionCard title="Display & Regional">
              <ToggleRow label="Dark Mode" desc="Use dark theme across the application" settingKey="darkMode" />
              <ToggleRow label="Compact View" desc="Reduce spacing for more data density" settingKey="compactView" />
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Language</label>
                <select className="dark-input"
                  value={settings.language}
                  onChange={(e) => setSettings(p => ({ ...p, language: e.target.value }))}>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Japanese</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Timezone</label>
                <select className="dark-input"
                  value={settings.timezone}
                  onChange={(e) => setSettings(p => ({ ...p, timezone: e.target.value }))}>
                  <option>UTC</option>
                  <option>EST (UTC-5)</option>
                  <option>CST (UTC-6)</option>
                  <option>PST (UTC-8)</option>
                  <option>IST (UTC+5:30)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Currency</label>
                <select className="dark-input"
                  value={settings.currency}
                  onChange={(e) => setSettings(p => ({ ...p, currency: e.target.value }))}>
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>INR (₹)</option>
                  <option>JPY (¥)</option>
                </select>
              </div>
            </SectionCard>
          )}

          {activeTab === 'privacy' && (
            <SectionCard title="Privacy Controls">
              <ToggleRow label="Public Profile" desc="Allow other members to view your profile" settingKey="profilePublic" />
              <ToggleRow label="Public Portfolio" desc="Share your portfolio performance publicly" settingKey="portfolioPublic" />
              <ToggleRow label="Analytics Sharing" desc="Help us improve by sharing anonymous usage data" settingKey="analyticsSharing" />
            </SectionCard>
          )}

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="gradient-btn min-w-[140px] flex items-center justify-center gap-2"
            >
              {saved ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  Saved!
                </>
              ) : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
