import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { 
  FileText, BarChart3, Settings, Database, CheckCircle, DollarSign, Calendar, Users,
  TrendingUp, PieChart, Search, Plus, Home, Calculator, ChevronDown, ChevronRight,
  Shield, Upload, RefreshCw, Bell, HelpCircle, FileCheck, Target, Globe, List, Layers,
  ClipboardCheck, Eye, Edit3, FileSpreadsheet, TrendingDown, Percent, AlertTriangle,
  BookOpen, Filter, Download, Lock, Key, CreditCard, Scale, ShieldAlert, GitBranch,
  Cpu, FileBarChart, FileSearch, GitCommit, GitMerge, GitPullRequest, LineChart,
  Wallet, ArrowLeft, ExternalLink, Info, Clock, Book, FileDigit, CalendarDays,
  BarChart, PieChart as PieChartIcon, Landmark, Banknote, Coins, Receipt,
  Sliders, Leaf, Factory, Recycle, CloudRain, Sun, Zap, TreePine, 
  Earth, Building, Truck, Package, Wifi, WifiOff, Server, Cpu as ServerCpu,
  Database as DatabaseIcon, Network, HardDrive, Activity, Shield as ShieldIcon,
  UserCheck, UserX, KeyRound, History, ShieldOff, ScanSearch, FileUp,
  FileDown, FileOutput, FileInput, FileAxis3d, FileCode2, FileJson,
  FileKey, FileLock, FileText as FileTextIcon, FileSpreadsheet as FileSpreadsheetIcon,
  FileDigit as FileDigitIcon, FileBarChart as FileBarChartIcon, FileSearch as FileSearchIcon,
  FileCheck as FileCheckIcon, FileX, FileStack, FileDiff, FileClock, FileQuestion,
  FolderOpen, FolderTree, Archive, Box, Container, Palette, PaintBucket,
  Code, Terminal, GitCompare, GitBranch as GitBranchIcon, GitPullRequest as GitPullRequestIcon,
  GitMerge as GitMergeIcon, GitCommit as GitCommitIcon, GitGraph, Workflow,
  Settings2, ToggleLeft, ToggleRight, SlidersHorizontal, Navigation,
  Map, MapPin, Globe as GlobeIcon, Compass, Satellite, Layers2, LayoutGrid,
  LayoutList, Columns, Rows, PanelLeft, PanelRight, PanelTop, PanelBottom,
  Sidebar, SidebarOpen, SidebarClose, Menu, Grid, Table, DatabaseBackup,
  Cloud, CloudOff, CloudDrizzle, CloudLightning, CloudSnow, Cloudy,
  Wifi as WifiIcon, WifiOff as WifiOffIcon, Signal, SignalHigh, SignalLow,
  SignalZero, SignalMedium, Bluetooth, Radio, Router as RouterIcon , Cctv, QrCode,
  Barcode, RadioTower, SatelliteDish, Mic, MicOff, Video, VideoOff,
  Webcam, Phone, PhoneOff, PhoneCall, PhoneForwarded, PhoneIncoming,
  PhoneOutgoing, PhoneMissed, Voicemail, MessageSquare, MessageCircle,
  Mail, MailOpen, MailCheck, MailWarning, MailQuestion, Inbox, Send,
  Archive as ArchiveIcon, Trash2, Trash, DownloadCloud, UploadCloud,
  CloudDownload, CloudUpload, Save, Folder, FolderPlus, FolderMinus,
  FolderKey, FolderLock, FolderUp, FolderDown, FolderInput, FolderOutput,
  FolderSync, FolderGit2, FolderGit, FolderCheck, FolderX, FolderSearch,
  FolderOpen as FolderOpenIcon, FolderTree as FolderTreeIcon, FolderRoot,
  FileSymlink, FilePlus, FileMinus, FileHeart, FileAudio, FileVideo,
  FileImage, FileArchive, FileVideo2, FileType, FileCode, FileCog,
  FileWarning, FileUser, FileChartLine, FileChartColumn, FileChartPie,
  FileBox, FileDigit as FileDigitIcon2, FileSliders, FileBadge,
  FilePen, FilePlus2, FileMinus2, FileX2, FileCheck2, FileQuestion,
  FileScan, FileSpreadsheet as FileSpreadsheetIcon2, FileJson as FileJsonIcon,
  FileKey2, FileLock2, FileText as FileTextIcon2, FileBarChart as FileBarChartIcon2,
  FileSearch as FileSearchIcon2, FileCheck as FileCheckIcon2, FileClock as FileClockIcon,
  FileDiff as FileDiffIcon, FileStack as FileStackIcon, FileHeart as FileHeartIcon,
  FileUp as FileUpIcon, FileDown as FileDownIcon, FileInput as FileInputIcon,
  FileOutput as FileOutputIcon, FileAxis3d as FileAxis3dIcon, FileCode2 as FileCode2Icon,
  FileJson as FileJsonIcon2, FileKey as FileKeyIcon, FileLock as FileLockIcon,
  FileTextIcon as FileTextIcon3, FileSpreadsheetIcon as FileSpreadsheetIcon3,
  FileDigitIcon as FileDigitIcon3, FileBarChartIcon as FileBarChartIcon3,
  FileSearchIcon as FileSearchIcon3, FileCheckIcon as FileCheckIcon3, FileX as FileXIcon,
  FileStack as FileStackIcon2, FileDiff as FileDiffIcon2, FileClock as FileClockIcon2,
  FileQuestion as FileQuestionIcon, Folder as FolderIcon, FolderPlus as FolderPlusIcon,
  FolderMinus as FolderMinusIcon, FolderKey as FolderKeyIcon, FolderLock as FolderLockIcon,
  FolderUp as FolderUpIcon, FolderDown as FolderDownIcon, FolderInput as FolderInputIcon,
  FolderOutput as FolderOutputIcon, FolderSync as FolderSyncIcon, FolderGit as FolderGitIcon,
  FolderGit2 as FolderGit2Icon, FolderCheck as FolderCheckIcon, FolderX as FolderXIcon,
  FolderSearch as FolderSearchIcon, FolderOpenIcon as FolderOpenIcon2, FolderTreeIcon as FolderTreeIcon2,
  FolderRoot as FolderRootIcon, FileSymlink as FileSymlinkIcon, FilePlus as FilePlusIcon,
  FileMinus as FileMinusIcon, FileHeart as FileHeartIcon2, FileAudio as FileAudioIcon,
  FileVideo as FileVideoIcon, FileImage as FileImageIcon, FileArchive as FileArchiveIcon,
  FileVideo2 as FileVideo2Icon, FileType as FileTypeIcon, FileCode as FileCodeIcon,
  FileCog as FileCogIcon, FileWarning as FileWarningIcon, FileUser as FileUserIcon,
  FileChartLine as FileChartLineIcon, FileChartColumn as FileChartColumnIcon,
  FileChartPie as FileChartPieIcon, FileBox as FileBoxIcon, FileDigitIcon2 as FileDigitIcon4,
  FileSliders as FileSlidersIcon, FileBadge as FileBadgeIcon, FilePen as FilePenIcon,
  FilePlus2 as FilePlus2Icon, FileMinus2 as FileMinus2Icon, FileX2 as FileX2Icon,
  FileCheck2 as FileCheck2Icon, FileQuestion as FileQuestionIcon2, FileScan as FileScanIcon,
  FileSpreadsheetIcon2 as FileSpreadsheetIcon4, FileJsonIcon as FileJsonIcon3,
  FileKey2 as FileKey2Icon, FileLock2 as FileLock2Icon, FileTextIcon2 as FileTextIcon4,
  FileBarChartIcon2 as FileBarChartIcon4, FileSearchIcon2 as FileSearchIcon4,
  FileCheckIcon2 as FileCheckIcon4, FileClockIcon as FileClockIcon3, FileDiffIcon as FileDiffIcon3,
  FileStackIcon as FileStackIcon3, FileHeartIcon as FileHeartIcon2, FileUpIcon as FileUpIcon2,
  FileDownIcon as FileDownIcon2, FileInputIcon as FileInputIcon2, FileOutputIcon as FileOutputIcon2,
  FileAxis3dIcon as FileAxis3dIcon2, FileCode2Icon as FileCode2Icon2, FileJsonIcon2 as FileJsonIcon4,
  FileKeyIcon as FileKeyIcon2, FileLockIcon as FileLockIcon2, FileTextIcon3 as FileTextIcon5,
  FileSpreadsheetIcon3 as FileSpreadsheetIcon5, FileDigitIcon3 as FileDigitIcon5,
  FileBarChartIcon3 as FileBarChartIcon5, FileSearchIcon3 as FileSearchIcon5,
  FileCheckIcon3 as FileCheckIcon5, FileXIcon as FileXIcon2, FileStackIcon2 as FileStackIcon4,
  FileDiffIcon2 as FileDiffIcon4, FileClockIcon2 as FileClockIcon4, FileQuestionIcon as FileQuestionIcon3,
  FolderIcon as FolderIcon2, FolderPlusIcon as FolderPlusIcon2, FolderMinusIcon as FolderMinusIcon2,
  FolderKeyIcon as FolderKeyIcon2, FolderLockIcon as FolderLockIcon2, FolderUpIcon as FolderUpIcon2,
  FolderDownIcon as FolderDownIcon2, FolderInputIcon as FolderInputIcon2, FolderOutputIcon as FolderOutputIcon2,
  FolderSyncIcon as FolderSyncIcon2, FolderGitIcon as FolderGitIcon2, FolderGit2Icon as FolderGit2Icon2,
  FolderCheckIcon as FolderCheckIcon2, FolderXIcon as FolderXIcon2, FolderSearchIcon as FolderSearchIcon2,
  FolderOpenIcon2 as FolderOpenIcon3, FolderTreeIcon2 as FolderTreeIcon3, FolderRootIcon as FolderRootIcon2
} from 'lucide-react';

