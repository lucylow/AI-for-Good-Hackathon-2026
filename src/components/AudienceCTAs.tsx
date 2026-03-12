import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Store, Heart, HandHelping, Code, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

const audiences = [
  {
    icon: Store,
    title: "Donors & Businesses",
    desc: "Start rescuing surplus — create a free listing in minutes.",
    cta: "Get started",
    link: "/dashboard",
  },
  {
    icon: Heart,
    title: "NGOs & Food Banks",
    desc: "Get matched to nearby surplus automatically and fairly.",
    cta: "Join the network",
    link: "/dashboard",
  },
  {
    icon: HandHelping,
    title: "Volunteers",
    desc: "Help pick up meals near you — sign up and get notified.",
    cta: "Sign up to volunteer",
    link: "/dashboard",
  },
  {
    icon: Code,
    title: "Developers",
    desc: "Integrate via API, contribute on GitHub, or build on top.",
    cta: "View on GitHub",
    link: "#",
  },
  {
    icon: Briefcase,
    title: "Partners & Investors",
    desc: "Schedule a live demo and see our impact deck.",
    cta: "Request a demo",
    link: "#",
  },
];

const AudienceCTAs = () => (
  <section className="container mx-auto py-16">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        Get involved
      </h2>
      <p className="text-lg text-muted-foreground max-w-[500px] mx-auto">
        Whether you donate, receive, volunteer, or build — there's a place for you.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {audiences.map((a, i) => (
        <motion.div
          key={a.title}
          className="bg-card border border-border rounded-2xl p-5 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glass)] transition-shadow flex flex-col"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
        >
          <div className="h-10 w-10 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
            <a.icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-bold text-foreground text-sm mb-1">{a.title}</h3>
          <p className="text-xs text-muted-foreground mb-4 flex-1">{a.desc}</p>
          <Button size="sm" variant="outline" className="rounded-full w-full" asChild>
            <Link to={a.link}>{a.cta}</Link>
          </Button>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AudienceCTAs;
