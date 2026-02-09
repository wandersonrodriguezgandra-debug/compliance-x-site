import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAnalyticsContext } from "@/contexts/AnalyticsContext";
import {
  FileText,
  AlertCircle,
  Clock,
  BarChart3,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  Moon,
  Sun,
  Users,
  Building2,
  FileCheck,
  TrendingUp,
  Lock,
  Server,
  ShieldCheck,
  FileSpreadsheet,
  Check,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Logo } from "@/components/Logo";
import { Link } from "wouter";
import { motion, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  
  const springValue = useSpring(from, {
    mass: 1,
    damping: 20,
    stiffness: 50,
    duration: 2,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, to, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={nodeRef} />;
}

/**
 * Compliance X - Sistema Inteligente de Gestão e Conformidade
 * Design: Minimalismo Corporativo Futurista
 * Paleta: Azul Profundo (#0F3A7D) + Verde-Esmeralda (#10B981) + Laranja Suave (#F97316)
 * Tipografia: Poppins Bold para títulos, Inter Regular para corpo
 * Analytics: Rastreamento de cliques em todos os CTAs principais
 */

import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const analytics = useAnalyticsContext();
  const { theme, setTheme } = useTheme();
  
  // ROI Calculator State
  const [employees, setEmployees] = useState([50]);
  const [docsPerMonth, setDocsPerMonth] = useState([100]);
  const hourlyRate = 80; // Custo médio hora/funcionário
  const timePerDoc = 0.5; // Horas gastas por documento manualmente
  
  const manualCost = docsPerMonth[0] * timePerDoc * hourlyRate;
  const automatedCost = docsPerMonth[0] * (timePerDoc * 0.2) * hourlyRate; // 80% de redução
  const savings = manualCost - automatedCost;

  const handleNavClick = (navItem: string) => {
    analytics.trackNavigation(navItem);
  };

  const handleCTAClick = (ctaType: string) => {
    analytics.trackCTAClick(ctaType);
  };

  const handlePricingClick = (planName: string) => {
    analytics.trackPricingPlanClick(planName);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo className="w-10 h-10" />
            <span className="font-bold text-lg text-primary font-poppins">
              Compliance X
            </span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#sobre" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => handleNavClick('sobre')}
              >
                Sobre
              </a>
              <a 
                href="#funcionalidades" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => handleNavClick('funcionalidades')}
              >
                Funcionalidades
              </a>
              <a 
                href="#publico" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => handleNavClick('para-quem')}
              >
                Para Quem
              </a>
              <a 
                href="#planos" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => handleNavClick('planos')}
              >
                Planos
              </a>
              <a 
                href="#faq" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => handleNavClick('faq')}
              >
                FAQ
              </a>
              <Link href="/apresentacao">
                <a className="text-foreground hover:text-primary transition-smooth font-medium text-blue-600" onClick={() => handleNavClick('apresentacao')}>
                  Apresentação
                </a>
              </Link>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="mr-2"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-primary" />
              ) : (
                <Sun className="h-5 w-5 text-primary" />
              )}
            </Button>
            <Button 
              asChild
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white"
              onClick={() => handleCTAClick('header-contato')}
            >
              <a href="#contato">Contato</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-left font-bold text-primary font-poppins">
                    Compliance X
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  <a 
                    href="#sobre" 
                    className="text-foreground hover:text-primary transition-smooth text-lg font-medium"
                    onClick={() => handleNavClick('mobile-sobre')}
                  >
                    Sobre
                  </a>
                  <a 
                    href="#funcionalidades" 
                    className="text-foreground hover:text-primary transition-smooth text-lg font-medium"
                    onClick={() => handleNavClick('mobile-funcionalidades')}
                  >
                    Funcionalidades
                  </a>
                  <a 
                    href="#publico" 
                    className="text-foreground hover:text-primary transition-smooth text-lg font-medium"
                    onClick={() => handleNavClick('mobile-para-quem')}
                  >
                    Para Quem
                  </a>
                  <a 
                    href="#planos" 
                    className="text-foreground hover:text-primary transition-smooth text-lg font-medium"
                    onClick={() => handleNavClick('mobile-planos')}
                  >
                    Planos
                  </a>
                  <a 
                    href="#contato" 
                    className="text-foreground hover:text-primary transition-smooth text-lg font-medium"
                    onClick={() => handleCTAClick('mobile-contato')}
                  >
                    Contato
                  </a>
                  <Link href="/apresentacao">
                    <a 
                      className="text-foreground hover:text-primary transition-smooth text-lg font-medium text-blue-600"
                      onClick={() => handleNavClick('mobile-apresentacao')}
                    >
                      Apresentação
                    </a>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-blue-600 to-blue-400">
        {/* Diagonal cut effect */}
        <div className="absolute inset-0 opacity-10 bg-diagonal-pattern" />

        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-bold text-white text-4xl md:text-5xl leading-tight font-poppins">
                Compliance X
              </h1>
              <p className="text-lg text-blue-50">
                Sistema Inteligente de Gestão e Conformidade
              </p>
              <p className="text-blue-100 text-lg leading-relaxed">
                Automatize processos, reduza riscos e tenha controle total da sua operação com nossa plataforma modular e inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  asChild
                  className="bg-white text-primary hover:bg-gray-100 font-semibold"
                  onClick={() => handleCTAClick('hero-demonstracao')}
                >
                  <a href="#contato">Solicitar Demonstração</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => handleCTAClick('hero-especialista')}
                >
                  <a href="#contato">Falar com Especialista</a>
                </Button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/iYIcU936K0tD3lDqDdR71D/sandbox/Vp6sOx2gXjTRTF1je29jOA-img-1_1770639504000_na1fn_Y29tcGxpYW5jZS14LWhlcm8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVlJY1U5MzZLMHREM2xEcURkUjcxRC9zYW5kYm94L1ZwNnNPeDJnWGpUUlRGMWplMjlqT0EtaW1nLTFfMTc3MDYzOTUwNDAwMF9uYTFmbl9ZMjl0Y0d4cFlXNWpaUzE0TFdobGNtOC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QK1FnAR4tlGXdbC-n-K9NyHypdkicoFz1d2RK28fpKle~WdyybgHQThYRuO91tD4jyo1hZIt0yYBi8nCRM4GXrYOV0n1g~y4yW88eilXaQ-mK7u3~46VkWCFNkj8dwnGhyFHQm-TxNih3lHz-teOq8~wqzQLvbWNkoGf9KyV90BGPtjVi7yhNw7GvxDnxPL1av6YrONUnkPzbLWdsMrMRKoKSJ4NrYfl2YJ96DhDn8e7RbvxI7F1ZWe8Jkcdf0j5JMtnjD-ohGl61Loz3CnkhXWAgWNJ1QgejixnbJ8hv7gaPSE7D94j9LEOV3sn-lEMkpqdS5quxyLL8ZytQdkH4w__"
                alt="Compliance X Hero"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 bg-white border-b border-border overflow-hidden">
        <div className="container mb-6 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Empresas que confiam na Compliance X
          </p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex py-4 gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                {/* Acme Corp */}
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-current rounded-md" />
                  <span className="font-bold text-xl">Acme Corp</span>
                </div>
                
                {/* Global Tech */}
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-current rounded-full" />
                  <span className="font-bold text-xl">Global Tech</span>
                </div>
                
                {/* Nexus Industries */}
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-current rotate-45" />
                  <span className="font-bold text-xl">Nexus Ind</span>
                </div>
                
                {/* Horizon Group */}
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-current rounded-tl-xl rounded-br-xl" />
                  <span className="font-bold text-xl">Horizon</span>
                </div>
                
                {/* Vertex Systems */}
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-current rounded-tr-xl rounded-bl-xl" />
                  <span className="font-bold text-xl">Vertex Sys</span>
                </div>
                
                {/* Omega Solutions */}
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-current border-2 border-background" />
                  <span className="font-bold text-xl">Omega</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="font-bold text-primary text-4xl font-poppins">
              O Que é Compliance X?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compliance X é uma plataforma modular de gestão e conformidade que se adapta a qualquer segmento. Oferecemos uma solução integrada para automatizar processos, centralizar documentos e manter o controle total da sua operação.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  title: "Plataforma de Gestão",
                  desc: "Centralize todos os seus processos em um único lugar",
                },
                {
                  title: "Controle de Processos",
                  desc: "Monitore e otimize cada etapa da sua operação",
                },
                {
                  title: "Monitoramento de Conformidade",
                  desc: "Garanta a conformidade com regulamentações",
                },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <h3 className="font-bold text-primary text-lg font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              {[
                {
                  title: "Centralização de Documentos",
                  desc: "Organize e acesse todos os seus documentos de forma segura",
                },
                {
                  title: "Automação Inteligente",
                  desc: "Reduza tarefas manuais e aumente a eficiência",
                },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                  className="space-y-3"
                >
                  <h3 className="font-bold text-primary text-lg font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Founder Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-border"
            >
              <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-3xl font-bold text-primary">
                    WG
                  </div>
                  <div className="text-left space-y-2">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">Conheça o Fundador</p>
                    <h3 className="text-2xl font-bold font-poppins text-foreground">Wanderson Gandra</h3>
                    <p className="text-muted-foreground font-medium">CEO, Fundador, Especialista em Compliance e Diretor Técnico</p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                      "Minha missão é democratizar a gestão de conformidade, permitindo que empresas de todos os tamanhos operem com segurança, eficiência e tranquilidade."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-primary text-4xl text-center mb-16 font-poppins" 
          >
            Como Funciona
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2" />

            {[
              { title: "Cadastro", desc: "Crie sua conta em segundos e acesse a plataforma", step: "01" },
              { title: "Configuração", desc: "Personalize os módulos para sua empresa", step: "02" },
              { title: "Treinamento", desc: "Sua equipe aprende a usar com nossos vídeos", step: "03" },
              { title: "Resultados", desc: "Acompanhe a melhoria nos indicadores", step: "04" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-background p-6 rounded-xl border border-border relative text-center group hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="font-bold text-xl mb-2 font-poppins">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Building2, value: 500, label: "Empresas Atendidas", suffix: "+" },
              { icon: Users, value: 15000, label: "Usuários Ativos", suffix: "+" },
              { icon: FileCheck, value: 1, label: "Milhão de Documentos", suffix: "M+" },
              { icon: TrendingUp, value: 98, label: "Satisfação", suffix: "%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="flex justify-center">
                  <stat.icon className="w-10 h-10 text-blue-300" />
                </div>
                <div className="text-4xl md:text-5xl font-bold">
                  <Counter from={0} to={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-blue-100 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-primary text-4xl mb-4 font-poppins">
              Por que escolher o Compliance X?
            </h2>
            <p className="text-muted-foreground text-lg">
              Veja a diferença entre a gestão tradicional e a nossa plataforma
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid grid-cols-3 bg-secondary p-6 font-bold text-primary">
              <div className="col-span-1">Critério</div>
              <div className="col-span-1 text-center flex items-center justify-center gap-2">
                <FileSpreadsheet className="w-5 h-5" /> Manual / Planilhas
              </div>
              <div className="col-span-1 text-center flex items-center justify-center gap-2 text-primary">
                <Logo className="w-6 h-6" /> Compliance X
              </div>
            </div>
            {[
              { label: "Tempo gasto por processo", bad: "Alto (Horas)", good: "Baixo (Minutos)" },
              { label: "Risco de Erros Humanos", bad: "Muito Alto", good: "Quase Zero" },
              { label: "Segurança dos Dados", bad: "Baixa (Arquivos locais)", good: "Alta (Criptografia)" },
              { label: "Relatórios em Tempo Real", bad: false, good: true },
              { label: "Alertas de Vencimento", bad: false, good: true },
              { label: "Backup Automático", bad: false, good: true },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-t border-border hover:bg-muted/30 transition-colors items-center">
                <div className="col-span-1 font-medium text-foreground">{row.label}</div>
                <div className="col-span-1 text-center text-muted-foreground flex justify-center">
                  {typeof row.bad === 'boolean' ? (
                    row.bad ? <Check className="w-6 h-6 text-green-500" /> : <X className="w-6 h-6 text-red-500" />
                  ) : (
                    <span className="text-red-500 font-medium">{row.bad}</span>
                  )}
                </div>
                <div className="col-span-1 text-center flex justify-center">
                  {typeof row.good === 'boolean' ? (
                    row.good ? <Check className="w-6 h-6 text-green-500" /> : <X className="w-6 h-6 text-red-500" />
                  ) : (
                    <span className="text-green-600 font-bold">{row.good}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-bold text-primary text-4xl mb-4 font-poppins">
                Calcule sua Economia
              </h2>
              <p className="text-muted-foreground text-lg">
                Descubra quanto sua empresa pode economizar mensalmente com a automação do Compliance X
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 bg-secondary rounded-2xl p-8 shadow-lg">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label className="text-lg font-medium">Número de Funcionários</Label>
                    <span className="font-bold text-primary">{employees[0]}</span>
                  </div>
                  <Slider
                    value={employees}
                    onValueChange={setEmployees}
                    max={1000}
                    step={10}
                    className="py-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Colaboradores envolvidos em processos administrativos
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label className="text-lg font-medium">Documentos por Mês</Label>
                    <span className="font-bold text-primary">{docsPerMonth[0]}</span>
                  </div>
                  <Slider
                    value={docsPerMonth}
                    onValueChange={setDocsPerMonth}
                    max={5000}
                    step={50}
                    className="py-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Volume médio de documentos processados mensalmente
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-8 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-8">
                <div className="text-center md:text-left space-y-2">
                  <p className="text-muted-foreground font-medium">Custo Atual Estimado</p>
                  <p className="text-3xl font-bold text-red-500">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(manualCost)}
                    <span className="text-sm text-muted-foreground font-normal"> /mês</span>
                  </p>
                </div>

                <div className="text-center md:text-left space-y-2">
                  <p className="text-muted-foreground font-medium">Custo com Compliance X</p>
                  <p className="text-3xl font-bold text-primary">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(automatedCost)}
                    <span className="text-sm text-muted-foreground font-normal"> /mês</span>
                  </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-xl">
                  <p className="text-green-700 dark:text-green-400 font-semibold mb-2">Sua Economia Mensal</p>
                  <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(savings)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="py-20 bg-secondary">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-primary text-4xl text-center mb-16 font-poppins" 
          >
            Funcionalidades Principais
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Gestão de Documentos",
                desc: "Armazene, organize e rastreie todos os documentos importantes",
              },
              {
                icon: AlertCircle,
                title: "Controle de Não Conformidades",
                desc: "Identifique e resolva desvios rapidamente",
              },
              {
                icon: Clock,
                title: "Controle de Prazos",
                desc: "Nunca perca um prazo importante com lembretes automáticos",
              },
              {
                icon: BarChart3,
                title: "Indicadores e Relatórios",
                desc: "Visualize métricas em tempo real e gere relatórios detalhados",
              },
              {
                icon: Zap,
                title: "Inteligência Artificial",
                desc: "Análise inteligente de riscos e recomendações automáticas",
              },
              {
                icon: Shield,
                title: "Segurança de Dados",
                desc: "Proteção máxima com criptografia e conformidade LGPD",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className="card-elevated p-8 space-y-4 border-0 bg-white hover:shadow-xl transition-smooth h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-primary font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Features Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/iYIcU936K0tD3lDqDdR71D/sandbox/Vp6sOx2gXjTRTF1je29jOA-img-2_1770639492000_na1fn_Y29tcGxpYW5jZS14LWZlYXR1cmVz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVlJY1U5MzZLMHREM2xEcURkUjcxRC9zYW5kYm94L1ZwNnNPeDJnWGpUUlRGMWplMjlqT0EtaW1nLTJfMTc3MDYzOTQ5MjAwMF9uYTFmbl9ZMjl0Y0d4cFlXNWpaUzE0TFdabFlYUjFjbVZ6LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=efvJdIlRBHtII~LFsMOi4LSZipfwXvY7nsCtM4jLZ9lAOKEITj-Ga7ZFwrTkiUWIDWK3JczpUtJ2lpUfcfAbsZ7kFbX2I60~x5~AGlZAaOW-AQ9b0fWBB-x6pH0OgmYHcAnN0lphMpdMLcRmwDeShBumYyslg-oly6vpS1iUfgJ6SF~aRrTrcwDR-AF7o6rq0T0YZCh3oxAg~kaZ2Z918LEZCNDTzrO3tgvlpcN5zuLODO4ES0RMyi5OvynJpFUTlnKENg7UcPzVp2z8jnSDOc~qKFDPtZXY9x8SSCwFcmYlct7uBFLQMXBdBFsPXthj-w4LVW7LHRlcm5c4YSu9DA__"
              alt="Features"
              className="w-full max-w-md h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Para Quem Section */}
      <section id="publico" className="py-20 bg-background">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-primary text-4xl text-center mb-16 font-poppins" 
          >
            Para Quem é Compliance X?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Empresas Industriais",
              "Empresas de Serviços",
              "Construtoras",
              "Empresas com Controle Interno Rigoroso",
              "Negócios que Precisam de Rastreabilidade",
              "Organizações Reguladas",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-lg bg-secondary hover:bg-muted transition-smooth"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-semibold text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Security Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/iYIcU936K0tD3lDqDdR71D/sandbox/Vp6sOx2gXjTRTF1je29jOA-img-3_1770639492000_na1fn_Y29tcGxpYW5jZS14LXNlY3VyaXR5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVlJY1U5MzZLMHREM2xEcURkUjcxRC9zYW5kYm94L1ZwNnNPeDJnWGpUUlRGMWplMjlqT0EtaW1nLTNfMTc3MDYzOTQ5MjAwMF9uYTFmbl9ZMjl0Y0d4cFlXNWpaUzE0TFhObFkzVnlhWFI1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eQXPyxlcvbwziPnu4Y6Yq1GqgpyWLmdTD4Q~ez4aOUg16nCIIPKqrCadZBGgggeLK~Q6mHbtFAZ57ZXusuHDzmvGQyxMzStbcxq~sYgc0lMv4-VtA09Zen5ZckQVRmsOBiIGqZb5NvEZKU26o0gwxUxO2MhGqjZd79gihZLhyx4Uibj5sh2r2ctTIokha0ZxxjwZcxTOPz-MYLAgzSHfK-rtJ7jF-J5P5UJfGJ4d77RTKlGImEPqqY3Jh1~Brs2Gg1PGGZ0kgEPWDg59iu0sv492gcdYLwjtR9CdoAi8x80X2X65MtDxe6RTbrcg2Lf~egNDcY2l6Vs-cw1-D~mRBg__"
              alt="Security"
              className="w-full max-w-md h-auto"
            />
          </motion.div>

          {/* Security Badges */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <Lock className="w-6 h-6" />
                <span className="font-semibold">Criptografia SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-6 h-6" />
                <span className="font-semibold">Cloud Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6" />
                <span className="font-semibold">LGPD Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-6 h-6" />
                <span className="font-semibold">Backup Diário</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 bg-secondary">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-primary text-4xl text-center mb-4 font-poppins" 
          >
            Modelos de Negócio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Escolha o plano que melhor se adequa às necessidades da sua empresa
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Plano Mensal",
                price: "Flexível",
                desc: "Ideal para empresas que querem testar a plataforma",
                features: [
                  "Acesso completo a todas as funcionalidades",
                  "Suporte via email",
                  "Atualizações automáticas",
                  "Cancelamento a qualquer momento",
                ],
              },
              {
                name: "Plano Anual",
                price: "Econômico",
                desc: "Melhor custo-benefício para empresas estabelecidas",
                features: [
                  "Tudo do plano mensal",
                  "Desconto de 20% no valor anual",
                  "Suporte prioritário",
                  "Treinamento personalizado",
                ],
                highlighted: true,
              },
              {
                name: "Plano Empresarial",
                price: "Personalizado",
                desc: "Solução customizada para grandes organizações",
                features: [
                  "Tudo do plano anual",
                  "Integração com sistemas legados",
                  "Suporte 24/7 dedicado",
                  "SLA garantido",
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card
                  className={`card-elevated p-8 space-y-6 border-0 transition-smooth h-full flex flex-col justify-between ${
                    plan.highlighted
                      ? "bg-primary text-white shadow-xl scale-105"
                      : "bg-white"
                  }`}
                >
                  <div className="space-y-6">
                    <div>
                      <h3
                        className={`font-bold text-2xl font-poppins ${
                          plan.highlighted ? "text-white" : "text-primary"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-sm mt-2 ${
                          plan.highlighted ? "text-blue-100" : "text-muted-foreground"
                        }`}
                      >
                        {plan.desc}
                      </p>
                    </div>

                    <div>
                      <p
                        className={`text-3xl font-bold ${
                          plan.highlighted ? "text-white" : "text-primary"
                        }`}
                      >
                        {plan.price}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li
                          key={j}
                          className={`flex items-start gap-3 ${
                            plan.highlighted
                              ? "text-blue-50"
                              : "text-muted-foreground"
                          }`}
                        >
                          <CheckCircle2
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              plan.highlighted ? "text-white" : "text-accent"
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={
                      plan.highlighted
                        ? "w-full bg-white text-primary hover:bg-gray-100 mt-6"
                        : "w-full bg-primary text-white hover:bg-primary/90 mt-6"
                    }
                    onClick={() => handlePricingClick(plan.name)}
                  >
                    Começar Agora
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Analytics Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex justify-center"
          >
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/iYIcU936K0tD3lDqDdR71D/sandbox/Vp6sOx2gXjTRTF1je29jOA-img-4_1770639492000_na1fn_Y29tcGxpYW5jZS14LWFuYWx5dGljcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVlJY1U5MzZLMHREM2xEcURkUjcxRC9zYW5kYm94L1ZwNnNPeDJnWGpUUlRGMWplMjlqT0EtaW1nLTRfMTc3MDYzOTQ5MjAwMF9uYTFmbl9ZMjl0Y0d4cFlXNWpaUzE0TFdGdVlXeDVkR2xqY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rjH4861MBhMUTG-XNTraACpEWyChyacflaDwsOoetMZkWYbS9DD~BDt2ZYSft8cCxg1ruprLFlFBlaXNzyoqOvzLAb6tEA7BDfJvuBPKcu70HlCRsaZTh78N4JJg7Ye9kI89eAZy8n7KtN-ExL7RcTu2l9gG1oGq2taTO2tlhppUvIOJ0W7xpIeyg0rJPa3yrBgFc7J5VHui9yKK8urzAjY5TmkV68t-MRMqDRp-DaPi2~xjU47OC0-CxTSoob5bpBcZjWFvuWMkY5BsOJGHCICBivw~x-OD9T1h89ZgrEIqGSVTw-kpYJid0-~tY1FSIy~rOPo931W0hFvfmjvQ3g__"
              alt="Analytics"
              className="w-full max-w-md h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-background">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-primary text-4xl text-center mb-16 font-poppins" 
          >
            O Que Nossos Clientes Dizem
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendes",
                role: "Diretor de Operações",
                company: "Construtora Elite",
                text: "O Compliance X revolucionou a forma como gerenciamos nossos processos. A redução de riscos foi imediata e a equipe se adaptou super rápido.",
                avatar: "CM"
              },
              {
                name: "Fernanda Souza",
                role: "Gerente de Qualidade",
                company: "Indústrias Tech",
                text: "A facilidade de centralizar todos os documentos e ter alertas automáticos de vencimento nos economizou horas de trabalho manual. Recomendo muito!",
                avatar: "FS"
              },
              {
                name: "Roberto Almeida",
                role: "CEO",
                company: "Logística Veloz",
                text: "O suporte é excelente e a plataforma é muito intuitiva. Conseguimos a certificação ISO muito mais rápido graças à organização que o Compliance X proporcionou.",
                avatar: "RA"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card className="p-8 space-y-4 border-0 shadow-lg bg-secondary h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-primary text-4xl text-center mb-16 font-poppins" 
          >
            Perguntas Frequentes
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Existe fidelidade nos planos?",
                  answer: "Não, nossos planos mensais não possuem fidelidade. Você pode cancelar a qualquer momento sem multas. Apenas o plano anual possui compromisso de 12 meses com desconto especial."
                },
                {
                  question: "Como funciona o suporte?",
                  answer: "Oferecemos suporte via e-mail para todos os planos, com tempo de resposta de até 24h úteis. Planos empresariais contam com suporte prioritário e atendimento via telefone/WhatsApp."
                },
                {
                  question: "É possível migrar de plano depois?",
                  answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento diretamente pelo painel administrativo. A cobrança será ajustada proporcionalmente."
                },
                {
                  question: "Meus dados estão seguros?",
                  answer: "Absolutamente. Utilizamos criptografia de ponta a ponta, servidores seguros e backups diários automáticos. Estamos totalmente em conformidade com a LGPD."
                },
                {
                  question: "Vocês oferecem treinamento?",
                  answer: "Sim, todos os planos incluem acesso à nossa base de conhecimento com tutoriais em vídeo. Planos anuais e empresariais incluem sessões de treinamento ao vivo com nossa equipe."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <AccordionItem value={`item-${i}`}>
                    <AccordionTrigger className="text-lg font-medium text-foreground">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold text-4xl font-poppins">
              Pronto para Transformar sua Conformidade?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mt-4">
              Junte-se a centenas de empresas que já confiam no Compliance X para gerenciar sua conformidade de forma inteligente e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                asChild
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
                onClick={() => handleCTAClick('footer-demonstracao')}
              >
                <a href="#contato">Solicitar Demonstração</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => handleCTAClick('footer-especialista')}
              >
                <a href="#contato">Falar com Especialista</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="font-bold text-primary text-4xl font-poppins">
                Entre em Contato
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estamos prontos para ajudar sua empresa a alcançar o próximo nível de conformidade. Fale com um de nossos especialistas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">contatocompliancex@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(31) 98693-7268</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">Rua Alberto Cintra, 35, Sala 601 - Belo Horizonte, MG</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 shadow-lg border-0 bg-secondary">
                <form 
                  className="space-y-6" 
                  action="https://api.web3forms.com/submit" 
                  method="POST"
                >
                  <input type="hidden" name="access_key" value="f35f0e95-4e47-4dc7-9abf-3054ecea096f" />
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" name="name" placeholder="Seu nome" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Corporativo</Label>
                    <Input id="email" name="email" type="email" placeholder="nome@empresa.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" name="message" placeholder="Como podemos ajudar?" className="min-h-[120px]" required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12">
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-2xl mx-auto space-y-8"
            >
              <h2 className="font-bold text-3xl md:text-4xl font-poppins">
                Fique por dentro das novidades
              </h2>
              <p className="text-blue-100 text-lg">
                Receba dicas exclusivas de compliance, gestão de riscos e atualizações da plataforma diretamente no seu e-mail.
              </p>
              
              <form 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                action="https://api.web3forms.com/submit" 
                method="POST"
              >
                <input type="hidden" name="access_key" value="f35f0e95-4e47-4dc7-9abf-3054ecea096f" />
                <input type="hidden" name="subject" value="Novo inscrito na Newsletter" />
                
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Seu melhor e-mail" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-white text-primary hover:bg-gray-100 font-semibold h-12 px-8"
                >
                  Inscrever-se
                </Button>
              </form>
              
              <p className="text-xs text-blue-200">
                Não enviamos spam. Você pode cancelar a inscrição a qualquer momento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo className="w-8 h-8" light />
                <span className="font-bold text-white font-poppins">
                  Compliance X
                </span>
              </div>
              <p className="text-sm">
                Sistema inteligente de gestão e conformidade
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#funcionalidades" className="hover:text-white transition-smooth">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-white transition-smooth">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#publico" className="hover:text-white transition-smooth">
                    Segurança
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#sobre" className="hover:text-white transition-smooth">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-smooth">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-smooth">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-smooth">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-smooth">
                    Termos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-smooth">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2026 Compliance X. Todos os direitos reservados.
            </p>
            <p className="mt-2 text-gray-500">
              Desenvolvido por <span className="text-gray-400 font-medium">Wanderson Gandra</span>
            </p>
          </div>
        </div>
      </footer>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5531986937268"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:bg-green-600"
        aria-label="Falar no WhatsApp"
        onClick={() => handleCTAClick('whatsapp-float')}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8 text-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <ScrollToTop />
    </div>
  );
}
