import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Search, GitBranch, Truck } from "lucide-react";
import { Button } from "./ui/button";
import mascotScout from "@/assets/mascot-scout.png";
import mascotCoordinator from "@/assets/mascot-coordinator.png";
import mascotLogistics from "@/assets/mascot-logistics.png";

const cards = [
  {
    step: "1",
    title: "Detect",
    agent: "Scout Agent",
    icon: Search,
    mascot: mascotScout,
    color: "var(--scout)",
    bg: "hsl(var(--scout) / 0.08)",
    description: "Scout finds surplus food at local businesses before it goes to waste — using AI vision and natural language processing.",
    why: "🌍 SDG 2 — Zero Hunger: Every detected meal is a step toward ending food insecurity.",
  },
  {
    step: "2",
    title: "Match",
    agent: "Coordinator Agent",
    icon: GitBranch,
    mascot: mascotCoordinator,
    color: "var(--coordinator)",
    bg: "hsl(var(--coordinator) / 0.1)",
    description: "Coordinator matches surplus with nearby NGOs or individuals, considering urgency, proximity, and dietary needs.",
    why: "🏥 SDG 3 — Good Health: Intelligent matching ensures food reaches those who need it most, safely.",
  },
  {
    step: "3",
    title: "Notify",
    agent: "Logistics Agent",
    icon: Truck,
    mascot: mascotLogistics,
    color: "var(--logistics)",
    bg: "hsl(var(--logistics) / 0.08)",
    description: "Logistics sends pickup codes and directions via messaging — closing the loop and tracking every rescued meal.",
    why: "♻️ SDG 12 — Responsible Consumption: Every completed pickup reduces waste and carbon emissions.",
  },
];

interface Props {
  onClose: () => void;
}

const OnboardingCarousel = ({ onClose }: Props) => {
  const [current, setCurrent] = useState(0);
  const card = cards[current];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <motion.div
          className="relative bg-card rounded-4xl shadow-2xl w-full max-w-lg overflow-hidden border border-border"
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-5 pb-2">
            <h2 className="font-bold text-lg text-foreground">How NourishNet Works</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Skip
              </button>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Card Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="px-6 py-6"
            >
              <div className="flex flex-col items-center text-center">
                {/* Mascot */}
                <motion.div
                  className="rounded-3xl p-6 mb-5 w-full"
                  style={{ background: card.bg }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src={card.mascot}
                    alt={card.agent}
                    className="h-32 mx-auto drop-shadow-md"
                  />
                </motion.div>

                {/* Step badge */}
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{
                    background: card.bg,
                    color: `hsl(${card.color === "var(--scout)" ? "var(--scout)" : card.color === "var(--coordinator)" ? "var(--coordinator)" : "var(--logistics)"})`,
                  }}
                >
                  <card.icon className="h-3.5 w-3.5" />
                  Step {card.step} — {card.title}
                </span>

                <h3 className="text-xl font-bold text-foreground mb-2">{card.agent}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.description}</p>

                {/* Why this matters */}
                <div className="bg-secondary rounded-2xl px-4 py-3 text-sm text-secondary-foreground w-full">
                  <span className="font-semibold text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                    Why this matters
                  </span>
                  {card.why}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between px-6 pb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Back
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            {current < cards.length - 1 ? (
              <Button
                size="sm"
                onClick={() => setCurrent(current + 1)}
                className="rounded-full"
              >
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            ) : (
              <Button size="sm" onClick={onClose} className="rounded-full">
                Get Started
              </Button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OnboardingCarousel;