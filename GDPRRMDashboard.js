import React, { useState, createContext, useContext } from 'react';
import { 
  Shield, ShieldAlert, ShieldCheck, Database, Users, FileText, Settings, BarChart3,
  AlertTriangle, CheckCircle, Clock, Eye, Edit3, Plus, Filter, Download, Upload,
  Search, Bell, HelpCircle, Home, ChevronDown, ChevronRight, Target, Scale,
  BookOpen, FileCheck, Globe, List, Key, Lock, UserCheck, Activity, TrendingUp,
  Calendar, Mail, Phone, MapPin, Building, Briefcase, FileSearch, ClipboardCheck,
  Zap, GitBranch, AlertCircle, Info, ExternalLink, ArrowLeft, RefreshCw,
  UserX, FileX, Trash2, Archive, Server, Wifi, Monitor, Smartphone, Tablet,
  CreditCard, DollarSign, Euro, PieChart, LineChart, BarChart, TrendingDown,
  Layers, Cpu, HardDrive, Network, Cloud, Flag, Timer, UserPlus, LogOut,
  Fingerprint, Camera, Mic, Video, MessageSquare, Share2, Copy, Printer,
  Save, FolderOpen, FileSpreadsheet, FileDigit, CalendarDays, Hash, Percent,
  Award, Star, ThumbsUp, ThumbsDown, Heart, Bookmark, Tag,
  SortAsc, SortDesc, Grid, LayoutGrid, Table
} from 'lucide-react';

