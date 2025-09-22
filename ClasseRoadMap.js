import React, { useState } from 'react';
import { 
  Home, BarChart3, Calendar, Clock, FileText, 
  Leaf, Users, Gavel, Database, Shield, 
  CheckCircle, AlertCircle, ChevronDown, ChevronRight 
} from 'lucide-react';

// ========================================
// 1. CONFIGURAZIONI PER DIVERSI CAPITOLI
// ========================================

// Configurazione per ESRS 2 - Informazioni Generali
export const ESRS_2_CONFIG = {
  id: 'esrs-2',
  title: 'Roadmap ESRS 2 - Informazioni Generali',
  description: 'Piano dettagliato per l\'implementazione del sistema di reporting di sostenibilità secondo gli standard ESRS 2',
  period: 'H1 2026',
  theme: {
    primary: 'from-green-600 to-emerald-600',
    accent: 'green'
  },
  mermaidCode: `
    timeline
        title Roadmap ESRS 2 - Informazioni Generali (H1 2026)
        
        section Q1 2026
            Setup Governance e Organizzazione : Definizione struttura governance
                                             : Assegnazione responsabilità
        
        section Q2 2026 - Fase 1
            Analisi Materialità : Identificazione temi materiali
                               : Mappatura stakeholder
                               : Prima valutazione doppia materialità
            
            Framework Dati Base : Sistema raccolta dati interni
                               : Protocolli qualità dati
        
        section Q2 2026 - Fase 2
            Analisi Materialità Avanzata : Identificazione temi materiali estesa
                                         : Mappatura stakeholder aggiornata
                                         : Valutazione doppia materialità finale
            
            Framework Dati Completo : Sistema raccolta dati esterni
                                   : Protocolli qualità dati avanzati
                                   : Integrazione sistemi esistenti
  `,
  roadmapH1: [
    {
      title: "Governance",
      icon: Gavel,
      iconColor: "bg-purple-500",
      tasks: ["Definizione struttura governance", "Assegnazione responsabilità", "Setup controlli interni"],
      progress: 20
    },
    {
      title: "Analisi Materialità",
      icon: FileText,
      iconColor: "bg-blue-500",
      tasks: ["Identificazione temi materiali", "Mappatura stakeholder", "Valutazione doppia materialità"],
      progress: 15
    },
    {
      title: "Raccolta Dati",
      icon: Database,
      iconColor: "bg-green-500",
      tasks: ["Sistema raccolta dati interni", "Processi dati fornitori", "Protocolli qualità dati"],
      progress: 10
    }
  ],
  roadmapH2: [
    {
      title: "E1 - Cambiamenti Climatici",
      icon: Leaf,
      iconColor: "bg-teal-500",
      tasks: ["Inventario emissioni GHG", "Piano transizione climatica", "Target climatici"],
      progress: 5
    },
    {
      title: "Controlli Interni",
      icon: Shield,
      iconColor: "bg-amber-500",
      tasks: ["Framework controlli interni", "Processi di validazione", "Monitoraggio continuo"],
      progress: 0
    }
  ],
  priorities: [
    {
      level: 1,
      title: "Priority 1 (H1 2026) - Mandatory",
      color: "red",
      items: [
        "ESRS 2 - Informazioni Generali (tutti i sotto-elementi)",
        "Sistema di raccolta e validazione dati",
        "Processo di materialità"
      ]
    },
    {
      level: 2,
      title: "Priority 2 (H2 2026) - Mandatory", 
      color: "amber",
      items: [
        "E1 - Cambiamenti Climatici (piano transizione, emissioni, target)",
        "Framework di controllo interno"
      ]
    }
  ]
};

