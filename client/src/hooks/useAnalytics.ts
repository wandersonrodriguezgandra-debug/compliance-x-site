/**
 * Hook customizado para rastreamento de eventos de clique
 * Integra com Umami Analytics para medir desempenho do site
 */

export const useAnalytics = () => {
  const trackEvent = (eventName: string, eventData?: Record<string, string | number>) => {
    // Rastrear com Umami Analytics
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.trackEvent(eventName, eventData);
    }

    // Log no console para debug
    console.log(`📊 Analytics Event: ${eventName}`, eventData);
  };

  const trackButtonClick = (buttonName: string, section?: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      section: section || 'unknown',
      timestamp: new Date().getTime(),
    });
  };

  const trackCTAClick = (ctaType: string) => {
    trackEvent('cta_click', {
      cta_type: ctaType,
      timestamp: new Date().getTime(),
    });
  };

  const trackNavigation = (navItem: string) => {
    trackEvent('navigation_click', {
      nav_item: navItem,
      timestamp: new Date().getTime(),
    });
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', {
      section_name: sectionName,
      timestamp: new Date().getTime(),
    });
  };

  const trackFormInteraction = (formName: string, action: string) => {
    trackEvent('form_interaction', {
      form_name: formName,
      action: action,
      timestamp: new Date().getTime(),
    });
  };

  const trackPricingPlanView = (planName: string) => {
    trackEvent('pricing_plan_view', {
      plan_name: planName,
      timestamp: new Date().getTime(),
    });
  };

  const trackPricingPlanClick = (planName: string) => {
    trackEvent('pricing_plan_click', {
      plan_name: planName,
      timestamp: new Date().getTime(),
    });
  };

  return {
    trackEvent,
    trackButtonClick,
    trackCTAClick,
    trackNavigation,
    trackSectionView,
    trackFormInteraction,
    trackPricingPlanView,
    trackPricingPlanClick,
  };
};
