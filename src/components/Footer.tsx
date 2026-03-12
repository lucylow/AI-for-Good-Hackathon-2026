import { Leaf, Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground rounded-t-4xl mt-16 py-10">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between gap-8 mb-8">
        {/* Brand */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="h-5 w-5 text-accent" />
            <span className="font-bold font-display text-lg">NourishNet</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            AI Agents for Zero Hunger. We connect surplus food to people and community groups — fast, fair, and auditable.
          </p>
          <p className="text-xs opacity-50 mt-3">
            We keep only the data we need.{" "}
            <a href="#" className="underline underline-offset-2 hover:opacity-80">Read our Privacy Policy</a>.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-12 flex-wrap">
          <div>
            <h4 className="font-semibold text-sm mb-3 opacity-90">Product</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#features" className="hover:text-accent transition-colors">How it works</a></li>
              <li><a href="#impact" className="hover:text-accent transition-colors">Impact</a></li>
              <li><a href="#demo" className="hover:text-accent transition-colors">Live demo</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 opacity-90">Open Source</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a href="#" className="hover:text-accent transition-colors inline-flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" /> GitHub repo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors inline-flex items-center gap-1">
                  <ExternalLink className="h-3.5 w-3.5" /> API docs
                </a>
              </li>
              <li><a href="#" className="hover:text-accent transition-colors">Ethics framework</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 opacity-90">Contact</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a href="#" className="hover:text-accent transition-colors inline-flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5" /> hello@nourishnet.ai
                </a>
              </li>
              <li><a href="#" className="hover:text-accent transition-colors">Request a demo</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partnership enquiries</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-5 flex flex-wrap justify-between items-center gap-3">
        <p className="text-xs opacity-50">
          © 2026 NourishNet · Open-source project (MIT) · Built for the AI for Good hackathon
        </p>
        <p className="text-xs opacity-40">
          Powered by Scout (vision), Coordinator (matching), Logistics (messaging). 92% average match confidence.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
