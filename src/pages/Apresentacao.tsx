import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Shield, Clock, ArrowRight, Zap, Building2, Users } from "lucide-react";
import { Link } from "wouter";

export default function Apresentacao() {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-lg text-primary font-poppins">Compliance X</span>
            </div>
          </Link>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/#contato">Falar com Consultor</Link>
          </Button>
        </div>
      </header>

      {/* Slide 1: O Desafio */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-primary text-white min-h-[80vh] flex items-center">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-4">
              Apresentação Comercial
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
              Você sabe quanto dinheiro sua empresa perde hoje com <span className="text-blue-400">processos manuais</span>?
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Planilhas descentralizadas, falta de visibilidade e riscos de conformidade estão freando o seu crescimento. É hora de mudar isso.
            </p>
            <div className="pt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg h-14 px-8">
                <a href="#solucao">Conhecer a Solução <ArrowRight className="ml-2 w-5 h-5" /></a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 2: A Solução */}
      <section id="solucao" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary font-poppins mb-6">
                A Solução: Compliance X
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Não somos apenas um software. Somos uma plataforma modular que centraliza e automatiza toda a governança da sua empresa em um único lugar.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Centralização", desc: "Todos os documentos e processos seguros em nuvem." },
                  { title: "Automação", desc: "Robôs que monitoram prazos e notificam responsáveis." },
                  { title: "Inteligência", desc: "Dashboards em tempo real para tomada de decisão." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-secondary rounded-lg border border-border">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-2xl border border-border shadow-xl"
            >
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/iYIcU936K0tD3lDqDdR71D/sandbox/Vp6sOx2gXjTRTF1je29jOA-img-2_1770639492000_na1fn_Y29tcGxpYW5jZS14LWZlYXR1cmVz.png?x-oss-process=image/resize,w_800/format,webp"
                alt="Dashboard Compliance X"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slide 3: Funcionalidades */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary font-poppins mb-4">Principais Funcionalidades</h2>
            <p className="text-muted-foreground">Ferramentas poderosas para garantir a excelência operacional</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Gestão Eletrônica (GED)", desc: "Fim do papel e das pastas perdidas." },
              { icon: Shield, title: "Controle de Riscos", desc: "Identifique e trate não conformidades." },
              { icon: Clock, title: "Monitoramento de Prazos", desc: "Alertas automáticos por e-mail." },
              { icon: Zap, title: "Adequação LGPD", desc: "Dados protegidos com criptografia." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full border-0 shadow-md hover:shadow-lg transition-all">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 4: ROI */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8">Por que investir no Compliance X?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold text-blue-300 mb-2">80%</div>
                  <p className="text-sm font-medium">Redução de Custos Operacionais</p>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold text-blue-300 mb-2">100%</div>
                  <p className="text-sm font-medium">Segurança Jurídica e Compliance</p>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold text-blue-300 mb-2">24/7</div>
                  <p className="text-sm font-medium">Acessibilidade Total em Nuvem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Prova Social */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-primary mb-12">Quem já confia na gente</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold flex items-center gap-2"><Building2 /> Acme Corp</div>
            <div className="text-2xl font-bold flex items-center gap-2"><Users /> Global Tech</div>
            <div className="text-2xl font-bold flex items-center gap-2"><Shield /> Nexus Ind</div>
            <div className="text-2xl font-bold flex items-center gap-2"><TrendingUp /> Horizon</div>
          </div>
        </div>
      </section>

      {/* Slide 6: CTA Final */}
      <section className="py-24 bg-background">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-primary font-poppins mb-6">
            Não espere a próxima auditoria.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vamos agendar uma demonstração prática de 15 minutos? Quero te mostrar como o Compliance X se adapta ao seu cenário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
              <Link href="/#contato">Agendar Demonstração Agora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg">
              <Link href="/">Voltar ao Site</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
