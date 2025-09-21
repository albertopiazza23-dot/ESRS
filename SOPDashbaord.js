import React, { useState, createContext, useContext } from 'react';
import { 
  BarChart3, TrendingUp, Package, Users, Calendar, AlertTriangle, CheckCircle, Clock, Target,
  PieChart, FileText, Settings, Bell, Search, Filter, Download, RefreshCw, ChevronRight,
  DollarSign, Truck, Factory, Home, Plus, Eye, Edit3, ChevronDown, ShoppingCart,
  Clipboard, GitBranch, Layers, Calculator, Database, Globe, TrendingDown, ArrowLeft,
  Info, FileCheck, Shield, BookOpen, Activity, Zap, Map, LineChart, BarChart, FileSpreadsheet,
  Users2, Building2, Warehouse, PackageCheck, AlertCircle, MessageSquare,
  Sliders, FileBarChart, Briefcase, HelpCircle, List, ArrowRight,
  CheckSquare, XCircle
} from 'lucide-react';

// Context per la gestione dello stato dell'app
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openMenus, setOpenMenus] = useState(['dashboard']);
  const [openSubMenus, setOpenSubMenus] = useState([]);
  const [currentPage, setCurrentPage] = useState('/');
  const [user, setUser] = useState({
    name: 'Mario Rossi',
    role: 'S&OP Manager',
    avatar: Users
  });

  const toggleMenu = (menuId) => {
    setOpenMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const toggleSubMenu = (subMenuId) => {
    setOpenSubMenus(prev => 
      prev.includes(subMenuId) 
        ? prev.filter(id => id !== subMenuId)
        : [...prev, subMenuId]
    );
  };

  const navigate = (path) => {
    setCurrentPage(path);
  };

  return (
    <AppContext.Provider value={{
      openMenus, setOpenMenus,
      openSubMenus, setOpenSubMenus,
      currentPage, setCurrentPage,
      user, setUser,
      toggleMenu, toggleSubMenu,
      navigate
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

// Componente Sidebar
const Sidebar = () => {
  const { openMenus, openSubMenus, user, toggleMenu, toggleSubMenu, navigate, currentPage } = useApp();

  const navigationMenu = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: Home,
      path: '/'
    },
    {
      id: 'demand_planning',
      title: 'Demand Planning',
      icon: TrendingUp,
      type: 'category',
      subItems: [
        { 
          id: 'forecasting', 
          title: 'Forecasting', 
          icon: LineChart,
          type: 'subcategory',
          subItems: [
            { id: 'statistical_forecast', title: 'Forecast Statistico', icon: BarChart, path: '/demand/statistical-forecast' },
            { id: 'demand_sensing', title: 'Demand Sensing', icon: Activity, path: '/demand/demand-sensing' },
            { id: 'consensus_forecast', title: 'Consensus Forecast', icon: Users2, path: '/demand/consensus-forecast' },
            { id: 'forecast_accuracy', title: 'Accuratezza Forecast', icon: Target, path: '/demand/forecast-accuracy' }
          ]
        },
        { 
          id: 'market_intelligence', 
          title: 'Market Intelligence', 
          icon: Globe,
          type: 'subcategory',
          subItems: [
            { id: 'market_trends', title: 'Trend di Mercato', icon: TrendingUp, path: '/demand/market-trends' },
            { id: 'competitor_analysis', title: 'Analisi Competitor', icon: Eye, path: '/demand/competitor-analysis' },
            { id: 'customer_insights', title: 'Customer Insights', icon: Users, path: '/demand/customer-insights' },
            { id: 'promotional_impact', title: 'Impatto Promozioni', icon: Zap, path: '/demand/promotional-impact' }
          ]
        }
      ]
    },
    {
      id: 'supply_planning',
      title: 'Supply Planning',
      icon: Factory,
      type: 'category',
      subItems: [
        { 
          id: 'capacity_planning', 
          title: 'Capacity Planning', 
          icon: Layers,
          type: 'subcategory',
          subItems: [
            { id: 'production_capacity', title: 'Capacità Produttiva', icon: Factory, path: '/supply/production-capacity' },
            { id: 'resource_planning', title: 'Pianificazione Risorse', icon: Users2, path: '/supply/resource-planning' },
            { id: 'bottleneck_analysis', title: 'Analisi Colli di Bottiglia', icon: AlertTriangle, path: '/supply/bottleneck-analysis' }
          ]
        },
        { 
          id: 'inventory_management', 
          title: 'Gestione Scorte', 
          icon: Package,
          type: 'subcategory',
          subItems: [
            { id: 'inventory_optimization', title: 'Ottimizzazione Scorte', icon: PackageCheck, path: '/supply/inventory-optimization' },
            { id: 'safety_stock', title: 'Scorte di Sicurezza', icon: Shield, path: '/supply/safety-stock' },
            { id: 'abc_analysis', title: 'Analisi ABC', icon: BarChart3, path: '/supply/abc-analysis' }
          ]
        }
      ]
    },
    {
      id: 'sop_process',
      title: 'Processo S&OP',
      icon: GitBranch,
      type: 'category',
      subItems: [
        { 
          id: 'monthly_cycle', 
          title: 'Ciclo Mensile', 
          icon: Calendar,
          type: 'subcategory',
          subItems: [
            { id: 'demand_review', title: 'Demand Review', icon: TrendingUp, path: '/sop/demand-review' },
            { id: 'supply_review', title: 'Supply Review', icon: Factory, path: '/sop/supply-review' },
            { id: 'executive_meeting', title: 'Executive S&OP', icon: Users, path: '/sop/executive-meeting' }
          ]
        },
        {
          id: 'gap_analysis',
          title: 'Gap Analysis',
          icon: Calculator,
          type: 'subcategory',
          subItems: [
            { id: 'demand_supply_gap', title: 'Gap Domanda-Offerta', icon: GitBranch, path: '/sop/demand-supply-gap' },
            { id: 'capacity_gap', title: 'Gap Capacità', icon: AlertTriangle, path: '/sop/capacity-gap' }
          ]
        }
      ]
    },
    {
      id: 'reporting',
      title: 'Report e KPI',
      icon: FileBarChart,
      type: 'category',
      subItems: [
        { 
          id: 'executive_reports', 
          title: 'Report Esecutivi', 
          icon: Briefcase,
          type: 'subcategory',
          subItems: [
            { id: 'executive_dashboard', title: 'Dashboard Esecutiva', icon: BarChart3, path: '/reporting/executive-dashboard' },
            { id: 'monthly_sop_report', title: 'Report S&OP Mensile', icon: FileText, path: '/reporting/monthly-sop-report' }
          ]
        },
        {
          id: 'operational_reports',
          title: 'Report Operativi',
          icon: FileSpreadsheet,
          type: 'subcategory',
          subItems: [
            { id: 'forecast_vs_actual', title: 'Forecast vs Actual', icon: LineChart, path: '/reporting/forecast-vs-actual' },
            { id: 'service_level_report', title: 'Report Service Level', icon: CheckCircle, path: '/reporting/service-level' }
          ]
        }
      ]
    },
    {
      id: 'admin',
      title: 'Amministrazione',
      icon: Settings,
      type: 'category',
      subItems: [
        { 
          id: 'users', 
          title: 'Gestione Utenti', 
          icon: Users,
          type: 'subcategory',
          subItems: [
            { id: 'user_management', title: 'Gestione Utenti', icon: Users, path: '/admin/users' },
            { id: 'role_assignment', title: 'Assegnazione Ruoli', icon: Shield, path: '/admin/roles' }
          ]
        }
      ]
    }
  ];

  const isActive = (path) => currentPage === path;

  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => {
      const Icon = item.icon;
      const isItemOpen = openMenus.includes(item.id);
      const hasSubItems = item.subItems && item.subItems.length > 0;
      
      if (item.type === 'category' && hasSubItems) {
        return (
          <li key={item.id} className="space-y-1">
            <button
              onClick={() => toggleMenu(item.id)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200"
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
              </div>
              {isItemOpen ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {isItemOpen && (
              <div className="ml-4 pl-4 border-l-2 border-gray-200 space-y-1">
                {renderMenuItems(item.subItems, level + 1)}
              </div>
            )}
          </li>
        );
      }

      if (item.type === 'subcategory' && hasSubItems) {
        const isSubOpen = openSubMenus.includes(item.id);
        return (
          <div key={item.id} className="space-y-1">
            <button
              onClick={() => toggleSubMenu(item.id)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-4 h-4" />
                <span>{item.title}</span>
              </div>
              {isSubOpen ? (
                <ChevronDown className="w-3 h-3 text-gray-400" />
              ) : (
                <ChevronRight className="w-3 h-3 text-gray-400" />
              )}
            </button>

            {isSubOpen && (
              <div className="ml-4 pl-3 border-l border-gray-200 space-y-1">
                {renderMenuItems(item.subItems, level + 1)}
              </div>
            )}
          </div>
        );
      }

      return (
        <button
          key={item.id}
          onClick={() => navigate(item.path)}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-xs transition-all duration-200 ${
            isActive(item.path)
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
          }`}
        >
          <Icon className="w-3 h-3" />
          <span>{item.title}</span>
        </button>
      );
    });
  };

  return (
    <div className="w-72 bg-white shadow-lg border-r border-gray-200 flex flex-col h-full">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">S&OP Central</h1>
            <p className="text-sm text-gray-500">Sales & Operations Planning</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-2">
          {renderMenuItems(navigationMenu)}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente Header
const Header = () => {
  const { currentPage, navigate } = useApp();

  const getPageTitle = () => {
    const path = currentPage;
    if (path === '/') return 'Dashboard S&OP';
    
    const titleMap = {
      '/demand/statistical-forecast': 'Forecast Statistico',
      '/demand/demand-sensing': 'Demand Sensing',
      '/demand/consensus-forecast': 'Consensus Forecast',
      '/demand/forecast-accuracy': 'Accuratezza Forecast',
      '/supply/production-capacity': 'Capacità Produttiva',
      '/supply/inventory-optimization': 'Ottimizzazione Scorte',
      '/sop/demand-review': 'Demand Review',
      '/sop/supply-review': 'Supply Review',
      '/sop/executive-meeting': 'Executive S&OP',
      '/sop/demand-supply-gap': 'Gap Domanda-Offerta',
      '/reporting/executive-dashboard': 'Dashboard Esecutiva',
      '/reporting/monthly-sop-report': 'Report S&OP Mensile',
      '/reporting/service-level': 'Report Service Level'
    };
    
    return titleMap[path] || 'S&OP Central';
  };

  const Breadcrumb = () => {
    const paths = currentPage.split('/').filter(Boolean);
    
    return (
      <div className="flex items-center text-sm text-gray-500">
        <button onClick={() => navigate('/')} className="hover:text-blue-600 transition-colors">
          Home
        </button>
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 mx-2" />
            <span className="capitalize">{path.replace(/-/g, ' ')}</span>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">{getPageTitle()}</h1>
          <Breadcrumb />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-gray-300"></div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}, 14:30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard principale
const Dashboard = () => {
  const { navigate } = useApp();
  
  const kpiData = [
    { 
      label: 'Forecast Accuracy', 
      value: '87.3%', 
      trend: '+2.1%', 
      icon: Target, 
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      onClick: () => navigate('/demand/forecast-accuracy')
    },
    { 
      label: 'Inventory Turns', 
      value: '8.5', 
      trend: '+0.8', 
      icon: RefreshCw, 
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      onClick: () => navigate('/supply/inventory-optimization')
    },
    { 
      label: 'Service Level', 
      value: '96.8%', 
      trend: '-0.8%', 
      icon: CheckCircle, 
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50',
      onClick: () => navigate('/reporting/service-level')
    },
    { 
      label: 'Plan Attainment', 
      value: '92.4%', 
      trend: '+3.2%', 
      icon: TrendingUp, 
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      onClick: () => navigate('/sop/demand-supply-gap')
    }
  ];

  const planningData = [
    { month: 'Gen', demand: 1250, supply: 1280, gap: 30, status: 'ok' },
    { month: 'Feb', demand: 1180, supply: 1200, gap: 20, status: 'ok' },
    { month: 'Mar', demand: 1320, supply: 1290, gap: -30, status: 'warning' },
    { month: 'Apr', demand: 1450, supply: 1400, gap: -50, status: 'critical' },
    { month: 'Mag', demand: 1380, supply: 1420, gap: 40, status: 'ok' },
    { month: 'Giu', demand: 1520, supply: 1480, gap: -40, status: 'warning' }
  ];

  const alerts = [
    { id: 1, type: 'critical', message: 'Capacità produttiva Q2 sotto forecast del 15%', priority: 'high', module: 'Supply' },
    { id: 2, type: 'warning', message: 'Nuovo forecast ricevuto da Sales per Prodotto A', priority: 'medium', module: 'Demand' },
    { id: 3, type: 'critical', message: 'Stock-out previsto per SKU-12345 in Settimana 23', priority: 'high', module: 'Inventory' }
  ];

  const upcomingMeetings = [
    { date: '2024-09-22', type: 'Demand Review', participants: 8, status: 'scheduled' },
    { date: '2024-09-25', type: 'Supply Review', participants: 6, status: 'scheduled' },
    { date: '2024-09-29', type: 'Executive S&OP', participants: 12, status: 'confirmed' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">S&OP Central</h1>
            <p className="text-blue-100 text-lg">Sales & Operations Planning - Dashboard Integrata</p>
          </div>
          <div className="hidden lg:block">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div 
              key={index} 
              onClick={kpi.onClick}
              className={`${kpi.bgColor} rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${kpi.color} rounded-lg flex items-center justify-center shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  kpi.trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {kpi.trend}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
              <p className="text-sm text-gray-600 font-medium">{kpi.label}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Demand vs Supply Overview */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Demand vs Supply Overview</h2>
              <div className="flex items-center space-x-2">
                <select className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="monthly">Mensile</option>
                  <option value="weekly">Settimanale</option>
                  <option value="quarterly">Trimestrale</option>
                </select>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-4">
              {planningData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-gray-900 w-12">{item.month}</span>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Demand: {item.demand}k</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Supply: {item.supply}k</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                      item.gap >= 0 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.gap >= 0 ? '+' : ''}{item.gap}k
                    </div>
                    {item.status === 'critical' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                    {item.status === 'warning' && <AlertCircle className="w-4 h-4 text-amber-500" />}
                    {item.status === 'ok' && <CheckCircle className="w-4 h-4 text-green-500" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button 
                onClick={() => navigate('/sop/demand-supply-gap')}
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Visualizza analisi completa
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Alert & Issues</h3>
              <AlertTriangle className="w-5 h-5 text-orange-500" />
            </div>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${
                  alert.type === 'critical' ? 'border-red-500 bg-red-50' :
                  alert.type === 'warning' ? 'border-amber-500 bg-amber-50' :
                  'border-blue-500 bg-blue-50'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium">{alert.message}</p>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          alert.priority === 'high' ? 'bg-red-200 text-red-800' :
                          alert.priority === 'medium' ? 'bg-amber-200 text-amber-800' :
                          'bg-blue-200 text-blue-800'
                        }`}>
                          {alert.priority === 'high' ? 'Alta' : alert.priority === 'medium' ? 'Media' : 'Bassa'}
                        </span>
                        <span className="text-xs text-gray-500">{alert.module}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Meetings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Prossimi Meeting</h3>
              <Calendar className="w-5 h-5 text-blue-500" />
            </div>
            <div className="space-y-3">
              {upcomingMeetings.map((meeting, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{meeting.type}</p>
                    <p className="text-sm text-gray-600">{meeting.date}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{meeting.participants}</span>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      meeting.status === 'confirmed' ? 'bg-green-500' : 'bg-amber-500'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Moduli Principali */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Moduli Principali S&OP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button 
            onClick={() => navigate('/demand/statistical-forecast')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-200"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Demand Planning</h3>
            <p className="text-sm text-gray-600 text-center">Forecasting e pianificazione della domanda</p>
          </button>
          
          <button 
            onClick={() => navigate('/supply/production-capacity')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-200"
          >
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <Factory className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Supply Planning</h3>
            <p className="text-sm text-gray-600 text-center">Pianificazione produzione e capacità</p>
          </button>
          
          <button 
            onClick={() => navigate('/sop/demand-review')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl hover:from-purple-100 hover:to-violet-100 transition-all duration-300 border border-purple-200"
          >
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Processo S&OP</h3>
            <p className="text-sm text-gray-600 text-center">Ciclo mensile e gap analysis</p>
          </button>

          <button 
            onClick={() => navigate('/reporting/executive-dashboard')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300 border border-orange-200"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <FileBarChart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Report & KPI</h3>
            <p className="text-sm text-gray-600 text-center">Dashboard e analytics esecutive</p>
          </button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Performance Forecast</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Prodotto A</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">85%</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Prodotto B</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">92%</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Prodotto C</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">78%</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Prodotto D</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">65%</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button 
              onClick={() => navigate('/demand/forecast-accuracy')}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Visualizza report completo →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-3">
            <button 
              onClick={() => navigate('/demand/consensus-forecast')}
              className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <div className="flex items-center space-x-3">
                <LineChart className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">Aggiorna Forecast</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>

            <button 
              onClick={() => navigate('/supply/production-capacity')}
              className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
            >
              <div className="flex items-center space-x-3">
                <Factory className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">Rivedi Capacità</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>

            <button 
              onClick={() => navigate('/sop/demand-supply-gap')}
              className="flex items-center justify-between p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200"
            >
              <div className="flex items-center space-x-3">
                <Calculator className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-900">Gap Analysis</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>

            <button 
              onClick={() => navigate('/reporting/monthly-sop-report')}
              className="flex items-center justify-between p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors border border-orange-200"
            >
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-gray-900">Genera Report</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder per le altre pagine
const PlaceholderPage = ({ title, description, icon = Settings }) => {
  const IconComponent = icon;
  const { navigate } = useApp();
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <IconComponent className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8 text-lg">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla Dashboard
          </button>
          <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
            <Info className="w-4 h-4 mr-2" />
            Documentazione
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente principale dell'app
const SOPApp = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case '/':
        return <Dashboard />;
      case '/demand/statistical-forecast':
        return <PlaceholderPage 
          title="Forecast Statistico" 
          description="Modelli di forecasting automatico basati su algoritmi statistici e machine learning" 
          icon={BarChart} 
        />;
      case '/demand/demand-sensing':
        return <PlaceholderPage 
          title="Demand Sensing" 
          description="Rilevamento in tempo reale dei cambiamenti nella domanda attraverso segnali di mercato" 
          icon={Activity} 
        />;
      case '/demand/consensus-forecast':
        return <PlaceholderPage 
          title="Consensus Forecast" 
          description="Processo collaborativo per creare un forecast condiviso tra le diverse funzioni" 
          icon={Users2} 
        />;
      case '/demand/forecast-accuracy':
        return <PlaceholderPage 
          title="Accuratezza Forecast" 
          description="Analisi delle performance di accuratezza del forecasting e identificazione aree di miglioramento" 
          icon={Target} 
        />;
      case '/supply/production-capacity':
        return <PlaceholderPage 
          title="Capacità Produttiva" 
          description="Pianificazione e gestione della capacità produttiva per allinearla alla domanda" 
          icon={Factory} 
        />;
      case '/supply/inventory-optimization':
        return <PlaceholderPage 
          title="Ottimizzazione Scorte" 
          description="Ottimizzazione dei livelli di inventario per bilanciare costi e servizio al cliente" 
          icon={PackageCheck} 
        />;
      case '/sop/demand-review':
        return <PlaceholderPage 
          title="Demand Review" 
          description="Revisione mensile della domanda con analisi di gap e opportunità di miglioramento" 
          icon={TrendingUp} 
        />;
      case '/sop/supply-review':
        return <PlaceholderPage 
          title="Supply Review" 
          description="Revisione della capacità di supply e identificazione di vincoli operativi" 
          icon={Factory} 
        />;
      case '/sop/executive-meeting':
        return <PlaceholderPage 
          title="Executive S&OP" 
          description="Meeting esecutivo mensile per decisioni strategiche e risoluzione gap critici" 
          icon={Users} 
        />;
      case '/sop/demand-supply-gap':
        return <PlaceholderPage 
          title="Gap Domanda-Offerta" 
          description="Analisi dettagliata dei gap tra domanda e offerta con proposte di risoluzione" 
          icon={GitBranch} 
        />;
      case '/reporting/executive-dashboard':
        return <PlaceholderPage 
          title="Dashboard Esecutiva" 
          description="Vista esecutiva con KPI chiave e indicatori di performance del processo S&OP" 
          icon={BarChart3} 
        />;
      case '/reporting/monthly-sop-report':
        return <PlaceholderPage 
          title="Report S&OP Mensile" 
          description="Report completo delle attività S&OP del mese con raccomandazioni e action plan" 
          icon={FileText} 
        />;
      case '/reporting/service-level':
        return <PlaceholderPage 
          title="Report Service Level" 
          description="Monitoraggio del livello di servizio al cliente e impact sulle performance aziendali" 
          icon={CheckCircle} 
        />;
      default:
        return <PlaceholderPage 
          title="Pagina non trovata" 
          description="La pagina che stai cercando non esiste o è stata spostata." 
          icon={AlertTriangle} 
        />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="p-8">
            {renderCurrentPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <SOPApp />
    </AppProvider>
  );
};

export default App;