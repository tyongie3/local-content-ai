import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "RM0",
    period: "forever",
    description: "Perfect for trying out AI content generation",
    features: [
      "5 content generations per day",
      "Instagram, Facebook, TikTok",
      "Basic tone options",
      "Save up to 3 brand profiles",
      "Copy to clipboard",
      "View last 10 generations",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "RM30",
    period: "per month",
    description: "For serious content creators and businesses",
    features: [
      "Unlimited content generations",
      "All platforms + LinkedIn",
      "Advanced tone customization",
      "Unlimited brand profiles",
      "Download as TXT/DOCX",
      "Unlimited generation history",
      "Priority support",
      "Local festival templates",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-elevated scale-105"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mb-6" 
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
