import { Bot, Cpu, MessageCircle, Send, Globe, Shield } from "lucide-react";

const techs = [
  { icon: Bot, label: "AI Agents", sub: "agent orchestration" },
  { icon: Cpu, label: "AI Models", sub: "open-source LLMs" },
  { icon: MessageCircle, label: "WhatsApp", sub: "" },
  { icon: Send, label: "Telegram", sub: "" },
  { icon: Shield, label: "Ethics", sub: "human oversight" },
  { icon: Globe, label: "UN SDG 2, 12, 3", sub: "" },
];

const TechShowcase = () => (
  <section className="container mx-auto">
    <div className="rounded-4xl p-8 flex flex-wrap justify-center items-center gap-10" style={{ background: "var(--gradient-hero)" }}>
      {techs.map((t) => (
        <div key={t.label} className="flex flex-col items-center gap-1 text-center">
          <div className="h-12 w-12 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
            <t.icon className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-foreground text-sm mt-1">{t.label}</span>
          {t.sub && <span className="text-xs text-muted-foreground">{t.sub}</span>}
        </div>
      ))}
    </div>
  </section>
);

export default TechShowcase;