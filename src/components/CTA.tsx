import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          {/* Decorative blur */}
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ready to Transform Your <br />
            <span className="text-primary">Social Media Game?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join Malaysian businesses already creating engaging content in seconds. 
            Start with 5 free generations today—no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="hero" className="group">
              Start Creating Free
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
          
          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Made in Malaysia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
