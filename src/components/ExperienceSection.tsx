import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    title: "DevOps & Cloud Engineer",
    company: "Param Network",
    location: "Bangalore, India",
    period: "Jun 2023 – Present",
    type: "Full-time",
    achievements: [
      "Managed 100+ VMs across AWS and Oracle Cloud with 99.9% uptime",
      "Reduced deployment time by 90% using Blue-Green Deployments in Jenkins",
      "Built CLI-based Jenkins automation tool, cutting manual effort by 70%",
      "Implemented Prometheus + Grafana, reducing MTTR by 35%",
      "Designed full-stack Deployment Dashboard with real-time log streaming",
      "Created ETL pipelines with Apache NiFi, reducing manual processing by 50%"
    ]
  },
  {
    title: "DevOps Engineer Intern",
    company: "Param Network",
    location: "Bangalore, India",
    period: "Dec 2022 – Jun 2023",
    type: "Internship",
    achievements: [
      "Orchestrated automation of CI/CD pipelines using Jenkins",
      "Integrated Docker, Kubernetes, Linux, Git, AWS, GCP, and Oracle Cloud",
      "Collaborated with developers to resolve application-related issues",
      "Streamlined development processes and improved system reliability"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Divum Corporate Services",
    location: "Bangalore, India",
    period: "Jul 2022 – Dec 2022",
    type: "Internship",
    achievements: [
      "Contributed to Node.js project for automating GLANCE's Facebook promotions",
      "Streamlined promotion workflows, improving efficiency and campaign reach",
      "Gained hands-on experience in backend development",
      "Participated in continuous training throughout the internship"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Progressive career growth in DevOps and cloud engineering
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-tech-blue">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="border-tech-green text-tech-green w-fit">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;