// Context per la gestione dello stato dell'app
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openMenus, setOpenMenus] = useState(['dashboard']);
  const [openSubMenus, setOpenSubMenus] = useState([]);
  const [user, setUser] = useState({
    name: 'Maria Bianchi',
    role: 'Sustainability Manager',
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

  return (
    <AppContext.Provider value={{
      openMenus, setOpenMenus,
      openSubMenus, setOpenSubMenus,
      user, setUser,
      toggleMenu, toggleSubMenu
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

// Componente Sidebar separato
const Sidebar = () => {
  const { openMenus, openSubMenus, user, toggleMenu, toggleSubMenu } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const navigationMenu = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: Home,
      path: '/'
    },
    {
      id: 'esrs_reporting',
      title: 'Reporting ESRS',
      icon: FileText,
      type: 'category',
      subItems: [
        { 
          id: 'general_requirements', 
          title: 'Requisiti Generali', 
          icon: FileCheck,
          type: 'subcategory',
          subItems: [
            { id: 'esrs_general_disclosure', title: 'Disclosure Generali', icon: FileText, path: '/esrs/general-disclosure' },
            { id: 'materiality_assessment', title: 'Valutazione Materialità', icon: Target, path: '/esrs/materiality-assessment' },
            { id: 'value_chain_mapping', title: 'Mappatura Catena del Valore', icon: GitBranch, path: '/esrs/value-chain' }
          ]
        },
        { 
          id: 'environmental', 
          title: 'Tematiche Ambientali', 
          icon: Leaf,
          type: 'subcategory',
          subItems: [
            { id: 'esrs_e1_climate', title: 'E1 - Cambiamento Climatico', icon: CloudRain, path: '/esrs/e1-climate' },
            { id: 'esrs_e2_pollution', title: 'E2 - Inquinamento', icon: Factory, path: '/esrs/e2-pollution' },
            { id: 'esrs_e3_water', title: 'E3 - Risorse Idriche', icon: CloudRain, path: '/esrs/e3-water' },
            { id: 'esrs_e4_biodiversity', title: 'E4 - Biodiversità', icon: TreePine, path: '/esrs/e4-biodiversity' },
            { id: 'esrs_e5_circular_economy', title: 'E5 - Economia Circolare', icon: Recycle, path: '/esrs/e5-circular' }
          ]
        },
        {
          id: 'social',
          title: 'Tematiche Sociali',
          icon: Users,
          type: 'subcategory',
          subItems: [
            { id: 'esrs_s1_workforce', title: 'S1 - Forza Lavoro', icon: Users, path: '/esrs/s1-workforce' },
            { id: 'esrs_s2_workers_value_chain', title: 'S2 - Lavoratori Catena Valore', icon: GitMerge, path: '/esrs/s2-value-chain' },
            { id: 'esrs_s3_communities', title: 'S3 - Comunità', icon: Globe, path: '/esrs/s3-communities' },
            { id: 'esrs_s4_consumers', title: 'S4 - Consumatori', icon: UserCheck, path: '/esrs/s4-consumers' }
          ]
        },
        {
          id: 'governance',
          title: 'Governance',
          icon: Building,
          type: 'subcategory',
          subItems: [
            { id: 'esrs_g1_business_conduct', title: 'G1 - Condotta di Business', icon: Scale, path: '/esrs/g1-business-conduct' },
            { id: 'esrs_g2_management_risks', title: 'G2 - Gestione dei Rischi', icon: ShieldAlert, path: '/esrs/g2-risk-management' },
            { id: 'esrs_g3_corporate_culture', title: 'G3 - Cultura Aziendale', icon: Users, path: '/esrs/g3-corporate-culture' }
          ]
        }
      ]
    },
    {
      id: 'data_management',
      title: 'Gestione Dati',
      icon: Database,
      type: 'category',
      subItems: [
        { 
          id: 'data_collection', 
          title: 'Raccolta Dati', 
          icon: Download,
          type: 'subcategory',
          subItems: [
            { id: 'data_sources', title: 'Sorgenti Dati', icon: Database, path: '/data/sources' },
            { id: 'data_import', title: 'Importazione Dati', icon: Upload, path: '/data/import' },
            { id: 'data_mapping', title: 'Mappatura Dati', icon: Map, path: '/data/mapping' },
            { id: 'automated_collection', title: 'Raccolta Automatizzata', icon: Cpu, path: '/data/automated' }
          ]
        },
        { 
          id: 'data_quality', 
          title: 'Qualità Dati', 
          icon: CheckCircle,
          type: 'subcategory',
          subItems: [
            { id: 'data_validation', title: 'Validazione Dati', icon: ClipboardCheck, path: '/data/validation' },
            { id: 'data_cleansing', title: 'Pulizia Dati', icon: Brush, path: '/data/cleansing' },
            { id: 'completeness_check', title: 'Controllo Completezza', icon: CheckCircle, path: '/data/completeness' },
            { id: 'consistency_check', title: 'Controllo Coerenza', icon: GitCompare, path: '/data/consistency' }
          ]
        },
        {
          id: 'data_storage',
          title: 'Archiviazione Dati',
          icon: HardDrive,
          type: 'subcategory',
          subItems: [
            { id: 'data_warehouse', title: 'Data Warehouse', icon: Database, path: '/data/warehouse' },
            { id: 'backup_recovery', title: 'Backup e Ripristino', icon: RefreshCw, path: '/data/backup' },
            { id: 'data_retention', title: 'Politiche Conservazione', icon: Archive, path: '/data/retention' }
          ]
        }
      ]
    },
    {
      id: 'analysis_tools',
      title: 'Analisi e Strumenti',
      icon: BarChart3,
      type: 'category',
      subItems: [
        { 
          id: 'performance_analysis', 
          title: 'Analisi Performance', 
          icon: TrendingUp,
          type: 'subcategory',
          subItems: [
            { id: 'kpi_dashboard', title: 'Dashboard KPI', icon: BarChart3, path: '/analysis/kpi' },
            { id: 'trend_analysis', title: 'Analisi Trend', icon: TrendingUp, path: '/analysis/trends' },
            { id: 'benchmarking', title: 'Benchmarking', icon: Target, path: '/analysis/benchmarking' },
            { id: 'gap_analysis', title: 'Analisi Gap', icon: TrendingDown, path: '/analysis/gap' }
          ]
        },
        {
          id: 'risk_assessment',
          title: 'Valutazione Rischi',
          icon: ShieldAlert,
          type: 'subcategory',
          subItems: [
            { id: 'risk_identification', title: 'Identificazione Rischi', icon: Search, path: '/risk/identification' },
            { id: 'risk_quantification', title: 'Quantificazione Rischi', icon: Calculator, path: '/risk/quantification' },
            { id: 'risk_mitigation', title: 'Piani Mitigazione', icon: Shield, path: '/risk/mitigation' }
          ]
        },
        {
          id: 'scenario_analysis',
          title: 'Analisi Scenari',
          icon: GitBranch,
          type: 'subcategory',
          subItems: [
            { id: 'climate_scenarios', title: 'Scenari Climatici', icon: CloudRain, path: '/scenarios/climate' },
            { id: 'regulatory_scenarios', title: 'Scenari Normativi', icon: Scale, path: '/scenarios/regulatory' },
            { id: 'market_scenarios', title: 'Scenari di Mercato', icon: TrendingUp, path: '/scenarios/market' }
          ]
        }
      ]
    },
    {
      id: 'compliance',
      title: 'Conformità',
      icon: FileCheck,
      type: 'category',
      subItems: [
        {
          id: 'compliance_monitoring',
          title: 'Monitoraggio Conformità',
          icon: ClipboardCheck,
          type: 'subcategory',
          subItems: [
            { id: 'compliance_status', title: 'Stato Conformità', icon: CheckCircle, path: '/compliance/status' },
            { id: 'compliance_gap', title: 'Analisi Gap Conformità', icon: AlertTriangle, path: '/compliance/gap' },
            { id: 'action_plans', title: 'Piani Azione', icon: Calendar, path: '/compliance/action-plans' }
          ]
        },
        {
          id: 'audit_management',
          title: 'Gestione Audit',
          icon: Shield,
          type: 'subcategory',
          subItems: [
            { id: 'internal_audit', title: 'Audit Interno', icon: Eye, path: '/compliance/internal-audit' },
            { id: 'external_audit', title: 'Audit Esterno', icon: Globe, path: '/compliance/external-audit' },
            { id: 'audit_findings', title: 'Risultati Audit', icon: FileCheck, path: '/compliance/audit-findings' }
          ]
        },
        {
          id: 'regulatory_watch',
          title: 'Sorveglianza Normativa',
          icon: Binoculars,
          type: 'subcategory',
          subItems: [
            { id: 'regulatory_updates', title: 'Aggiornamenti Normativi', icon: Bell, path: '/compliance/regulatory-updates' },
            { id: 'impact_assessment', title: 'Valutazione Impatto', icon: Target, path: '/compliance/impact-assessment' }
          ]
        }
      ]
    },
    {
      id: 'stakeholder_engagement',
      title: 'Engagement Stakeholder',
      icon: Users,
      type: 'category',
      subItems: [
        { 
          id: 'stakeholder_mapping', 
          title: 'Mappatura Stakeholder', 
          icon: Map,
          type: 'subcategory',
          subItems: [
            { id: 'stakeholder_identification', title: 'Identificazione', icon: Users, path: '/stakeholders/identification' },
            { id: 'stakeholder_analysis', title: 'Analisi', icon: BarChart, path: '/stakeholders/analysis' },
            { id: 'stakeholder_prioritization', title: 'Prioritizzazione', icon: Target, path: '/stakeholders/prioritization' }
          ]
        },
        {
          id: 'engagement_activities',
          title: 'Attività di Engagement',
          icon: MessageCircle,
          type: 'subcategory',
          subItems: [
            { id: 'engagement_planning', title: 'Pianificazione', icon: Calendar, path: '/stakeholders/engagement-planning' },
            { id: 'engagement_tracking', title: 'Monitoraggio', icon: ClipboardCheck, path: '/stakeholders/engagement-tracking' },
            { id: 'feedback_management', title: 'Gestione Feedback', icon: MessageSquare, path: '/stakeholders/feedback' }
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
            { id: 'role_assignment', title: 'Assegnazione Ruoli', icon: Key, path: '/admin/roles' },
            { id: 'access_logs', title: 'Log Accessi', icon: List, path: '/admin/access-logs' }
          ]
        },
        {
          id: 'system',
          title: 'Configurazione Sistema',
          icon: Settings,
          type: 'subcategory',
          subItems: [
            { id: 'system_settings', title: 'Impostazioni', icon: Settings, path: '/admin/settings' },
            { id: 'data_management', title: 'Gestione Dati', icon: Database, path: '/admin/data-management' },
            { id: 'backup_restore', title: 'Backup e Ripristino', icon: RefreshCw, path: '/admin/backup' },
            { id: 'api_integration', title: 'Integrazioni API', icon: GitBranch, path: '/admin/api-integration' }
          ]
        },
        {
          id: 'workflow',
          title: 'Gestione Workflow',
          icon: Workflow,
          type: 'subcategory',
          subItems: [
            { id: 'approval_workflows', title: 'Workflow Approvazione', icon: CheckCircle, path: '/admin/approval-workflows' },
            { id: 'notification_settings', title: 'Impostazioni Notifiche', icon: Bell, path: '/admin/notification-settings' }
          ]
        }
      ]
    }
  ];

  const isActive = (path) => location.pathname === path;

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

      // Elemento terminale (pagina)
      return (
        <button
          key={item.id}
          onClick={() => navigate(item.path)}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-xs transition-all duration-200 ${
            isActive(item.path)
              ? 'bg-green-600 text-white shadow-sm'
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
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
            <Leaf className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ESRS</h1>
            <p className="text-sm text-gray-500">Sustainability Reporting</p>
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
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
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

// Componente Header separato
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    
    // Mappatura semplificata dei titoli delle pagine
    const titleMap = {
      '/esrs/general-disclosure': 'Disclosure Generali ESRS',
      '/esrs/materiality-assessment': 'Valutazione Materialità',
      '/esrs/value-chain': 'Mappatura Catena del Valore',
      '/esrs/e1-climate': 'E1 - Cambiamento Climatico',
      '/esrs/e2-pollution': 'E2 - Inquinamento',
      '/esrs/e3-water': 'E3 - Risorse Idriche',
      '/esrs/e4-biodiversity': 'E4 - Biodiversità',
      '/esrs/e5-circular': 'E5 - Economia Circolare',
      '/esrs/s1-workforce': 'S1 - Forza Lavoro',
      '/esrs/s2-value-chain': 'S2 - Lavoratori Catena Valore',
      '/esrs/s3-communities': 'S3 - Comunità',
      '/esrs/s4-consumers': 'S4 - Consumatori',
      '/esrs/g1-business-conduct': 'G1 - Condotta di Business',
      '/esrs/g2-risk-management': 'G2 - Gestione dei Rischi',
      '/esrs/g3-corporate-culture': 'G3 - Cultura Aziendale',
      '/data/sources': 'Sorgenti Dati',
      '/data/import': 'Importazione Dati',
      '/data/mapping': 'Mappatura Dati',
      '/data/automated': 'Raccolta Automatizzata',
      '/data/validation': 'Validazione Dati',
      '/data/cleansing': 'Pulizia Dati',
      '/data/completeness': 'Controllo Completezza',
      '/data/consistency': 'Controllo Coerenza',
      '/data/warehouse': 'Data Warehouse',
      '/data/backup': 'Backup e Ripristino',
      '/data/retention': 'Politiche Conservazione',
      '/analysis/kpi': 'Dashboard KPI',
      '/analysis/trends': 'Analisi Trend',
      '/analysis/benchmarking': 'Benchmarking',
      '/analysis/gap': 'Analisi Gap',
      '/risk/identification': 'Identificazione Rischi',
      '/risk/quantification': 'Quantificazione Rischi',
      '/risk/mitigation': 'Piani Mitigazione',
      '/scenarios/climate': 'Scenari Climatici',
      '/scenarios/regulatory': 'Scenari Normativi',
      '/scenarios/market': 'Scenari di Mercato',
      '/compliance/status': 'Stato Conformità',
      '/compliance/gap': 'Analisi Gap Conformità',
      '/compliance/action-plans': 'Piani Azione',
      '/compliance/internal-audit': 'Audit Interno',
      '/compliance/external-audit': 'Audit Esterno',
      '/compliance/audit-findings': 'Risultati Audit',
      '/compliance/regulatory-updates': 'Aggiornamenti Normativi',
      '/compliance/impact-assessment': 'Valutazione Impatto',
      '/stakeholders/identification': 'Identificazione Stakeholder',
      '/stakeholders/analysis': 'Analisi Stakeholder',
      '/stakeholders/prioritization': 'Prioritizzazione Stakeholder',
      '/stakeholders/engagement-planning': 'Pianificazione Engagement',
      '/stakeholders/engagement-tracking': 'Monitoraggio Engagement',
      '/stakeholders/feedback': 'Gestione Feedback',
      '/admin/users': 'Gestione Utenti',
      '/admin/roles': 'Assegnazione Ruoli',
      '/admin/access-logs': 'Log Accessi',
      '/admin/settings': 'Impostazioni Sistema',
      '/admin/data-management': 'Gestione Dati',
      '/admin/backup': 'Backup e Ripristino',
      '/admin/api-integration': 'Integrazioni API',
      '/admin/approval-workflows': 'Workflow Approvazione',
      '/admin/notification-settings': 'Impostazioni Notifiche'
    };
    
    return titleMap[path] || 'ESRS Sustainability Reporting';
  };

  const Breadcrumb = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    
    return (
      <div className="flex items-center text-sm text-gray-500">
        <button onClick={() => navigate('/')} className="hover:text-green-600 transition-colors">
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

// Componenti delle pagine
const Dashboard = () => {
  const navigate = useNavigate();
  
  const kpiData = [
    { 
      label: 'Indicatori Monitorati', 
      value: '142', 
      trend: '+8%', 
      icon: BarChart3, 
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      onClick: () => navigate('/analysis/kpi')
    },
    { 
      label: 'Rischi Identificati', 
      value: '28', 
      trend: '-3%', 
      icon: ShieldAlert, 
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50',
      onClick: () => navigate('/risk/identification')
    },
    { 
      label: 'Stakeholder Coinvolti', 
      value: '45', 
      trend: '+12%', 
      icon: Users, 
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      onClick: () => navigate('/stakeholders/identification')
    },
    { 
      label: 'Conformità Normativa', 
      value: '92%', 
      trend: '+4%', 
      icon: CheckCircle, 
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      onClick: () => navigate('/compliance/status')
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">ESRS Sustainability Reporting</h1>
            <p className="text-green-100 text-lg">Piattaforma completa per la rendicontazione di sostenibilità secondo gli European Sustainability Reporting Standards</p>
          </div>
          <div className="hidden lg:block">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center">
              <Leaf className="w-12 h-12 text-white" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button 
            onClick={() => navigate('/esrs/general-disclosure')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-200"
          >
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Reporting ESRS</h3>
            <p className="text-sm text-gray-600 text-center">Gestione completa del reporting di sostenibilità</p>
          </button>
          
          <button 
            onClick={() => navigate('/data/sources')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-200"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Gestione Dati</h3>
            <p className="text-sm text-gray-600 text-center">Raccolta, validazione e archiviazione dati</p>
          </button>
          
          <button 
            onClick={() => navigate('/analysis/kpi')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl hover:from-purple-100 hover:to-violet-100 transition-all duration-300 border border-purple-200"
          >
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Analisi e KPI</h3>
            <p className="text-sm text-gray-600 text-center">Monitoraggio performance e indicatori</p>
          </button>

          <button 
            onClick={() => navigate('/compliance/status')}
            className="group flex flex-col items-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl hover:from-orange-100 hover:to-amber-100 transition-all duration-300 border border-orange-200"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all mb-4">
              <FileCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Conformità</h3>
            <p className="text-sm text-gray-600 text-center">Monitoraggio conformità normativa</p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Alert e Scadenze</h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-amber-50 rounded-lg border border-amber-200">
              <AlertTriangle className="w-5 h-5 text-amber-500 mr-3" />
              <div>
                <p className="font-medium text-amber-800">Report trimestrale da completare</p>
                <p className="text-xs text-amber-600">Scadenza: 15 giorni</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Bell className="w-5 h-5 text-blue-500 mr-3" />
              <div>
                <p className="font-medium text-blue-800">Aggiornamento dati emissioni</p>
                <p className="text-xs text-blue-600">Scadenza: 7 giorni</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
              <ShieldAlert className="w-5 h-5 text-red-500 mr-3" />
              <div>
                <p className="font-medium text-red-800">3 rischi richiedono attenzione</p>
                <p className="text-xs text-red-600">Priorità alta</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Distribuzione per Tematica</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Ambientale</span>
                <span className="text-sm font-medium text-gray-700">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Sociale</span>
                <span className="text-sm font-medium text-gray-700">32%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '32%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Governance</span>
                <span className="text-sm font-medium text-gray-700">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '23%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ESRSGeneralDisclosure = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Disclosure Generali ESRS</h1>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Nuova Disclosure
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 mr-2" />
              Filtri
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Codice Disclosure</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Descrizione</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Stato</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Ultimo Aggiornamento</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { id: 'ESRS1-G1', description: 'Informazioni generali', status: 'Completato', updated: '15/05/2023' },
                { id: 'ESRS1-G2', description: 'Processo di due diligence', status: 'In Revisione', updated: '10/05/2023' },
                { id: 'ESRS1-G3', description: 'Politiche adottate', status: 'Completato', updated: '12/05/2023' },
                { id: 'ESRS1-G4', description: 'Coinvolgimento stakeholder', status: 'In Lavorazione', updated: '08/05/2023' },
                { id: 'ESRS1-G5', description: 'Metriche e obiettivi', status: 'Da Iniziare', updated: '01/05/2023' }
              ].map((disclosure) => (
                <tr key={disclosure.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-green-600">{disclosure.id}</td>
                  <td className="py-4 px-4 text-gray-900">{disclosure.description}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                      disclosure.status === 'Completato' ? 'bg-green-100 text-green-800' :
                      disclosure.status === 'In Revisione' ? 'bg-amber-100 text-amber-800' :
                      disclosure.status === 'In Lavorazione' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {disclosure.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{disclosure.updated}</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="text-green-600 hover:text-green-800">
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

const MaterialityAssessment = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Valutazione Materialità</h1>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Nuova Valutazione
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Esporta
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Impatto Finanziario</h3>
            <div className="space-y-3">
              {[
                { topic: 'Cambiamento climatico', score: 9.2 },
                { topic: 'Economia circolare', score: 8.5 },
                { topic: 'Biodiversità', score: 7.8 },
                { topic: 'Diritti umani', score: 7.2 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-blue-700">{item.topic}</span>
                  <span className="text-sm font-semibold text-blue-900">{item.score}/10</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Impatto sulla Sostenibilità</h3>
            <div className="space-y-3">
              {[
                { topic: 'Emissioni GHG', score: 9.8 },
                { topic: 'Consumo acqua', score: 8.9 },
                { topic: 'Diversità e inclusione', score: 8.3 },
                { topic: 'Salute e sicurezza', score: 8.1 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-green-700">{item.topic}</span>
                  <span className="text-sm font-semibold text-green-900">{item.score}/10</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-4">Matrice di Materialità</h3>
          <div className="relative h-64 bg-white border border-gray-200 rounded">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 border border-gray-300 relative">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-gray-300">
                  <div className="text-xs text-gray-500 absolute top-1 left-1">Basso impatto finanziario</div>
                  <div className="text-xs text-gray-500 absolute bottom-1 right-1">Alto impatto sostenibilità</div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 border-l border-b border-gray-300">
                  <div className="text-xs text-gray-500 absolute top-1 right-1">Alto impatto finanziario</div>
                  <div className="text-xs text-gray-500 absolute bottom-1 left-1">Alto impatto sostenibilità</div>
                </div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-r border-t border-gray-300">
                  <div className="text-xs text-gray-500 absolute bottom-1 left-1">Basso impatto finanziario</div>
                  <div className="text-xs text-gray-500 absolute top-1 right-1">Basso impatto sostenibilità</div>
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-l border-t border-gray-300">
                  <div className="text-xs text-gray-500 absolute bottom-1 right-1">Alto impatto finanziario</div>
                  <div className="text-xs text-gray-500 absolute top-1 left-1">Basso impatto sostenibilità</div>
                </div>
                
                {/* Punti sulla matrice */}
                <div className="absolute w-3 h-3 bg-green-500 rounded-full" style={{top: '20%', left: '70%'}}></div>
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full" style={{top: '60%', left: '30%'}}></div>
                <div className="absolute w-3 h-3 bg-amber-500 rounded-full" style={{top: '40%', left: '50%'}}></div>
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full" style={{top: '75%', left: '80%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlaceholderPage = ({ title, description, icon = Settings }) => {
  const IconComponent = icon;
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <IconComponent className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8 text-lg">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
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
const ESRSApp = () => {
  return (
    <Router>
      <AppProvider>
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              <div className="p-8">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/esrs/general-disclosure" element={<ESRSGeneralDisclosure />} />
                  <Route path="/esrs/materiality-assessment" element={<MaterialityAssessment />} />
                  
                  {/* Pagine ESRS */}
                  <Route path="/esrs/value-chain" element={
                    <PlaceholderPage 
                      title="Mappatura Catena del Valore" 
                      description="Analisi e mappatura degli impatti lungo tutta la catena del valore" 
                      icon={GitBranch} 
                    />
                  } />
                  
                  <Route path="/esrs/e1-climate" element={
                    <PlaceholderPage 
                      title="E1 - Cambiamento Climatico" 
                      description="Gestione delle disclosure relative al cambiamento climatico" 
                      icon={CloudRain} 
                    />
                  } />
                  
                  {/* Aggiungi qui tutte le altre route... */}
                  
                  <Route path="*" element={
                    <PlaceholderPage 
                      title="Pagina non trovata" 
                      description="La pagina che stai cercando non esiste o è stata spostata." 
                      icon={AlertTriangle} 
                    />
                  } />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </AppProvider>
    </Router>
  );
};

export default ESRSApp;