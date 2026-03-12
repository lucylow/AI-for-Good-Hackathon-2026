import { motion } from "framer-motion";
import { Quote, Clock, Utensils, Leaf } from "lucide-react";

const testimonials = [
  {
    quote: "NourishNet turned our nightly surplus into reliable meals for the community. The audit trail means we trust the system completely.",
    name: "Sarah Chen",
    role: "Operations Manager",
    org: "FoodShare UK",
  },
  {
    quote: "In 12 minutes we had a volunteer at the door. We used to throw away what we couldn't sell — now it feeds people.",
    name: "James Okonkwo",
    role: "Owner",
    org: "Sunrise Bakery",
  },
];

const partners = ["FoodShare UK", "City Harvest", "WRAP", "FareShare", "Trussell Trust", "OLIO"];

const SocialProofSection = () => (
  <section className="container mx-auto py-16">
    {/* Mini case study */}
    <motion.div
      className="bg-card border border-border rounded-3xl p-8 md:p-10 mb-12 shadow-[var(--shadow-card)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
        <Utensils className="h-4 w-4" />
        Case Study
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        Sunrise Bakery: 3 sandwiches rescued in 12 minutes
      </h3>
      <p className="text-muted-foreground max-w-[700px] mb-6 leading-relaxed">
        At 18:20, Scout detected 3 unsold ham & cheese sandwiches at Sunrise Bakery. Coordinator matched them to FoodShare NGO (0.4 km away, confidence 92%). Logistics sent pickup code <strong className="text-foreground">NOURISH5</strong> to volunteer Maya K. — confirmed pickup by 18:32.
      </p>
      <div className="flex flex-wrap gap-6">
        {[
          { icon: Utensils, value: "3 meals", label: "rescued" },
          { icon: Clock, value: "12 min", label: "total time" },
          { icon: Leaf, value: "1.8 kg", label: "CO₂ avoided" },
        ].map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <m.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="font-bold text-foreground text-sm">{m.value}</div>
              <div className="text-xs text-muted-foreground">{m.label}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Testimonials */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          className="bg-secondary rounded-2xl p-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <Quote className="h-5 w-5 text-primary/40 mb-3" />
          <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
          <div className="text-sm">
            <span className="font-semibold text-foreground">{t.name}</span>
            <span className="text-muted-foreground"> · {t.role}, {t.org}</span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Partner logos */}
    <div className="text-center">
      <p className="text-sm text-muted-foreground mb-4">Trusted by organizations across the UK</p>
      <div className="flex flex-wrap justify-center gap-4">
        {partners.map((p) => (
          <span
            key={p}
            className="bg-card border border-border rounded-full px-5 py-2 text-sm font-medium text-muted-foreground"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
