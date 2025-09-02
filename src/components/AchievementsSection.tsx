import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const achievements = [
  {
    icon: Shield,
    number: "99.9%",
    label: "System Uptime",
    description: "Maintained across 100+ VMs"
  },
  {
    icon: TrendingUp,
    number: "90%",
    label: "Deployment Speed",
    description: "Reduction in deployment time"
  },
  {
    icon: Clock,
    number: "35%",
    label: "MTTR Reduction",
    description: "Mean Time To Recovery improvement"
  },
  {
    icon: Zap,
    number: "70%",
    label: "Manual Effort",
    description: "Reduced through automation"
  }
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('achievements');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <p className="text-lg text-muted-foreground">
            Measurable impact through automation and optimization
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index} 
                className={`bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-tech-blue/20 rounded-full flex items-center justify-center hover:bg-tech-blue/30 transition-colors duration-300 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <IconComponent className="h-8 w-8 text-tech-blue" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-tech-green hover:scale-110 transition-transform duration-200">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold hover:text-tech-blue transition-colors duration-200">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;