// Configurazione per ESRS E1 - Cambiamenti Climatici
export const ESRS_E1_CONFIG = {
  id: 'esrs-e1',
  title: 'Roadmap ESRS E1 - Cambiamenti Climatici',
  description: 'Piano di implementazione per il reporting dei cambiamenti climatici e la transizione verso la neutralità carbonica',
  period: 'H2 2026 - H1 2027',
  theme: {
    primary: 'from-teal-600 to-cyan-600',
    accent: 'teal'
  },
  mermaidCode: `
    timeline
        title Roadmap ESRS E1 - Cambiamenti Climatici (H2 2026 - H1 2027)
        
        section H2 2026
            Inventario Emissioni : Scope 1 - Emissioni dirette
                                : Scope 2 - Energia acquistata  
                                : Scope 3 - Catena del valore
            
            Piano di Transizione : Strategia climatica aziendale
                                : Target science-based
                                : Roadmap decarbonizzazione
        
        section H1 2027
            Implementazione Misure : Efficienza energetica
                                  : Energie rinnovabili
                                  : Offsetting carbon
            
            Monitoraggio e Reporting : Sistema MRV
                                    : Reporting annuale
                                    : Verificazione esterna
  `,
  roadmapH1: [
    {
      title: "Inventario GHG",
      icon: Leaf,
      iconColor: "bg-green-600",
      tasks: ["Scope 1 - Emissioni dirette", "Scope 2 - Energia elettrica", "Scope 3 - Catena valore"],
      progress: 30
    },
    {
      title: "Piano Transizione",
      icon: BarChart3,
      iconColor: "bg-teal-600",
      tasks: ["Target science-based", "Strategia decarbonizzazione", "Budget carbon"],
      progress: 20
    },
    {
      title: "Sistemi Monitoraggio",
      icon: Database,
      iconColor: "bg-cyan-600",
      tasks: ["Sistema MRV", "Dashboard emissioni", "Reporting automatico"],
      progress: 10
    }
  ],
  roadmapH2: [
    {
      title: "Implementazione Misure",
      icon: Gavel,
      iconColor: "bg-emerald-600",
      tasks: ["Efficienza energetica", "Energie rinnovabili", "Mobilità sostenibile"],
      progress: 0
    },
    {
      title: "Verifica e Assurance",
      icon: Shield,
      iconColor: "bg-green-700",
      tasks: ["Verificazione esterna", "Audit climatico", "Certificazioni"],
      progress: 0
    }
  ],
  priorities: [
    {
      level: 1,
      title: "Priority 1 (H2 2026) - Critical",
      color: "red",
      items: [
        "Inventario completo emissioni GHG Scope 1, 2, 3",
        "Piano di transizione climatica science-based",
        "Target di riduzione emissioni"
      ]
    },
    {
      level: 2,
      title: "Priority 2 (H1 2027) - High",
      color: "amber", 
      items: [
        "Sistema di monitoraggio MRV",
        "Implementazione prime misure di riduzione",
        "Processo di verificazione esterna"
      ]
    }
  ]
};

