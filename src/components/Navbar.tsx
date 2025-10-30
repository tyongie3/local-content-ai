import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AI Content Studio</span>
          </a>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="/generate">Sign In</a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="/generate">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
