import React, { useState } from 'react';
import IFRS16App from './IFRS16App';
import IFRS9App from './IFRS9App';
import IFRS17App from './IFRS17App';
import IFRS15App from './IFRS15App';
import IFRS3App from './IFRS3App';
import IFRS2App from './IFRS2App';
import IFRS13App from './IFRS13App';

import { 
  Building,
  CreditCard,
  DollarSign,
  FileText,
  TrendingUp,
  Globe,
  Shield,
  BarChart3,
  Users,
  Settings,
  ArrowRight,
  Bell,
  Search,
  CheckCircle,
  Activity,
  Target,
  Calendar,
  BookOpen,
  Briefcase,
  Home,
  Award,
  Percent,
  Heart,
  AlertTriangle
} from 'lucide-react';

const IFRSPortal = () => {
  const [currentApp, setCurrentApp] = useState('main');

  // Configurazione delle applicazioni IFRS
  const ifrsApplications = [
    {
      id: 'ifrs16',
      title: 'IFRS 16',
      subtitle: 'Leasing',
      description: 'Gestione completa dei contratti di leasing, calcolo ROU assets e passività di leasing',
      icon: Building,
      gradient: 'from-blue-600 to-indigo-700',
      stats: {
        contracts: '1.247',
        value: '€45.2M',
        status: 'Attivo'
      },
      features: ['Identificazione Leasing', 'Calcoli Automatici', 'Report Conformità', 'Audit Trail']
    },
    {
      id: 'ifrs9',
      title: 'IFRS 9',
      subtitle: 'Strumenti Finanziari',
      description: 'Classificazione, misurazione e impairment degli strumenti finanziari',
      icon: CreditCard,
      gradient: 'from-emerald-600 to-teal-700',
      stats: {
        instruments: '89',
        value: '€12.8M',
        status: 'Attivo'
      },
      features: ['Expected Credit Loss', 'Hedge Accounting', 'Fair Value', 'Impairment Testing']
    },
    {
      id: 'ifrs15',
      title: 'IFRS 15',
      subtitle: 'Ricavi da Contratti',
      description: 'Riconoscimento ricavi secondo il modello a 5 fasi per contratti con clienti',
      icon: TrendingUp,
      gradient: 'from-purple-600 to-violet-700',
      stats: {
        contracts: '456',
        value: '€78.5M',
        status: 'Attivo'
      },
      features: ['Performance Obligations', 'Allocazione Prezzo', 'Revenue Recognition', 'Contract Assets']
    },
    {
      id: 'ifrs17',
      title: 'IFRS 17',
      subtitle: 'Contratti Assicurativi',
      description: 'Contabilizzazione dei contratti assicurativi e riassicurativi',
      icon: Shield,
      gradient: 'from-orange-600 to-red-700',
      stats: {
        policies: '2.847',
        value: '€156.3M',
        status: 'Attivo'
      },
      features: ['CSM Calculation', 'Risk Adjustment', 'Onerous Contracts', 'Transition Methods']
    },
    {
      id: 'ifrs3',
      title: 'IFRS 3',
      subtitle: 'Aggregazioni Aziendali',
      description: 'Gestione delle business combination e fair value allocation',
      icon: Briefcase,
      gradient: 'from-rose-600 to-pink-700',
      stats: {
        acquisitions: '12',
        value: '€234.7M',
        status: 'Attivo'
      },
      features: ['Purchase Price Allocation', 'Goodwill Calculation', 'Fair Value Assessment', 'Integration Tracking']
    },
    {
      id: 'ifrs2',
      title: 'IFRS 2',
      subtitle: 'Pagamenti basati su azioni',
      description: 'Gestione dei piani di stock option e pagamenti basati su azioni',
      icon: Award,
      gradient: 'from-amber-600 to-yellow-700',
      stats: {
        plans: '24',
        value: '€15.8M',
        status: 'Attivo'
      },
      features: ['Valuation Models', 'Vesting Periods', 'Expense Recognition', 'Fair Value Measurement']
    },
    {
      id: 'ifrs13',
      title: 'IFRS 13',
      subtitle: 'Fair Value',
      description: 'Misurazione del fair value e gerarchia delle valutazioni',
      icon: Target,
      gradient: 'from-cyan-600 to-blue-700',
      stats: {
        valuations: '167',
        value: '€89.4M',
        status: 'Attivo'
      },
      features: ['Level 1-3 Hierarchy', 'Valuation Techniques', 'Market Data', 'Disclosure Requirements']
    },
    {
      id: 'ias12',
      title: 'IAS 12',
      subtitle: 'Imposte sul Reddito',
      description: 'Gestione delle imposte differite e correnti secondo lo standard IAS 12',
      icon: Percent,
      gradient: 'from-violet-600 to-purple-700',
      stats: {
        entities: '0',
        value: '€0',
        status: 'In Sviluppo'
      },
      features: ['Deferred Tax Calculation', 'Temporary Differences', 'Tax Loss Carryforwards', 'Uncertain Tax Treatments']
    },
    {
      id: 'ias19',
      title: 'IAS 19',
      subtitle: 'Benefici per i Dipendenti',
      description: 'Gestione dei piani pensionistici e altri benefit per i dipendenti',
      icon: Heart,
      gradient: 'from-pink-600 to-rose-700',
      stats: {
        plans: '0',
        value: '€0',
        status: 'In Sviluppo'
      },
      features: ['Pension Obligations', 'Actuarial Calculations', 'Defined Benefit Plans', 'Service Cost Allocation']
    },
    {
      id: 'ias37',
      title: 'IAS 37',
      subtitle: 'Accantonamenti e Passività',
      description: 'Gestione di accantonamenti, passività potenziali e obblighi contingenti',
      icon: AlertTriangle,
      gradient: 'from-gray-600 to-gray-700',
      stats: {
        provisions: '0',
        value: '€0',
        status: 'In Sviluppo'
      },
      features: ['Provision Recognition', 'Contingent Liabilities', 'Best Estimate Calculation', 'Onerous Contracts']
    }
  ];

  // Dati aggregati per la dashboard principale
  const overallStats = [
    {
      label: 'Standard IFRS/IAS Gestiti',
      value: '10',
      trend: '+4 nuovi',
      icon: BookOpen,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Valore Totale Gestito',
      value: '€632.7M',
      trend: '+12.5%',
      icon: DollarSign,
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Contratti/Elementi',
      value: '4.842',
      trend: '+8.3%',
      icon: FileText,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Conformità',
      value: '94%',
      trend: '+2%',
      icon: CheckCircle,
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50'
    }
  ];

  const recentUpdates = [
    {
      standard: 'IFRS 16',
      update: 'Aggiornamento mensile completato',
      date: '30/08/2025',
      status: 'completed',
      type: 'Calcolo Automatico'
    },
    {
      standard: 'IFRS 9',
      update: 'Nuovo modello ECL implementato',
      date: '28/08/2025',
      status: 'completed',
      type: 'Implementazione'
    },
    {
      standard: 'IAS 12',
      update: 'Inizio sviluppo modulo imposte differite',
      date: '25/08/2025',
      status: 'development',
      type: 'Sviluppo'
    }
  ];

  const navigateToApp = (appId) => {
    setCurrentApp(appId);
  };

  const navigateToMain = () => {
    setCurrentApp('main');
  };

  // Funzioni di rendering per ogni applicazione
  const renderIFRS16App = () => (
    <div className="min-h-screen bg-gray-50">
      <IFRS16App onNavigateBack={navigateToMain} />
    </div>
  );

  const renderIFRS9App = () => (
    <div className="min-h-screen bg-gray-50">
      <IFRS9App onNavigateBack={navigateToMain} />
    </div>
  );

  const renderIFRS17App = () => (
    <div className="min-h-screen bg-gray-50">
      <IFRS17App onNavigateBack={navigateToMain} />
    </div>
  );

  const renderIFRS15App = () => (
    <div className="min-h-screen bg-gray-50">
      <IFRS15App onNavigateBack={navigateToMain} />
    </div>
  );

  const renderIFRS3App = () => (
    <div className="min-h-screen bg-gray-50">
      <IFRS3App onNavigateBack={navigateToMain} />
    </div>
  );

  const renderIFRS2App = () => (
    <div className="min-h-screen bg-gray-50">
      <IFRS2App onNavigateBack={navigateToMain} />
    </div>
  );

  const renderIFRS13App = () => (
    <div className="min-h-screen bg-gray-50">
      <IFRS13App onNavigateBack={navigateToMain} />
    </div>
  );

  // Header con pulsante di ritorno per le applicazioni
  const renderAppHeader = (title) => (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={navigateToMain}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Torna alla Dashboard</span>
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
        <div className="w-24"></div> {/* Spazio per bilanciare il layout */}
      </div>
    </header>
  );

  // Render della dashboard principale
  const renderMainDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header principale */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">IFRS Management Suite</h1>
              <p className="text-gray-600">Sistema Integrato per la Gestione degli Standard IFRS/IAS</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-3">Centro di Controllo IFRS/IAS</h2>
              <p className="text-blue-100 text-lg mb-4">Gestione centralizzata di tutti gli standard internazionali de reporting finanziario</p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>10 Standard Supportati</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>Aggiornamento Real-time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Conformità Garantita</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* KPI Generali */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overallStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`${stat.bgColor} rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Applicazioni IFRS */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Applicazioni IFRS/IAS Disponibili</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ifrsApplications.map((app) => {
              const Icon = app.icon;
              const isActive = app.stats.status === 'Attivo';
              const isPlanned = app.stats.status === 'Pianificato';
              const inDevelopment = app.stats.status === 'In Sviluppo';
              
              return (
                <div key={app.id} className="group relative">
                  <div className={`bg-gradient-to-br ${app.gradient} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    !isActive ? 'opacity-75' : ''
                  }`}>
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        isActive ? 'bg-green-100 text-green-700' :
                        inDevelopment ? 'bg-yellow-100 text-yellow-700' :
                        isPlanned ? 'bg-gray-100 text-gray-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {app.stats.status}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{app.title}</h3>
                        <p className="text-white/80 font-medium">{app.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 mb-6 text-sm leading-relaxed">{app.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-white/70 text-xs font-medium">
                          {app.id === 'ifrs16' ? 'Contratti' :
                           app.id === 'ifrs9' ? 'Strumenti' :
                           app.id === 'ifrs15' ? 'Contratti' :
                           app.id === 'ifrs17' ? 'Polizze' :
                           app.id === 'ifrs3' ? 'Acquisizioni' :
                           app.id === 'ifrs2' ? 'Piani' :
                           app.id === 'ias12' ? 'Entità' :
                           app.id === 'ias19' ? 'Piani' :
                           app.id === 'ias37' ? 'Accantonamenti' : 'Valutazioni'}
                        </p>
                        <p className="text-white font-bold text-lg">
                          {app.id === 'ifrs16' ? app.stats.contracts :
                           app.id === 'ifrs9' ? app.stats.instruments :
                           app.id === 'ifrs15' ? app.stats.contracts :
                           app.id === 'ifrs17' ? app.stats.policies :
                           app.id === 'ifrs3' ? app.stats.acquisitions :
                           app.id === 'ifrs2' ? app.stats.plans :
                           app.id === 'ias12' ? app.stats.entities :
                           app.id === 'ias19' ? app.stats.plans :
                           app.id === 'ias37' ? app.stats.provisions : app.stats.valuations}
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-white/70 text-xs font-medium">Valore Totale</p>
                        <p className="text-white font-bold text-lg">{app.stats.value}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-sm">Funzionalità Principali:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {app.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-white/80" />
                            <span className="text-white/90 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => navigateToApp(app.id)}
                      disabled={!isActive}
                      className={`w-full flex items-center justify-between p-4 rounded-lg font-semibold transition-all duration-200 ${
                        isActive 
                          ? 'bg-white text-gray-900 hover:bg-gray-50 shadow-md hover:shadow-lg'
                          : 'bg-white/20 text-white/60 cursor-not-allowed'
                      }`}
                    >
                      <span>
                        {isActive ? 'Apri Applicazione' : 
                         inDevelopment ? 'In Sviluppo' :
                         isPlanned ? 'Pianificato' : 'Disabilitato'}
                      </span>
                      {isActive && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aggiornamenti Recenti */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Attività Recenti */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Aggiornamenti Recenti</h3>
            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      update.status === 'completed' ? 'bg-green-500' : 
                      update.status === 'development' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`}></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{update.standard}</h4>
                      <p className="text-sm text-gray-600">{update.update}</p>
                      <p className="text-xs text-gray-500">{update.date}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    update.type === 'Sviluppo' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {update.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Conformità Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Stato Conformità</h3>
            <div className="space-y-4">
              {ifrsApplications.filter(app => app.stats.status === 'Attivo').map((app) => {
                const Icon = app.icon;
                const isActive = app.stats.status === 'Attivo';
                
                return (
                  <div key={app.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${app.gradient} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{app.title}</h4>
                        <p className="text-sm text-gray-600">{app.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{app.stats.value}</p>
                        <p className="text-xs text-gray-500">Valore gestito</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        isActive ? 'bg-green-500' : 'bg-gray-500'
                      }`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sistema IFRS Management Suite</h3>
            <p className="text-gray-600 mb-4">
              Piattaforma integrata per la gestione e conformità degli International Financial Reporting Standards
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Aggiornato: {new Date().toLocaleDateString('it-IT')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Mario Rossi - Administrator</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Versione 2.1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Funzione per decidere cosa renderizzare in base allo stato corrente
  const renderAppContent = () => {
    switch (currentApp) {
      case 'ifrs16':
        return renderIFRS16App();
      case 'ifrs9':
        return renderIFRS9App();
      case 'ifrs17':
        return renderIFRS17App();
      case 'ifrs15':
        return renderIFRS15App();
      case 'ifrs3':
        return renderIFRS3App();
      case 'ifrs2':
        return renderIFRS2App();
      case 'ifrs13':
        return renderIFRS13App();
      case 'main':
      default:
        return renderMainDashboard();
    }
  };

  // Render principale del componente
  return renderAppContent();
};

export default IFRSPortal;