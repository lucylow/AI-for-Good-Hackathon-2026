import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Heart, Eye, Lock, Scale, UserCheck, ChevronDown, ChevronUp } from "lucide-react";

const guardrails = [
  {
    icon: Heart,
    title: "Beneficence",
    short: "Do good — maximize positive impact",
    detail: "Every agent decision is optimized to help the most people. We prioritize urgency, proximity, and nutritional need.",
  },
  {
    icon: Shield,
    title: "Non-maleficence",
    short: "Do no harm — safety-first matching",
    detail: "Allergen checks, expiry validation, and food safety scoring are mandatory before any match is confirmed.",
  },
  {
    icon: Scale,
    title: "Fairness",
    short: "Equitable access for all communities",
    detail: "Our matching algorithm prevents bias by rotating priority and ensuring underserved areas aren't overlooked.",
  },
  {
    icon: Lock,
    title: "Privacy",
    short: "We anonymize personal data",
    detail: "Phone numbers and locations are hashed. Only essential data is shared with matched parties, and deleted after 30 days.",
  },
  {
    icon: Eye,
    title: "Transparency",
    short: "Every decision is explainable",
    detail: "Each agent logs its reasoning. Users can view the Agent Timeline to understand why a match was made.",
  },
  {
    icon: UserCheck,
    title: "Accountability",
    short: "High-risk matches escalate to a human supervisor",
    detail: "Low-confidence decisions (< 70% score) are flagged for human review. All actions are auditable.",
  },
];

interface Props {
  onClose: () => void;
}

const EthicsModal = ({ onClose }: Props) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />

        <motion.div
          className="relative bg-card rounded-4xl shadow-2xl w-full max-w-xl max-h-[85vh] overflow-hidden border border-border flex flex-col"
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl flex items-center justify-center" style={{ background: "var(--gradient-mission)" }}>
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground">Ethics & Safety</h2>
                <p className="text-xs text-muted-foreground">How we keep food rescue safe and fair</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1 px-6 py-5">
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              NourishNet follows six core ethical principles. Every AI agent decision
              passes through these guardrails before action is taken.
            </p>

            <div className="space-y-3">
              {guardrails.map((g, i) => (
                <motion.div
                  key={g.title}
                  className="rounded-2xl border border-border overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="flex items-center gap-3 w-full px-4 py-3.5 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <g.icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-sm text-foreground block">{g.title}</span>
                      <span className="text-xs text-muted-foreground">{g.short}</span>
                    </div>
                    {expanded === i ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-0 pl-16">
                          <p className="text-sm text-muted-foreground leading-relaxed">{g.detail}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border bg-secondary/30 shrink-0">
            <p className="text-xs text-muted-foreground text-center">
              Together we're rescuing meals and reducing waste — with accountability at every step.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EthicsModal;