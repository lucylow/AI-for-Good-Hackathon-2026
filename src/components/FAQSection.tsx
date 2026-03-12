import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    q: "How does NourishNet protect privacy?",
    a: "We store only the minimum data needed — phone number and opt-in notification preferences. All personal data is anonymized in audit logs and agent explanations.",
  },
  {
    q: "What happens when OCR or detection is wrong?",
    a: "When confidence is low, the listing automatically escalates to a human supervisor for verification before any match is made. Nothing ships without review.",
  },
  {
    q: "Is there a cost to use NourishNet?",
    a: "NourishNet is free for donors, recipients, and volunteers. We offer partnership tiers for enterprises and councils looking for analytics and API access.",
  },
  {
    q: "How are matches prioritized fairly?",
    a: "The Coordinator agent uses proximity, urgency, dietary needs, and capacity — never demographics. The fairness algorithm is auditable and open-source.",
  },
  {
    q: "Can I audit the AI's decisions?",
    a: "Yes. Every match includes a full agent timeline with confidence scores, timestamps, and a plain-language explanation of why each decision was made.",
  },
];

const FAQSection = () => (
  <section className="container mx-auto py-16 max-w-3xl">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
      Frequently asked questions
    </h2>
    <Accordion type="single" collapsible className="space-y-2">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-2xl px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground text-sm hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default FAQSection;
