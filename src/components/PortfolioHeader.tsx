import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";

const PortfolioHeader = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background/90" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-green/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Sudarasan M
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              DevOps & Cloud Engineer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Results-driven DevOps & Cloud Engineer with 2+ years of experience in designing, 
            automating, and managing large-scale cloud infrastructures with 99.9% uptime.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Phone className="h-4 w-4 text-tech-blue" />
              <span>+91 8072076626</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Mail className="h-4 w-4 text-tech-blue" />
              <span>sudarasansiva1426@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <Linkedin className="h-4 w-4 text-tech-blue" />
              <span>linkedin.com/in/sudarasan</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
              <MapPin className="h-4 w-4 text-tech-blue" />
              <span>Bangalore, India</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              2+ Years Experience
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              99.9% Uptime
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              90%+ Faster Deployments
            </Badge>
          </div>
          
          <div className="flex justify-center gap-4 pt-6">
            <Button size="lg" className="bg-tech-blue hover:bg-tech-blue-dark shadow-glow">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-tech-green text-tech-green hover:bg-tech-green hover:text-background">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;