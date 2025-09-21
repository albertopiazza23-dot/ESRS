import React, { useState } from 'react';
import { User, Lock, Globe, Eye, EyeOff, LogIn, Target, BarChart3, Shield, TrendingUp, FileText } from 'lucide-react';

// Import your existing dashboard components
import ESRSDashboard from './ESRSDashboard.js';
import SOPDashbaord from './SOPDashbaord.js';
import GDPRRMDashboard from './GDPRRMDashboard.js';
import IFRSPortal from './IFRSPortal.js';

const MasterplanApp = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [currentView, setCurrentView] = useState('login');

  const applications = [
    { code: 'IFRS', name: 'IFRS - Accounting Principles', color: 'bg-blue-500', file: 'IFRSPortal.js', icon: FileText, description: 'Accounting Principles' },
    { code: 'ESRS', name: 'ESRS - Sustainability Reporting', color: 'bg-green-500', file: 'ESRSDashboard.js', icon: TrendingUp, description: 'Sustainability Reporting' },
    { code: 'GDPR', name: 'GDPR & RM - Risk Management', color: 'bg-red-500', file: 'GDPRRMDashboard.js', icon: Shield, description: 'Risk Management' },
    { code: 'SOP', name: 'S&OP - Sales and Operational Planning', color: 'bg-purple-500', file: 'SOPDashboard.js', icon: BarChart3, description: 'Sales and Operational' }
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

  const handleAppSelect = (appCode) => {
    const app = applications.find(a => a.code === appCode);
    if (app) {
      setSuccessMessage('Opening ' + app.description + '...');
      setTimeout(() => {
        setCurrentView(appCode.toLowerCase());
        setSuccessMessage('');
      }, 1500);
    }
  };

  const handleLogin = () => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const user = dummyUsers.find((u) => 
        u.username === credentials.username && u.password === credentials.password
      );

      if (user) {
        setCurrentUser(user);
        setSuccessMessage('Welcome ' + user.name + '! Click on an available application to continue.');
        setTimeout(() => setSuccessMessage(''), 4000);
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login');
    setCredentials({ username: '', password: '' });
    setError('');
    setSuccessMessage('');
  };

  const handleBackToLogin = () => {
    setCurrentView('login');
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

  const LoginPage = () => (
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

          {successMessage && (
            <div className="mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg">
              <p className="text-green-200 text-sm text-center">{successMessage}</p>
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
            <div className="grid grid-cols-2 gap-3">
              {applications.map((app) => {
                const IconComponent = app.icon;
                const isAccessible = currentUser ? currentUser.apps.includes(app.code) : false;
                const isDisabled = !isAccessible;
                
                return (
                  <button
                    key={app.code}
                    onClick={() => isAccessible && handleAppSelect(app.code)}
                    disabled={isDisabled}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center space-y-2 text-center ${
                      isAccessible 
                        ? 'border-white border-opacity-30 bg-white bg-opacity-10 hover:bg-opacity-20 hover:border-opacity-50 cursor-pointer' 
                        : 'border-gray-500 border-opacity-30 bg-gray-700 bg-opacity-30 cursor-not-allowed opacity-50'
                    }`}
                    title={isAccessible ? app.name : 'Access not authorized'}
                  >
                    <div className={`p-2 rounded ${isAccessible ? app.color : 'bg-gray-600'}`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${isAccessible ? 'text-white' : 'text-gray-400'}`}>
                        {app.code}
                      </p>
                      <p className={`text-xs ${isAccessible ? 'text-white text-opacity-70' : 'text-gray-500'}`}>
                        {app.description}
                      </p>
                    </div>
                  </button>
                );
              })}
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

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <LoginPage />;
      case 'esrs':
        return (
          <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b p-4 mb-6">
              <div className="flex justify-between items-center max-w-7xl mx-auto">
                <h1 className="text-xl font-bold text-gray-900">ESRS Dashboard</h1>
                <div className="space-x-4">
                  <button
                    onClick={handleBackToLogin}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
                  >
                    Back to Login
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    Logout ({currentUser?.name})
                  </button>
                </div>
              </div>
            </div>
            <ESRSDashboard user={currentUser} onLogout={handleLogout} onBack={handleBackToLogin} />
          </div>
        );
      case 'sop':
        return (
          <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b p-4 mb-6">
              <div className="flex justify-between items-center max-w-7xl mx-auto">
                <h1 className="text-xl font-bold text-gray-900">S&OP Dashboard</h1>
                <div className="space-x-4">
                  <button
                    onClick={handleBackToLogin}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
                  >
                    Back to Login
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    Logout ({currentUser?.name})
                  </button>
                </div>
              </div>
            </div>
            <SOPDashbaord user={currentUser} onLogout={handleLogout} onBack={handleBackToLogin} />
          </div>
        );
      case 'gdpr':
        return (
          <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b p-4 mb-6">
              <div className="flex justify-between items-center max-w-7xl mx-auto">
                <h1 className="text-xl font-bold text-gray-900">GDPR & Risk Management</h1>
                <div className="space-x-4">
                  <button
                    onClick={handleBackToLogin}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
                  >
                    Back to Login
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    Logout ({currentUser?.name})
                  </button>
                </div>
              </div>
            </div>
            <GDPRRMDashboard user={currentUser} onLogout={handleLogout} onBack={handleBackToLogin} />
          </div>
        );
      case 'ifrs':
        return (
          <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b p-4 mb-6">
              <div className="flex justify-between items-center max-w-7xl mx-auto">
                <h1 className="text-xl font-bold text-gray-900">IFRS Portal</h1>
                <div className="space-x-4">
                  <button
                    onClick={handleBackToLogin}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
                  >
                    Back to Login
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    Logout ({currentUser?.name})
                  </button>
                </div>
              </div>
            </div>
            <IFRSPortal user={currentUser} onLogout={handleLogout} onBack={handleBackToLogin} />
          </div>
        );
      default:
        return <LoginPage />;
    }
  };

  return renderCurrentView();
};

export default MasterplanApp;