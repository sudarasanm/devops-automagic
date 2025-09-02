import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const PortfolioHeader = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/85" />
      
      {/* Animated Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-green/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <div className="space-y-2 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Sudarasan M
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              DevOps & Cloud Engineer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            Results-driven DevOps & Cloud Engineer with 2+ years of experience in designing, 
            automating, and managing large-scale cloud infrastructures with 99.9% uptime.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <Phone className="h-4 w-4 text-tech-blue" />
              <span>+91 8072076626</span>
            </div>
            <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <Mail className="h-4 w-4 text-tech-blue" />
              <span>sudarasansiva1426@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <Linkedin className="h-4 w-4 text-tech-blue" />
              <span>linkedin.com/in/sudarasan</span>
            </div>
            <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <MapPin className="h-4 w-4 text-tech-blue" />
              <span>Bangalore, India</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 pt-4 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover:scale-110 transition-transform duration-200">
              2+ Years Experience
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover:scale-110 transition-transform duration-200">
              99.9% Uptime
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm hover:scale-110 transition-transform duration-200">
              90%+ Faster Deployments
            </Badge>
          </div>
          
          <div className="flex justify-center gap-4 pt-6 animate-slide-in-right" style={{ animationDelay: '1s' }}>
            <Button size="lg" className="bg-tech-blue hover:bg-tech-blue-dark shadow-glow hover:scale-105 transition-all duration-300">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-tech-green text-tech-green hover:bg-tech-green hover:text-background hover:scale-105 transition-all duration-300">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;