// Context per la gestione dello stato dell'app
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openMenus, setOpenMenus] = useState(['dashboard']);
  const [openSubMenus, setOpenSubMenus] = useState([]);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [user, setUser] = useState({
    name: 'Sara Bianchi',
    role: 'Data Protection Officer',
    avatar: Shield
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

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <AppContext.Provider value={{
      openMenus, setOpenMenus,
      openSubMenus, setOpenSubMenus,
      currentPage, setCurrentPage,
      user, setUser,
      toggleMenu, toggleSubMenu,
      navigateTo
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

// Componente Sidebar
const Sidebar = () => {
  const { openMenus, openSubMenus, user, toggleMenu, toggleSubMenu, currentPage, navigateTo } = useApp();

  const navigationMenu = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: Home,
      path: 'dashboard'
    },
    {
      id: 'gdpr_compliance',
      title: 'Conformità GDPR',
      icon: Shield,
      type: 'category',
      subItems: [
        { 
          id: 'data_mapping', 
          title: 'Mappatura Dati', 
          icon: Database,
          type: 'subcategory',
          subItems: [
            { id: 'data_inventory', title: 'Inventario Dati', icon: List, path: 'gdpr-data-inventory' },
            { id: 'data_flow', title: 'Flussi di Dati', icon: GitBranch, path: 'gdpr-data-flow' },
            { id: 'data_sources', title: 'Fonti Dati', icon: Server, path: 'gdpr-data-sources' },
            { id: 'data_categories', title: 'Categorie Dati', icon: Layers, path: 'gdpr-data-categories' }
          ]
        },
        { 
          id: 'legal_basis', 
          title: 'Base Giuridica', 
          icon: Scale,
          type: 'subcategory',
          subItems: [
            { id: 'consent_management', title: 'Gestione Consensi', icon: CheckCircle, path: 'gdpr-consent' },
            { id: 'legitimate_interest', title: 'Interesse Legittimo', icon: Target, path: 'gdpr-legitimate-interest' },
            { id: 'contract_basis', title: 'Base Contrattuale', icon: FileText, path: 'gdpr-contract-basis' },
            { id: 'legal_obligation', title: 'Obbligo Legale', icon: Briefcase, path: 'gdpr-legal-obligation' }
          ]
        },
        {
          id: 'subject_rights',
          title: 'Diritti Interessati',
          icon: UserCheck,
          type: 'subcategory',
          subItems: [
            { id: 'access_requests', title: 'Richieste Accesso', icon: Eye, path: 'gdpr-access-requests' },
            { id: 'rectification', title: 'Rettifica', icon: Edit3, path: 'gdpr-rectification' },
            { id: 'erasure', title: 'Cancellazione', icon: UserX, path: 'gdpr-erasure' },
            { id: 'portability', title: 'Portabilità', icon: Download, path: 'gdpr-portability' },
            { id: 'restriction', title: 'Limitazione', icon: Lock, path: 'gdpr-restriction' },
            { id: 'objection', title: 'Opposizione', icon: ShieldAlert, path: 'gdpr-objection' }
          ]
        }
      ]
    },
    {
      id: 'privacy_impact',
      title: 'Valutazioni Impatto',
      icon: FileSearch,
      type: 'category',
      subItems: [
        { 
          id: 'dpia_management', 
          title: 'Gestione DPIA', 
          icon: ClipboardCheck,
          type: 'subcategory',
          subItems: [
            { id: 'dpia_registry', title: 'Registro DPIA', icon: BookOpen, path: 'dpia-registry' },
            { id: 'dpia_templates', title: 'Template DPIA', icon: FileText, path: 'dpia-templates' },
            { id: 'dpia_workflow', title: 'Workflow DPIA', icon: GitBranch, path: 'dpia-workflow' },
            { id: 'dpia_monitoring', title: 'Monitoraggio DPIA', icon: Activity, path: 'dpia-monitoring' }
          ]
        },
        {
          id: 'risk_assessment',
          title: 'Valutazione Rischi',
          icon: ShieldAlert,
          type: 'subcategory',
          subItems: [
            { id: 'risk_analysis', title: 'Analisi Rischi', icon: BarChart3, path: 'dpia-risk-analysis' },
            { id: 'risk_matrix', title: 'Matrice Rischi', icon: Grid, path: 'dpia-risk-matrix' },
            { id: 'mitigation_measures', title: 'Misure Mitigazione', icon: Shield, path: 'dpia-mitigation' }
          ]
        }
      ]
    },
    {
      id: 'security_management',
      title: 'Gestione Sicurezza',
      icon: ShieldCheck,
      type: 'category',
      subItems: [
        { 
          id: 'security_measures', 
          title: 'Misure Sicurezza', 
          icon: Lock,
          type: 'subcategory',
          subItems: [
            { id: 'technical_measures', title: 'Misure Tecniche', icon: Cpu, path: 'security-technical' },
            { id: 'organizational_measures', title: 'Misure Organizzative', icon: Building, path: 'security-organizational' },
            { id: 'access_controls', title: 'Controlli Accesso', icon: Key, path: 'security-access-controls' },
            { id: 'encryption', title: 'Crittografia', icon: Fingerprint, path: 'security-encryption' }
          ]
        },
        {
          id: 'incident_management',
          title: 'Gestione Incidenti',
          icon: AlertTriangle,
          type: 'subcategory',
          subItems: [
            { id: 'incident_registry', title: 'Registro Incidenti', icon: AlertCircle, path: 'security-incidents' },
            { id: 'breach_notification', title: 'Notifica Violazioni', icon: Bell, path: 'security-breach-notification' },
            { id: 'forensic_analysis', title: 'Analisi Forense', icon: Search, path: 'security-forensic' },
            { id: 'recovery_procedures', title: 'Procedure Ripristino', icon: RefreshCw, path: 'security-recovery' }
          ]
        }
      ]
    },
    {
      id: 'risk_management',
      title: 'Risk Management',
      icon: Target,
      type: 'category',
      subItems: [
        { 
          id: 'risk_identification', 
          title: 'Identificazione Rischi', 
          icon: Search,
          type: 'subcategory',
          subItems: [
            { id: 'risk_inventory', title: 'Inventario Rischi', icon: Database, path: 'risk-inventory' },
            { id: 'risk_categories', title: 'Categorie Rischi', icon: Tag, path: 'risk-categories' },
            { id: 'risk_sources', title: 'Fonti Rischio', icon: Globe, path: 'risk-sources' },
            { id: 'stakeholder_analysis', title: 'Analisi Stakeholder', icon: Users, path: 'risk-stakeholders' }
          ]
        },
        {
          id: 'risk_assessment_rm',
          title: 'Valutazione Rischi',
          icon: BarChart3,
          type: 'subcategory',
          subItems: [
            { id: 'probability_assessment', title: 'Valutazione Probabilità', icon: Percent, path: 'risk-probability' },
            { id: 'impact_assessment', title: 'Valutazione Impatto', icon: TrendingDown, path: 'risk-impact' },
            { id: 'risk_scoring', title: 'Scoring Rischi', icon: Star, path: 'risk-scoring' },
            { id: 'risk_heat_map', title: 'Mappa di Calore', icon: PieChart, path: 'risk-heat-map' }
          ]
        },
        {
          id: 'risk_treatment',
          title: 'Trattamento Rischi',
          icon: Shield,
          type: 'subcategory',
          subItems: [
            { id: 'mitigation_strategies', title: 'Strategie Mitigazione', icon: TrendingUp, path: 'risk-mitigation' },
            { id: 'risk_acceptance', title: 'Accettazione Rischi', icon: CheckCircle, path: 'risk-acceptance' },
            { id: 'risk_transfer', title: 'Trasferimento Rischi', icon: Share2, path: 'risk-transfer' },
            { id: 'risk_avoidance', title: 'Evitamento Rischi', icon: UserX, path: 'risk-avoidance' }
          ]
        }
      ]
    },
    {
      id: 'compliance_monitoring',
      title: 'Monitoraggio Compliance',
      icon: Activity,
      type: 'category',
      subItems: [
        { 
          id: 'audit_management', 
          title: 'Gestione Audit', 
          icon: ClipboardCheck,
          type: 'subcategory',
          subItems: [
            { id: 'audit_planning', title: 'Pianificazione Audit', icon: Calendar, path: 'compliance-audit-planning' },
            { id: 'audit_execution', title: 'Esecuzione Audit', icon: CheckCircle, path: 'compliance-audit-execution' },
            { id: 'audit_findings', title: 'Risultati Audit', icon: FileSearch, path: 'compliance-audit-findings' },
            { id: 'corrective_actions', title: 'Azioni Correttive', icon: Target, path: 'compliance-corrective-actions' }
          ]
        },
        {
          id: 'regulatory_tracking',
          title: 'Monitoraggio Normativo',
          icon: BookOpen,
          type: 'subcategory',
          subItems: [
            { id: 'regulatory_updates', title: 'Aggiornamenti Normativi', icon: Bell, path: 'compliance-regulatory-updates' },
            { id: 'compliance_gaps', title: 'Gap Compliance', icon: AlertTriangle, path: 'compliance-gaps' },
            { id: 'compliance_metrics', title: 'Metriche Compliance', icon: BarChart, path: 'compliance-metrics' }
          ]
        }
      ]
    },
    {
      id: 'reporting',
      title: 'Reporting',
      icon: FileText,
      type: 'category',
      subItems: [
        { 
          id: 'dashboards', 
          title: 'Dashboard', 
          icon: BarChart3,
          type: 'subcategory',
          subItems: [
            { id: 'executive_dashboard', title: 'Dashboard Esecutiva', icon: TrendingUp, path: 'reporting-executive' },
            { id: 'operational_dashboard', title: 'Dashboard Operativa', icon: Activity, path: 'reporting-operational' },
            { id: 'compliance_dashboard', title: 'Dashboard Compliance', icon: Shield, path: 'reporting-compliance' }
          ]
        },
        {
          id: 'regulatory_reports',
          title: 'Report Normativi',
          icon: FileCheck,
          type: 'subcategory',
          subItems: [
            { id: 'gdpr_reports', title: 'Report GDPR', icon: Shield, path: 'reporting-gdpr-reports' },
            { id: 'dpo_reports', title: 'Report DPO', icon: UserCheck, path: 'reporting-dpo-reports' },
            { id: 'authority_reports', title: 'Report Autorità', icon: Building, path: 'reporting-authority-reports' }
          ]
        }
      ]
    },
    {
      id: 'administration',
      title: 'Amministrazione',
      icon: Settings,
      type: 'category',
      subItems: [
        { 
          id: 'user_management', 
          title: 'Gestione Utenti', 
          icon: Users,
          type: 'subcategory',
          subItems: [
            { id: 'users', title: 'Utenti', icon: Users, path: 'admin-users' },
            { id: 'roles', title: 'Ruoli', icon: Key, path: 'admin-roles' },
            { id: 'permissions', title: 'Permessi', icon: Lock, path: 'admin-permissions' },
            { id: 'access_logs', title: 'Log Accessi', icon: Eye, path: 'admin-access-logs' }
          ]
        },
        {
          id: 'system_config',
          title: 'Configurazione Sistema',
          icon: Settings,
          type: 'subcategory',
          subItems: [
            { id: 'system_settings', title: 'Impostazioni Sistema', icon: Settings, path: 'admin-system-settings' },
            { id: 'notification_settings', title: 'Impostazioni Notifiche', icon: Bell, path: 'admin-notifications' },
            { id: 'backup_management', title: 'Gestione Backup', icon: Archive, path: 'admin-backup' },
            { id: 'system_monitoring', title: 'Monitoraggio Sistema', icon: Monitor, path: 'admin-monitoring' }
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
              <div className={`ml-4 pl-4 border-l-2 border-gray-200 space-y-1 ${level > 0 ? 'ml-2' : ''}`}>
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
          onClick={() => navigateTo(item.path)}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-xs transition-all duration-200 ${
            isActive(item.path)
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
          } ${level > 1 ? 'ml-2' : ''}`}
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
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">GDPR & Risk</h1>
            <p className="text-sm text-gray-500">Management Platform</p>
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
            <Shield className="w-5 h-5 text-white" />
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
  const { currentPage, navigateTo } = useApp();

  const getPageTitle = () => {
    if (currentPage === 'dashboard') return 'Dashboard';
    
    const titleMap = {
      'gdpr-data-inventory': 'Inventario Dati',
      'gdpr-data-flow': 'Flussi di Dati',
      'gdpr-consent': 'Gestione Consensi',
      'gdpr-access-requests': 'Richieste Accesso',
      'dpia-registry': 'Registro DPIA',
      'security-incidents': 'Gestione Incidenti',
      'risk-inventory': 'Inventario Rischi',
      'compliance-audit-planning': 'Pianificazione Audit',
      'reporting-executive': 'Dashboard Esecutiva',
      'admin-users': 'Gestione Utenti'
    };
    
    return titleMap[currentPage] || 'GDPR & Risk Management';
  };

  const Breadcrumb = () => {
    const paths = currentPage ? currentPage.split('-') : [];
    
    return (
      <div className="flex items-center text-sm text-gray-500">
        <button onClick={() => navigateTo('dashboard')} className="hover:text-blue-600 transition-colors">
          Home
        </button>
        {paths.length > 1 && paths.map((path, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 mx-2" />
            <span className="capitalize">{path}</span>
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
            <span>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}, 15:30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard principale
const Dashboard = () => {
  const { navigateTo } = useApp();
  
  const kpiData = [
    { 
      label: 'Soggetti Interessati', 
      value: '45.789', 
      trend: '+2.3%', 
      icon: Users, 
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      onClick: () => navigateTo('gdpr-data-inventory')
    },
    { 
      label: 'Richieste GDPR', 
      value: '127', 
      trend: '+18%', 
      icon: FileText, 
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      onClick: () => navigateTo('gdpr-access-requests')
    },
    { 
      label: 'Rischi Identificati', 
      value: '89', 
      trend: '+5', 
      icon: ShieldAlert, 
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50',
      onClick: () => navigateTo('risk-inventory')
    },
    { 
      label: 'DPIA Attive', 
      value: '23', 
      trend: '+3', 
      icon: ClipboardCheck, 
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      onClick: () => navigateTo('dpia-registry')
    }
  ];

  const alertsData = [
    {
      type: 'critical',
      icon: AlertTriangle,
      title: '3 richieste di cancellazione in scadenza',
      description: 'Risposta richiesta entro 48 ore',
      color: 'bg-red-50 border-red-200 text-red-800'
    },
    {
      type: 'warning',
      icon: Clock,
      title: 'DPIA "Sistema CRM" richiede revisione',
      description: 'Scadenza valutazione: 5 giorni',
      color: 'bg-amber-50 border-amber-200 text-amber-800'
    },
    {
      type: 'info',
      icon: Bell,
      title: 'Nuovo aggiornamento normativo disponibile',
      description: 'Guidelines EDPB sul targeting pubblicitario',
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      type: 'success',
      icon: CheckCircle,
      title: 'Audit interno completato con successo',
      description: 'Nessuna non conformità rilevata',
      color: 'bg-green-50 border-green-200 text-green-800'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">GDPR & Risk Management</h1>
            <p className="text-blue-100 text-lg">Piattaforma integrata per conformità privacy e gestione dei rischi</p>
          </div>
          <div className="hidden lg:block">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>

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

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Moduli Principali</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button 
            onClick={() => navigateTo('gdpr-data-inventory')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-200"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Mappatura Dati</h3>
            <p className="text-sm text-gray-600 text-center">Gestione inventario e flussi dei dati personali</p>
          </button>
          
          <button 
            onClick={() => navigateTo('gdpr-consent')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-200"
          >
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Gestione Consensi</h3>
            <p className="text-sm text-gray-600 text-center">Raccolta e gestione consensi GDPR</p>
          </button>
          
          <button 
            onClick={() => navigateTo('gdpr-access-requests')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl hover:from-purple-100 hover:to-violet-100 transition-all duration-300 border border-purple-200"
          >
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Diritti Interessati</h3>
            <p className="text-sm text-gray-600 text-center">Gestione richieste soggetti interessati</p>
          </button>

          <button 
            onClick={() => navigateTo('dpia-registry')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl hover:from-amber-100 hover:to-orange-100 transition-all duration-300 border border-amber-200"
          >
            <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <FileSearch className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Valutazioni DPIA</h3>
            <p className="text-sm text-gray-600 text-center">Data Protection Impact Assessment</p>
          </button>

          <button 
            onClick={() => navigateTo('risk-inventory')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl hover:from-red-100 hover:to-rose-100 transition-all duration-300 border border-red-200"
          >
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Risk Management</h3>
            <p className="text-sm text-gray-600 text-center">Identificazione e gestione dei rischi</p>
          </button>

          <button 
            onClick={() => navigateTo('security-incidents')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl hover:from-gray-100 hover:to-slate-100 transition-all duration-300 border border-gray-200"
          >
            <div className="w-16 h-16 bg-gray-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <ShieldAlert className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Gestione Incidenti</h3>
            <p className="text-sm text-gray-600 text-center">Data breach e incident management</p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Alert e Notifiche</h2>
          <div className="space-y-3">
            {alertsData.map((alert, index) => {
              const Icon = alert.icon;
              return (
                <div key={index} className={`flex items-start p-4 rounded-lg border ${alert.color}`}>
                  <Icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium mb-1">{alert.title}</p>
                    <p className="text-sm opacity-80">{alert.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Stato Conformità</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">GDPR Compliance</span>
                <span className="text-sm font-medium text-green-600">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full transition-all duration-500" style={{width: '92%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Gestione Rischi</span>
                <span className="text-sm font-medium text-amber-600">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full transition-all duration-500" style={{width: '78%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Sicurezza Dati</span>
                <span className="text-sm font-medium text-blue-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full transition-all duration-500" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Audit e Controlli</span>
                <span className="text-sm font-medium text-purple-600">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full transition-all duration-500" style={{width: '95%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Attività Recenti</h2>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Nuovo soggetto interessato registrato</p>
              <p className="text-xs text-gray-500">2 ore fa</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Richiesta di accesso completata</p>
              <p className="text-xs text-gray-500">4 ore fa</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Rischio identificato: Accesso non autorizzato</p>
              <p className="text-xs text-gray-500">6 ore fa</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <FileSearch className="w-4 h-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">DPIA "Sistema HR" approvata</p>
              <p className="text-xs text-gray-500">1 giorno fa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Pagina Inventario Dati
const DataInventoryPage = () => {
  const { navigateTo } = useApp();

  const dataTypes = [
    { id: 1, category: 'Identificativi', type: 'Nome e Cognome', purpose: 'Identificazione utente', legalBasis: 'Consenso', retention: '5 anni', subjects: 15420 },
    { id: 2, category: 'Contatti', type: 'Email', purpose: 'Comunicazioni', legalBasis: 'Consenso', retention: '3 anni', subjects: 15420 },
    { id: 3, category: 'Identificativi', type: 'Codice Fiscale', purpose: 'Adempimenti fiscali', legalBasis: 'Obbligo legale', retention: '10 anni', subjects: 12300 },
    { id: 4, category: 'Finanziari', type: 'IBAN', purpose: 'Pagamenti', legalBasis: 'Contratto', retention: '7 anni', subjects: 8500 },
    { id: 5, category: 'Comportamentali', type: 'Cookie Analytics', purpose: 'Analisi sito web', legalBasis: 'Interesse legittimo', retention: '2 anni', subjects: 25000 }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Inventario Dati Personali</h1>
            <p className="text-gray-600 mt-2">Mappatura completa dei dati personali trattati dall'organizzazione</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Nuovo Tipo Dati
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Esporta
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input 
                type="text" 
                placeholder="Cerca tipi di dati..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Tutte le categorie</option>
              <option>Identificativi</option>
              <option>Contatti</option>
              <option>Finanziari</option>
              <option>Comportamentali</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Tutte le basi giuridiche</option>
              <option>Consenso</option>
              <option>Contratto</option>
              <option>Obbligo legale</option>
              <option>Interesse legittimo</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Categoria</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Tipo Dato</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Finalità</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Base Giuridica</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Conservazione</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Soggetti</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {dataTypes.map((data) => (
                <tr key={data.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                      data.category === 'Identificativi' ? 'bg-blue-100 text-blue-800' :
                      data.category === 'Contatti' ? 'bg-green-100 text-green-800' :
                      data.category === 'Finanziari' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {data.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-medium text-gray-900">{data.type}</td>
                  <td className="py-4 px-4 text-gray-900">{data.purpose}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                      data.legalBasis === 'Consenso' ? 'bg-green-100 text-green-800' :
                      data.legalBasis === 'Contratto' ? 'bg-blue-100 text-blue-800' :
                      data.legalBasis === 'Obbligo legale' ? 'bg-purple-100 text-purple-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {data.legalBasis}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{data.retention}</td>
                  <td className="py-4 px-4 font-semibold text-gray-900">{data.subjects.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Componente PlaceholderPage
const PlaceholderPage = ({ title, description, icon = Settings }) => {
  const IconComponent = icon;
  const { navigateTo } = useApp();
  
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
            onClick={() => navigateTo('dashboard')}
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
const MainApp = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'gdpr-data-inventory':
        return <DataInventoryPage />;
      case 'gdpr-data-flow':
        return (
          <PlaceholderPage 
            title="Flussi di Dati" 
            description="Mappatura e visualizzazione dei flussi di dati personali tra sistemi e organizzazioni" 
            icon={GitBranch} 
          />
        );
      case 'gdpr-consent':
        return (
          <PlaceholderPage 
            title="Gestione Consensi" 
            description="Raccolta, gestione e tracciamento dei consensi secondo GDPR" 
            icon={CheckCircle} 
          />
        );
      case 'gdpr-access-requests':
        return (
          <PlaceholderPage 
            title="Richieste Accesso" 
            description="Gestione richieste di accesso, rettifica, cancellazione e portabilità" 
            icon={UserCheck} 
          />
        );
      case 'dpia-registry':
        return (
          <PlaceholderPage 
            title="Registro DPIA" 
            description="Registro delle valutazioni d'impatto sulla protezione dei dati" 
            icon={ClipboardCheck} 
          />
        );
      case 'dpia-risk-analysis':
        return (
          <PlaceholderPage 
            title="Analisi Rischi DPIA" 
            description="Analisi e valutazione dei rischi per la privacy nelle DPIA" 
            icon={BarChart3} 
          />
        );
      case 'security-incidents':
        return (
          <PlaceholderPage 
            title="Gestione Incidenti" 
            description="Registro e gestione degli incidenti di sicurezza e data breach" 
            icon={AlertTriangle} 
          />
        );
      case 'security-technical':
        return (
          <PlaceholderPage 
            title="Misure Tecniche" 
            description="Gestione delle misure tecniche di sicurezza per protezione dati" 
            icon={Cpu} 
          />
        );
      case 'risk-inventory':
        return (
          <PlaceholderPage 
            title="Inventario Rischi" 
            description="Registro completo dei rischi identificati e loro classificazione" 
            icon={Database} 
          />
        );
      case 'risk-heat-map':
        return (
          <PlaceholderPage 
            title="Mappa di Calore Rischi" 
            description="Visualizzazione grafica dei rischi per probabilità e impatto" 
            icon={PieChart} 
          />
        );
      case 'compliance-audit-planning':
        return (
          <PlaceholderPage 
            title="Pianificazione Audit" 
            description="Pianificazione e scheduling degli audit di conformità" 
            icon={Calendar} 
          />
        );
      case 'reporting-executive':
        return (
          <PlaceholderPage 
            title="Dashboard Esecutiva" 
            description="Dashboard con KPI e metriche per il management" 
            icon={TrendingUp} 
          />
        );
      case 'admin-users':
        return (
          <PlaceholderPage 
            title="Gestione Utenti" 
            description="Gestione utenti, ruoli e permessi del sistema" 
            icon={Users} 
          />
        );
      default:
        return (
          <PlaceholderPage 
            title="Pagina non trovata" 
            description="La pagina che stai cercando non esiste o è stata spostata." 
            icon={AlertTriangle} 
          />
        );
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

export default () => (
  <AppProvider>
    <MainApp />
  </AppProvider>
);