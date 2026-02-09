import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_consent");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-[100] animate-in slide-in-from-bottom duration-500">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Nós utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. 
          Ao continuar navegando, você concorda com nossa <a href="#" className="underline text-primary">Política de Privacidade</a>.
        </p>
        <Button onClick={accept} className="bg-primary text-white hover:bg-primary/90 whitespace-nowrap">
          Aceitar e Continuar
        </Button>
      </div>
    </div>
  );
}
