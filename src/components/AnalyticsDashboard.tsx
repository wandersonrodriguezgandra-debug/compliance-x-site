import { useEffect, useState } from 'react';
import { BarChart3, TrendingUp, Users, Mouse } from 'lucide-react';

/**
 * Dashboard de Analytics
 * Exibe métricas de desempenho e rastreamento de cliques em tempo real
 */

interface AnalyticsMetric {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface EventLog {
  eventName: string;
  timestamp: number;
  data?: Record<string, string | number>;
}

export default function AnalyticsDashboard() {
  const [metrics, setMetrics] = useState<AnalyticsMetric[]>([
    {
      name: 'Total de Cliques',
      value: 0,
      icon: <Mouse className="w-6 h-6" />,
      color: 'bg-blue-50 text-blue-700',
    },
    {
      name: 'CTAs Clicados',
      value: 0,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-green-50 text-green-700',
    },
    {
      name: 'Visitantes',
      value: 0,
      icon: <Users className="w-6 h-6" />,
      color: 'bg-purple-50 text-purple-700',
    },
    {
      name: 'Taxa de Conversão',
      value: 0,
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-orange-50 text-orange-700',
    },
  ]);

  const [eventLogs, setEventLogs] = useState<EventLog[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Recuperar dados do localStorage
    const storedMetrics = localStorage.getItem('compliance_analytics_metrics');
    const storedLogs = localStorage.getItem('compliance_analytics_logs');

    if (storedMetrics) {
      try {
        const parsed = JSON.parse(storedMetrics);
        setMetrics(prev => 
          prev.map(m => ({
            ...m,
            value: parsed[m.name.toLowerCase().replace(/\s+/g, '_')] || 0,
          }))
        );
      } catch (e) {
        console.error('Erro ao recuperar métricas:', e);
      }
    }

    if (storedLogs) {
      try {
        setEventLogs(JSON.parse(storedLogs));
      } catch (e) {
        console.error('Erro ao recuperar logs:', e);
      }
    }

    // Listener para eventos customizados
    const handleAnalyticsEvent = (event: CustomEvent) => {
      const { eventName, eventData } = event.detail;

      // Atualizar logs
      setEventLogs(prev => {
        const updated = [
          {
            eventName,
            timestamp: Date.now(),
            data: eventData,
          },
          ...prev.slice(0, 49), // Manter últimos 50 eventos
        ];
        localStorage.setItem('compliance_analytics_logs', JSON.stringify(updated));
        return updated;
      });

      // Atualizar métricas
      setMetrics(prev => {
        const newMetrics = prev.map(m => {
          if (m.name === 'Total de Cliques' && eventName.includes('click')) {
            return { ...m, value: m.value + 1 };
          }
          if (m.name === 'CTAs Clicados' && eventName === 'cta_click') {
            return { ...m, value: m.value + 1 };
          }
          if (m.name === 'Visitantes' && eventName === 'page_view') {
            return { ...m, value: m.value + 1 };
          }
          return m;
        });

        // Persistir métricas no localStorage
        const metricsData = newMetrics.reduce((acc, curr) => {
          acc[curr.name.toLowerCase().replace(/\s+/g, '_')] = curr.value;
          return acc;
        }, {} as Record<string, number>);
        localStorage.setItem('compliance_analytics_metrics', JSON.stringify(metricsData));

        return newMetrics;
      });
    };

    window.addEventListener('compliance_analytics_event', handleAnalyticsEvent as EventListener);

    return () => {
      window.removeEventListener('compliance_analytics_event', handleAnalyticsEvent as EventListener);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Botão flutuante para abrir/fechar dashboard */}
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center hover:scale-110 transition-transform"
        title="Analytics Dashboard"
      >
        <BarChart3 className="w-6 h-6" />
      </button>

      {/* Dashboard */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-40 w-96 bg-white rounded-lg shadow-2xl border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <h3 className="font-bold text-lg">Analytics Dashboard</h3>
            <button
              onClick={toggleVisibility}
              className="text-white hover:bg-primary/80 rounded p-1"
            >
              ✕
            </button>
          </div>

          {/* Conteúdo */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Métricas */}
            <div className="space-y-3 mb-6">
              <h4 className="font-bold text-foreground text-sm">Métricas em Tempo Real</h4>
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg ${metric.color} flex flex-col items-center justify-center`}
                  >
                    <div className="mb-1">{metric.icon}</div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-xs text-center">{metric.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Logs */}
            <div>
              <h4 className="font-bold text-foreground text-sm mb-3">Últimos Eventos</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {eventLogs.length === 0 ? (
                  <p className="text-xs text-muted-foreground">Nenhum evento registrado</p>
                ) : (
                  eventLogs.map((log, i) => (
                    <div
                      key={i}
                      className="text-xs bg-secondary p-2 rounded border border-border"
                    >
                      <div className="font-semibold text-primary">{log.eventName}</div>
                      <div className="text-muted-foreground">
                        {new Date(log.timestamp).toLocaleTimeString('pt-BR')}
                      </div>
                      {log.data && (
                        <div className="text-muted-foreground mt-1">
                          {Object.entries(log.data).map(([key, value]) => (
                            <div key={key}>
                              {key}: {value}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-secondary p-3 border-t border-border text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Última atualização: {new Date().toLocaleTimeString('pt-BR')}</span>
              <button
                onClick={() => {
                  localStorage.removeItem('compliance_analytics_metrics');
                  localStorage.removeItem('compliance_analytics_logs');
                  setEventLogs([]);
                  setMetrics(prev => prev.map(m => ({ ...m, value: 0 })));
                }}
                className="text-primary hover:underline"
              >
                Limpar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
