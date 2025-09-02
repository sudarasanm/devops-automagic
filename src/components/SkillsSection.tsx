import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Code, MonitorSpeaker, Database, Cog } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["AWS (EC2, S3, IAM, CloudWatch)", "Google Cloud Platform (GCP)", "Oracle Cloud Infrastructure"]
  },
  {
    icon: Cog,
    title: "Infrastructure as Code",
    skills: ["Terraform", "Shell Scripting", "Multi-cloud automation"]
  },
  {
    icon: Server,
    title: "Containerization & Orchestration",
    skills: ["Docker", "Kubernetes", "Load Balancing", "Multi-stage builds"]
  },
  {
    icon: Code,
    title: "CI/CD & Automation",
    skills: ["Jenkins", "GitHub Actions", "Blue-Green Deployments", "Node.js automation"]
  },
  {
    icon: MonitorSpeaker,
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "Alertmanager", "Custom dashboards", "MTTR optimization"]
  },
  {
    icon: Database,
    title: "Data Engineering / ETL",
    skills: ["Apache NiFi", "CouchDB", "SFTP", "API integrations", "Real-time pipelines"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Core Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical expertise across cloud platforms, automation, and modern DevOps practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-tech-blue/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-tech-blue" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-tech-blue/20 hover:text-tech-blue transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default SkillsSection;