import React, { useState } from 'react';
import { User, Lock, Globe, Eye, EyeOff, LogIn, Target } from 'lucide-react';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const applications = [
    { code: 'IFRS', name: 'IFRS - Accounting Principles', color: 'bg-blue-500' },
    { code: 'ESRS', name: 'ESRS - Sustainability Reporting', color: 'bg-green-500' },
    { code: 'GDPR', name: 'GDPR & RM - Risk Management', color: 'bg-red-500' },
    { code: 'SOP', name: 'S&OP - Sales and Operational Planning', color: 'bg-purple-500' }
  ];

  const dummyUsers = [
    { username: 'admin', password: 'admin123', name: 'System Administrator', apps: ['IFRS', 'ESRS', 'GDPR', 'SOP'] },
    { username: 'jdoe', password: 'pass123', name: 'John Doe', apps: ['IFRS', 'GDPR'] },
    { username: 'msmith', password: 'pass123', name: 'Mary Smith', apps: ['ESRS', 'IFRS'] },
    { username: 'pbrown', password: 'pass123', name: 'Peter Brown', apps: ['SOP', 'IFRS'] }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleLogin = () => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const user = dummyUsers.find((u) => 
        u.username === credentials.username && u.password === credentials.password
      );

      if (user) {
        alert('Welcome ' + user.name + '!\n\nAvailable applications:\n' + user.apps.join(', '));
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1500);
  };

  const MasterplanLogo = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="relative">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Target className="w-12 h-12 text-blue-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-full blur-sm"></div>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Masterplan
            </h1>
            <p className="text-sm text-gray-500 font-medium">Enterprise Solutions</p>
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')"}}></div>

      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-end mb-6">
          <div className="relative">
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="appearance-none bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg px-4 py-2 pr-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-slate-800 text-white">
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
            <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white text-opacity-60 pointer-events-none" />
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl shadow-2xl p-8">
          <MasterplanLogo />

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-white text-opacity-70">Sign in to access your applications</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg">
              <p className="text-red-200 text-sm text-center">{error}</p>
            </div>
          )}

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-white text-opacity-80 text-sm font-medium">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white text-opacity-40" />
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-white text-opacity-80 text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white text-opacity-40" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-opacity-40 hover:text-white hover:text-opacity-80 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-opacity-30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 p-4 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10">
            <p className="text-white text-opacity-60 text-xs text-center mb-2">Demo Credentials:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-white text-opacity-80">
                <span className="font-medium">admin</span> / admin123
              </div>
              <div className="text-white text-opacity-80">
                <span className="font-medium">jdoe</span> / pass123
              </div>
              <div className="text-white text-opacity-80">
                <span className="font-medium">msmith</span> / pass123
              </div>
              <div className="text-white text-opacity-80">
                <span className="font-medium">pbrown</span> / pass123
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white text-opacity-60 text-sm mb-3">Available Applications</p>
            <div className="flex justify-center space-x-2 flex-wrap gap-2">
              {applications.map((app) => (
                <div
                  key={app.code}
                  className={app.code + '-badge px-3 py-1 rounded-full text-white text-xs font-medium opacity-80'}
                  style={{backgroundColor: app.code === 'IFRS' ? '#3b82f6' : app.code === 'ESRS' ? '#10b981' : app.code === 'GDPR' ? '#ef4444' : '#8b5cf6'}}
                  title={app.name}
                >
                  {app.code}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-white text-opacity-40 text-sm">
            © 2024 Masterplan Enterprise Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;