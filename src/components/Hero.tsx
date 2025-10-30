import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Powered by AI • Built for Malaysia
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Create <span className="text-primary">Viral</span> Social Content in{" "}
              <span className="text-primary">Seconds</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              AI-powered content generation for Malaysian businesses. Get ready-to-post captions and hashtags 
              in Bahasa Malaysia, English, or Manglish—instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="group">
                Start Creating Free
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Free daily credits</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Social platforms</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">10s</p>
                <p className="text-sm text-muted-foreground">Generation time</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:h-[600px] animate-fade-in-delayed">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
            <img
              src={heroImage}
              alt="AI Content Generation Platform"
              className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};
