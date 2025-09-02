import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import cloudInfra from "@/assets/cloud-infra.jpg";

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS (EC2, S3, IAM, CloudWatch)", "Google Cloud Platform (GCP)", "Oracle Cloud Infrastructure"]
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "Shell Scripting", "Multi-cloud automation"]
  },
  {
    title: "Containerization & Orchestration",
    skills: ["Docker", "Kubernetes", "Load Balancing", "Multi-stage builds"]
  },
  {
    title: "CI/CD & Automation",
    skills: ["Jenkins", "GitHub Actions", "Blue-Green Deployments", "CLI automation", "Node.js automation"]
  },
  {
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "Alertmanager", "Custom dashboards", "MTTR optimization"]
  },
  {
    title: "Data Engineering & Programming",
    skills: ["Apache NiFi", "Node.js", "Python", "Bash/Shell scripting", "CouchDB", "MongoDB"]
  }
];

const SkillsSection = () => {
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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${cloudInfra})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Core Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Expertise across the modern DevOps technology stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-tech-green hover:text-tech-green-dark transition-colors duration-200">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:scale-110 transition-transform duration-200 hover:bg-tech-blue/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;