// Configurazione per ESRS S1 - Forza Lavoro  
export const ESRS_S1_CONFIG = {
  id: 'esrs-s1',
  title: 'Roadmap ESRS S1 - Forza Lavoro',
  description: 'Piano di implementazione per il reporting sociale relativo alla forza lavoro e condizioni di lavoro',
  period: 'H1 2027 - H2 2027',
  theme: {
    primary: 'from-blue-600 to-indigo-600',
    accent: 'blue'
  },
  mermaidCode: `
    timeline
        title Roadmap ESRS S1 - Forza Lavoro (H1 2027 - H2 2027)
        
        section H1 2027
            Condizioni di Lavoro : Salute e sicurezza
                                : Orari di lavoro
                                : Remunerazione equa
            
            Sviluppo Competenze : Formazione e sviluppo
                               : Career development  
                               : Riqualificazione
        
        section H2 2027
            Diversità e Inclusione : Gender equality
                                  : Diversity policy
                                  : Inclusion programs
            
            Dialogo Sociale : Rappresentanza lavoratori
                           : Contrattazione collettiva
                           : Grievance mechanism
  `,
  roadmapH1: [
    {
      title: "Salute e Sicurezza",
      icon: Shield,
      iconColor: "bg-red-500",
      tasks: ["Sistema gestione SSL", "Formazione sicurezza", "Monitoraggio infortuni"],
      progress: 40
    },
    {
      title: "Formazione e Sviluppo",
      icon: Users,
      iconColor: "bg-blue-500",
      tasks: ["Piano formazione annuale", "Career development", "Digital skills"],
      progress: 25
    },
    {
      title: "Remunerazione",
      icon: BarChart3,
      iconColor: "bg-green-500",
      tasks: ["Pay equity analysis", "Living wage", "Performance bonus"],
      progress: 15
    }
  ],
  roadmapH2: [
    {
      title: "Diversity & Inclusion",
      icon: Users,
      iconColor: "bg-purple-500",
      tasks: ["Gender equality plan", "Inclusion training", "D&I metrics"],
      progress: 0
    },
    {
      title: "Dialogo Sociale",
      icon: Gavel,
      iconColor: "bg-indigo-500", 
      tasks: ["Employee representation", "Collective bargaining", "Feedback systems"],
      progress: 0
    }
  ],
  priorities: [
    {
      level: 1,
      title: "Priority 1 (H1 2027) - Mandatory",
      color: "red",
      items: [
        "Sistema gestione salute e sicurezza completo",
        "Piano formazione e sviluppo competenze",
        "Analisi pay equity e living wage"
      ]
    },
    {
      level: 2,
      title: "Priority 2 (H2 2027) - High",
      color: "amber",
      items: [
        "Programmi diversity e inclusion",
        "Sistemi di dialogo sociale",
        "Mechanism di grievance"
      ]
    }
  ]
};

// ========================================
// 2. COMPONENTI MODULARI
// ========================================

// Componente Timeline (ora usa config)
const Timeline = ({ title, mermaidCode, theme }) => {
  React.useEffect(() => {
    import('https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.6.1/mermaid.esm.min.mjs')
      .then((mermaid) => {
        mermaid.default.initialize({ 
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            primaryColor: '#E0E7FF',
            primaryTextColor: '#4338CA',
            primaryBorderColor: '#A5B4FC',
            lineColor: '#9CA3AF',
            sectionBkgColor: '#FAFAFA',
            altSectionBkgColor: '#F5F5F5',
            gridColor: '#D1D5DB',
            section0: theme === 'green' ? '#D1FAE5' : theme === 'teal' ? '#A7F3D0' : '#DBEAFE',
            section1: theme === 'green' ? '#FEF3C7' : theme === 'teal' ? '#FECACA' : '#FEF3C7',
            section2: theme === 'green' ? '#D1FAE5' : theme === 'teal' ? '#A7F3D0' : '#DBEAFE',
            section3: '#FED7AA',
          },
          timeline: {
            diagramMarginX: 60,
            diagramMarginY: 30,
            rightMargin: 180,
            leftMargin: 180,
            width: 200,
            height: 60,
            boxTextMargin: 8,
            noteMargin: 15,
            messageMargin: 40,
            mirrorActors: false
          }
        });
        mermaid.default.run();
      })
      .catch((error) => {
        console.error('Errore nel caricamento di Mermaid:', error);
      });
  }, [mermaidCode, theme]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="bg-white border border-gray-100 rounded-lg p-6 overflow-x-auto" style={{minHeight: '500px'}}>
        <div className="mermaid" style={{ minHeight: '450px', width: '100%', textAlign: 'center' }}>
          {mermaidCode}
        </div>
      </div>
    </div>
  );
};

