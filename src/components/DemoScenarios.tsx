import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2, AlertTriangle, Zap, Clock, Bot } from "lucide-react";
import { Button } from "./ui/button";
import fixtures from "@/lib/demo-fixtures.json";

const agentColors: Record<string, string> = {
  scout: "bg-primary/10 text-primary",
  coordinator: "bg-accent/10 text-accent",
  logistics: "bg-primary/15 text-primary",
  supervisor: "bg-destructive/10 text-destructive",
};

const agentLabels: Record<string, string> = {
  scout: "🔍 Scout",
  coordinator: "🤝 Coordinator",
  logistics: "🚚 Logistics",
  supervisor: "👤 Supervisor",
};

const scenarioIcons = [Play, AlertTriangle, Zap];

const DemoScenarios = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [visibleSteps, setVisibleSteps] = useState(0);

  const runScenario = (idx: number) => {
    setActiveIdx(idx);
    setVisibleSteps(0);
    const steps = fixtures.demoScenarios[idx].steps.length;
    for (let i = 0; i < steps; i++) {
      setTimeout(() => setVisibleSteps(i + 1), (i + 1) * 800);
    }
  };

  const active = activeIdx !== null ? fixtures.demoScenarios[activeIdx] : null;

  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Play className="h-4 w-4" />
          Interactive Demo
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          See it in action
        </h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
          Pick a scenario and watch the agents coordinate a food rescue in real time.
        </p>
      </div>

      {/* Scenario buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {fixtures.demoScenarios.map((s, i) => {
          const Icon = scenarioIcons[i];
          return (
            <Button
              key={s.id}
              variant={activeIdx === i ? "default" : "outline"}
              className="rounded-full px-6"
              onClick={() => runScenario(i)}
            >
              <Icon className="h-4 w-4 mr-2" />
              {s.title.split("—")[0].trim()}
            </Button>
          );
        })}
      </div>

      {/* Timeline */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.id}
            className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-6 md:p-8 shadow-[var(--shadow-card)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <h3 className="font-bold text-foreground mb-1">{active.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">{active.description}</p>

            <div className="space-y-4">
              {active.steps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`flex gap-3 ${i < visibleSteps ? "opacity-100" : "opacity-0"}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={i < visibleSteps ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs ${agentColors[step.agent]}`}>
                      <Bot className="h-4 w-4" />
                    </div>
                    {i < active.steps.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-1" />
                    )}
                  </div>

                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-foreground">
                        {agentLabels[step.agent]}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {new Date(step.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                      <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                        step.confidence >= 0.9 ? "bg-primary/10 text-primary" :
                        step.confidence >= 0.7 ? "bg-accent/10 text-accent" :
                        "bg-destructive/10 text-destructive"
                      }`}>
                        {Math.round(step.confidence * 100)}% confidence
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact summary */}
            {visibleSteps >= active.steps.length && (
              <motion.div
                className="mt-6 pt-5 border-t border-border flex flex-wrap gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { label: "Meals rescued", value: active.impact.mealsRescued },
                  { label: "People fed", value: active.impact.peopleFed },
                  { label: "CO₂ avoided", value: `${active.impact.co2AvoidedKg} kg` },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="font-bold text-foreground text-sm">{m.value}</span>
                    <span className="text-xs text-muted-foreground">{m.label}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DemoScenarios;
