import React, { createContext, useContext, useCallback } from 'react';

/**
 * Contexto de Analytics
 * Fornece funções para rastreamento de eventos em toda a aplicação
 */

interface AnalyticsContextType {
  trackEvent: (eventName: string, eventData?: Record<string, string | number>) => void;
  trackButtonClick: (buttonName: string, section?: string) => void;
  trackCTAClick: (ctaType: string) => void;
  trackNavigation: (navItem: string) => void;
  trackSectionView: (sectionName: string) => void;
  trackPricingPlanClick: (planName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const trackEvent = useCallback((eventName: string, eventData?: Record<string, string | number>) => {
    // Rastrear com Umami Analytics
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.trackEvent(eventName, eventData);
    }

    // Disparar evento customizado para o dashboard
    const event = new CustomEvent('compliance_analytics_event', {
      detail: { eventName, eventData },
    });
    window.dispatchEvent(event);

    // Log no console para debug
    console.log(`📊 Analytics Event: ${eventName}`, eventData);
  }, []);

  const trackButtonClick = useCallback((buttonName: string, section?: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      section: section || 'unknown',
    });
  }, [trackEvent]);

  const trackCTAClick = useCallback((ctaType: string) => {
    trackEvent('cta_click', {
      cta_type: ctaType,
    });
  }, [trackEvent]);

  const trackNavigation = useCallback((navItem: string) => {
    trackEvent('navigation_click', {
      nav_item: navItem,
    });
  }, [trackEvent]);

  const trackSectionView = useCallback((sectionName: string) => {
    trackEvent('section_view', {
      section_name: sectionName,
    });
  }, [trackEvent]);

  const trackPricingPlanClick = useCallback((planName: string) => {
    trackEvent('pricing_plan_click', {
      plan_name: planName,
    });
  }, [trackEvent]);

  const value: AnalyticsContextType = {
    trackEvent,
    trackButtonClick,
    trackCTAClick,
    trackNavigation,
    trackSectionView,
    trackPricingPlanClick,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalyticsContext deve ser usado dentro de AnalyticsProvider');
  }
  return context;
}