// Componente RoadmapSection (ora usa config)
const RoadmapSection = ({ title, period, items, theme }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <span className={`text-sm font-medium text-${theme}-600 bg-${theme}-100 px-3 py-1 rounded-full`}>
          {period}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className={`w-10 h-10 ${item.iconColor} rounded-lg flex items-center justify-center mr-3`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {item.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-2 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-gray-500">Progresso</span>
                <span className={`text-xs font-semibold text-${theme}-600`}>{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className={`bg-${theme}-500 h-2 rounded-full`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========================================
// 3. COMPONENTE PRINCIPALE MODULARE
// ========================================

const ModularRoadmapPage = ({ config }) => {
  const [activeTab, setActiveTab] = useState('timeline');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Intestazione dinamica */}
        <div className={`bg-gradient-to-r ${config.theme.primary} rounded-2xl p-8 text-white shadow-xl mb-8`}>
          <h1 className="text-3xl font-bold mb-4">{config.title}</h1>
          <p className="text-white text-opacity-90">{config.description}</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'timeline'
                  ? `bg-${config.theme.accent}-100 text-${config.theme.accent}-700`
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Vista Timeline
            </button>
            <button
              onClick={() => setActiveTab('quarterly')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'quarterly'
                  ? `bg-${config.theme.accent}-100 text-${config.theme.accent}-700`
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Vista per Semestre
            </button>
            <button
              onClick={() => setActiveTab('priority')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'priority'
                  ? `bg-${config.theme.accent}-100 text-${config.theme.accent}-700`
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Vista per Priorità
            </button>
          </div>
        </div>

        {/* Contenuto dinamico */}
        {activeTab === 'timeline' && (
          <div>
            <Timeline 
              title="Roadmap Temporale Implementazione ESRS" 
              mermaidCode={config.mermaidCode}
              theme={config.theme.accent}
            />
          </div>
        )}

        {activeTab === 'quarterly' && (
          <div>
            <RoadmapSection 
              title={`H1 ${config.period.split(' ')[1]} - Prima Fase`}
              period={`Gennaio - Giugno ${config.period.split(' ')[1]}`}
              items={config.roadmapH1}
              theme={config.theme.accent}
            />
            
            {config.roadmapH2 && (
              <RoadmapSection 
                title={`H2 ${config.period.split(' ')[1]} - Seconda Fase`}
                period={`Luglio - Dicembre ${config.period.split(' ')[1]}`}
                items={config.roadmapH2}
                theme={config.theme.accent}
              />
            )}
          </div>
        )}

        {activeTab === 'priority' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Priorità di Implementazione</h2>
            <div className="space-y-6">
              {config.priorities.map((priority, index) => (
                <div key={index} className={`p-4 bg-${priority.color}-50 rounded-lg border border-${priority.color}-200`}>
                  <div className="flex items-center mb-3">
                    <div className={`w-6 h-6 bg-${priority.color}-500 rounded-full flex items-center justify-center mr-3`}>
                      <span className="text-white text-sm font-bold">{priority.level}</span>
                    </div>
                    <h3 className={`font-semibold text-${priority.color}-800`}>{priority.title}</h3>
                  </div>
                  <ul className={`text-sm text-${priority.color}-700 space-y-1 ml-9`}>
                    {priority.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ========================================
// 4. DEMO CON SELECTOR
// ========================================

const RoadmapDemo = () => {
  const [selectedConfig, setSelectedConfig] = useState('esrs-2');
  
  const configs = {
    'esrs-2': ESRS_2_CONFIG,
    'esrs-e1': ESRS_E1_CONFIG,
    'esrs-s1': ESRS_S1_CONFIG
  };
  
  return (
    <div>
      {/* Selector per demo */}
      <div className="fixed top-4 right-4 z-50">
        <select 
          value={selectedConfig}
          onChange={(e) => setSelectedConfig(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-lg font-medium text-sm"
        >
          <option value="esrs-2">ESRS 2 - Informazioni Generali</option>
          <option value="esrs-e1">ESRS E1 - Cambiamenti Climatici</option>
          <option value="esrs-s1">ESRS S1 - Forza Lavoro</option>
        </select>
      </div>
      
      <ModularRoadmapPage config={configs[selectedConfig]} />
    </div>
  );
};

export default RoadmapDemo;