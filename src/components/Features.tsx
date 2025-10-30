import { Zap, Globe, Briefcase } from "lucide-react";
import featureAI from "@/assets/feature-ai.jpg";
import featurePlatforms from "@/assets/feature-platforms.jpg";
import featureBrands from "@/assets/feature-brands.jpg";

const features = [
  {
    icon: Zap,
    image: featureAI,
    title: "AI-Powered Generation",
    description: "Get 3-5 caption variations and 10-15 relevant hashtags in seconds. No marketing degree required.",
  },
  {
    icon: Globe,
    image: featurePlatforms,
    title: "Multi-Platform Ready",
    description: "Optimized content for Instagram, Facebook, TikTok, and LinkedIn. One click, all platforms.",
  },
  {
    icon: Briefcase,
    image: featureBrands,
    title: "Brand Profiles",
    description: "Save multiple brand profiles with voice, audience, and values. Switch instantly between brands.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to <span className="text-primary">Win</span> on Social
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built specifically for Malaysian SMEs, creators, and entrepreneurs who need quality content fast.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute top-0 right-0 w-20 h-20 object-contain opacity-20 group-hover:opacity-30 transition-opacity"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
