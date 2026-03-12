import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileCheck, Users, AlertTriangle } from "lucide-react";

const trustItems = [
  {
    icon: Users,
    title: "Human-in-the-loop",
    desc: "All low-confidence matches route to a human reviewer before action is taken.",
  },
  {
    icon: Lock,
    title: "Privacy-first",
    desc: "We store minimal personally identifiable data. Phone number and opt-in preferences only.",
  },
  {
    icon: FileCheck,
    title: "Transparent decisions",
    desc: "Full audit logs for every match — see exactly what each agent did and why.",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    desc: "Every decision includes a confidence score and a plain-language 'Why' explanation.",
  },
  {
    icon: Shield,
    title: "Safety guardrails",
    desc: "Allergen checks, location verification, and time-sensitive safety protocols built in.",
  },
  {
    icon: AlertTriangle,
    title: "Escalation paths",
    desc: "Unclear or risky listings automatically escalate — never matched without review.",
  },
];

const TrustSafetySection = () => (
  <section className="container mx-auto py-16">
    <div className="text-center mb-12">
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Shield className="h-4 w-4" />
        Designed for people — built with guardrails
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        Trust & Safety
      </h2>
      <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
        Every decision is auditable, every match is explainable, and humans are always in the loop for edge cases.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {trustItems.map((item, i) => (
        <motion.div
          key={item.title}
          className="bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glass)] transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <div className="mt-8 text-center">
      <p className="text-sm text-muted-foreground">
        Read our full{" "}
        <a href="#" className="text-primary underline underline-offset-2 hover:text-primary/80">
          ethics framework
        </a>{" "}
        and{" "}
        <a href="#" className="text-primary underline underline-offset-2 hover:text-primary/80">
          view the source on GitHub
        </a>
        .
      </p>
    </div>
  </section>
);

export default TrustSafetySection;
