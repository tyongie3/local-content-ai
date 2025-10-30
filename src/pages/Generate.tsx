import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Copy, Check, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "ai_content_studio_usage";
const MAX_FREE_USAGE = 5;

interface GeneratedContent {
  captions: string[];
  hashtags: string[];
}

const Generate = () => {
  const { toast } = useToast();
  const [usageCount, setUsageCount] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedHashtags, setCopiedHashtags] = useState(false);

  // Form state
  const [brandName, setBrandName] = useState("");
  const [industry, setIndustry] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [platform, setPlatform] = useState("instagram");
  const [tone, setTone] = useState("friendly");
  const [contentType, setContentType] = useState("promotional");
  const [context, setContext] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { count, date } = JSON.parse(stored);
      const today = new Date().toDateString();
      if (date === today) {
        setUsageCount(count);
      } else {
        // Reset for new day
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: 0, date: today }));
        setUsageCount(0);
      }
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: 0, date: new Date().toDateString() }));
    }
  }, []);

  const handleGenerate = async () => {
    if (usageCount >= MAX_FREE_USAGE) {
      toast({
        title: "Daily limit reached",
        description: "You've used all 5 free generations today. Upgrade to Pro for unlimited access!",
        variant: "destructive",
      });
      return;
    }

    if (!brandName || !industry || !targetAudience) {
      toast({
        title: "Missing information",
        description: "Please fill in brand name, industry, and target audience.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation (will replace with actual API call)
    setTimeout(() => {
      const mockContent: GeneratedContent = {
        captions: [
          `🌟 ${brandName} brings you the best in ${industry}! Perfect for ${targetAudience}. ${context || "Check it out today!"}`,
          `Discover what makes ${brandName} special! Designed for ${targetAudience} who love ${industry}. ${context || "Don't miss out!"}`,
          `${brandName} - your trusted ${industry} partner! Made with ${targetAudience} in mind. ${context || "Experience the difference!"}`,
        ],
        hashtags: [
          `#${brandName.replace(/\s+/g, "")}`,
          `#${industry.replace(/\s+/g, "")}`,
          "#MalaysiaBusiness",
          "#SocialMediaMarketing",
          "#ContentCreator",
          "#DigitalMarketing",
          "#SmallBusiness",
          "#Entrepreneur",
          "#MalaysianBrand",
          "#SupportLocal",
        ],
      };

      setGeneratedContent(mockContent);
      
      // Update usage count
      const newCount = usageCount + 1;
      setUsageCount(newCount);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ count: newCount, date: new Date().toDateString() })
      );

      toast({
        title: "Content generated!",
        description: `${MAX_FREE_USAGE - newCount} free generations remaining today.`,
      });

      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = async (text: string, index?: number) => {
    try {
      await navigator.clipboard.writeText(text);
      if (index !== undefined) {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      } else {
        setCopiedHashtags(true);
        setTimeout(() => setCopiedHashtags(false), 2000);
      }
      toast({
        title: "Copied!",
        description: "Content copied to clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const remainingUsage = MAX_FREE_USAGE - usageCount;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">AI Content Studio</span>
              </div>
            </a>
            
            <div className="flex items-center gap-4">
              <div className="text-sm">
                <span className="text-muted-foreground">Free generations: </span>
                <span className={`font-bold ${remainingUsage === 0 ? 'text-destructive' : 'text-primary'}`}>
                  {remainingUsage}/{MAX_FREE_USAGE}
                </span>
              </div>
              <Button variant="outline" size="sm">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Generate <span className="text-primary">Viral</span> Content
            </h1>
            <p className="text-xl text-muted-foreground">
              Fill in your brand details and let AI create engaging captions and hashtags
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <Card>
              <CardHeader>
                <CardTitle>Brand & Content Details</CardTitle>
                <CardDescription>Tell us about your brand and what you want to create</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Brand Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="brandName">Brand Name *</Label>
                    <Input
                      id="brandName"
                      placeholder="e.g., Sarah's Cafe"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry/Niche *</Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="beauty">Beauty</SelectItem>
                        <SelectItem value="fitness">Fitness</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetAudience">Target Audience *</Label>
                    <Input
                      id="targetAudience"
                      placeholder="e.g., Young professionals aged 25-35"
                      value={targetAudience}
                      onChange={(e) => setTargetAudience(e.target.value)}
                    />
                  </div>
                </div>

                {/* Platform Selection */}
                <div className="space-y-2">
                  <Label>Platform</Label>
                  <RadioGroup value={platform} onValueChange={setPlatform}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="instagram" id="instagram" />
                        <Label htmlFor="instagram" className="font-normal cursor-pointer">Instagram</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="facebook" id="facebook" />
                        <Label htmlFor="facebook" className="font-normal cursor-pointer">Facebook</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tiktok" id="tiktok" />
                        <Label htmlFor="tiktok" className="font-normal cursor-pointer">TikTok</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="linkedin" id="linkedin" />
                        <Label htmlFor="linkedin" className="font-normal cursor-pointer">
                          LinkedIn <span className="text-xs text-primary">(Pro)</span>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Tone Selection */}
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone of Voice</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="playful">Playful</SelectItem>
                      <SelectItem value="inspirational">Inspirational</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Content Type */}
                <div className="space-y-2">
                  <Label htmlFor="contentType">Content Type</Label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="promotional">Promotional</SelectItem>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="announcement">Announcement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Context */}
                <div className="space-y-2">
                  <Label htmlFor="context">Additional Context (Optional)</Label>
                  <Textarea
                    id="context"
                    placeholder="e.g., Launching new product line, Ramadan special offer..."
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    rows={3}
                  />
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleGenerate}
                  disabled={isGenerating || remainingUsage === 0}
                >
                  {isGenerating ? (
                    <>Generating...</>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate Content
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              {generatedContent ? (
                <>
                  {/* Captions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Generated Captions</CardTitle>
                      <CardDescription>Choose your favorite and copy to use</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {generatedContent.captions.map((caption, index) => (
                        <div
                          key={index}
                          className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors group"
                        >
                          <p className="text-sm mb-3">{caption}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{caption.length} characters</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(caption, index)}
                            >
                              {copiedIndex === index ? (
                                <Check className="w-4 h-4 text-primary" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                              {copiedIndex === index ? "Copied!" : "Copy"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Hashtags */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Suggested Hashtags</CardTitle>
                      <CardDescription>Boost your reach with these hashtags</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 border border-border rounded-lg mb-4">
                        <p className="text-sm mb-3">{generatedContent.hashtags.join(" ")}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => copyToClipboard(generatedContent.hashtags.join(" "))}
                      >
                        {copiedHashtags ? (
                          <>
                            <Check className="w-4 h-4 text-primary" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy All Hashtags
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="h-full flex items-center justify-center min-h-[400px]">
                  <CardContent className="text-center space-y-4">
                    <Sparkles className="w-16 h-16 text-muted-foreground mx-auto" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ready to create?</h3>
                      <p className="text-muted-foreground">
                        Fill in the form and click Generate to see your AI-powered content
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Generate;
