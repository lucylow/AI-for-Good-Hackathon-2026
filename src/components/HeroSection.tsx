import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import OnboardingCarousel from "./OnboardingCarousel";
import EthicsModal from "./EthicsModal";
import mascotsHero from "@/assets/mascots-hero.png";

const HeroSection = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showEthics, setShowEthics] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsl(var(--success) / 0.1) 0%, transparent 50%)",
        }} />

        <div className="container mx-auto flex items-center gap-12 py-16 pb-20 flex-wrap">
          {/* Left — Mission Copy */}
          <motion.div
            className="flex-1 min-w-[340px]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm text-foreground font-semibold px-4 py-2 rounded-full text-sm border border-border shadow-sm mb-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Heart className="h-4 w-4 text-primary fill-primary/30" />
              AI for Good
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] mb-6 text-foreground tracking-tight">
              AI Agents for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Zero Hunger</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-accent/30 rounded-full -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-[520px] mb-4 leading-relaxed">
              We connect surplus food to people and community groups — safely, fairly, and fast. Powered by autonomous AI agents with built-in ethics guardrails.
            </p>

            <motion.button
              onClick={() => setShowEthics(true)}
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors mb-8 font-medium"
              whileHover={{ x: 4 }}
            >
              <Shield className="h-3.5 w-3.5" />
              Built with ethics guardrails & human oversight
              <ArrowRight className="h-3 w-3" />
            </motion.button>

            <div className="flex gap-3 flex-wrap">
              <Button size="lg" className="rounded-full px-8 shadow-lg" asChild>
                <Link to="/dashboard">
                  Try live demo <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                onClick={() => setShowOnboarding(true)}
              >
                Learn how it works
              </Button>
            </div>

            <div className="flex gap-10 mt-12">
              {[
                { value: "1,247", label: "meals rescued" },
                { value: "3.2t", label: "CO₂ avoided" },
                { value: "98%", label: "safely delivered" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Mascots & Chat Preview */}
          <motion.div
            className="flex-1 min-w-[300px] flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Mascots with floating animation */}
            <motion.div
              className="relative mb-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={mascotsHero}
                alt="Scout, Coordinator, and Logistics — the three NourishNet AI agents"
                className="w-64 md:w-80 drop-shadow-xl"
              />
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-4 rounded-full bg-foreground/5 blur-md"
                animate={{ scaleX: [1, 0.9, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Chat Preview Card */}
            <div className="w-full max-w-sm bg-card rounded-3xl p-5 shadow-lg border border-border">
              <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm">NourishNet Bot</span>
                <span className="ml-auto text-xs text-success font-medium flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
                  Live
                </span>
              </div>
              <div className="space-y-3 mb-3">
                <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 max-w-[88%] text-sm text-secondary-foreground">
                  Hi! I'm your food rescue assistant 🍱 Send "hungry" to find meals nearby.
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%] ml-auto text-sm">
                  I'm hungry
                </div>
                <motion.div
                  className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 max-w-[88%] text-sm text-secondary-foreground"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  🍱 There's a bakery 5 min away with 3 unsold sandwiches. Code <strong>NOURISH5</strong> — expires in 30 min.
                  <span className="block text-xs text-muted-foreground mt-1">This meal could feed ~2 people.</span>
                </motion.div>
              </div>
              <p className="text-xs text-muted-foreground text-center">Live simulation · real agents · human oversight</p>
            </div>
          </motion.div>
        </div>
      </section>

      {showOnboarding && <OnboardingCarousel onClose={() => setShowOnboarding(false)} />}
      {showEthics && <EthicsModal onClose={() => setShowEthics(false)} />}
    </>
  );
};

export default HeroSection;