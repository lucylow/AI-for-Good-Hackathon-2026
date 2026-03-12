import { motion } from "framer-motion";
import { Check, Heart } from "lucide-react";

const checks = [
  "Agent orchestration",
  "AI-powered inference",
  "Only open-source models",
  "WhatsApp / Telegram",
  "SDG 2, 3, 12",
];

const BountySection = () => (
  <section className="container mx-auto my-16 text-center">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
      <Heart className="h-4 w-4 fill-primary/30" />
      Built for Impact
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Technology that serves humanity</h2>
    <p className="text-lg text-muted-foreground max-w-[700px] mx-auto mb-8">
      NourishNet combines autonomous AI agents, ethical guardrails, and multi-channel delivery to rescue food at scale.
    </p>
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {checks.map((c, i) => (
        <motion.span
          key={c}
          className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-4 py-2 rounded-full font-medium text-sm shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <Check className="h-4 w-4 text-success" /> {c}
        </motion.span>
      ))}
    </div>
    <div className="rounded-3xl px-8 py-5 inline-block" style={{ background: "var(--gradient-hero)" }}>
      <p className="text-foreground font-semibold">
        Together we're rescuing meals and reducing waste 💚
      </p>
    </div>
  </section>
);

export default BountySection;