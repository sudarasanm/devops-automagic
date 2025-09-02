import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const EducationSection = () => {
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

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic foundation and professional certifications
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Education */}
          <Card className={`bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tech-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-tech-blue/30 transition-colors duration-300">
                  <GraduationCap className="h-6 w-6 text-tech-blue" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-tech-blue mb-2 hover:text-tech-blue-dark transition-colors duration-200">
                    Bachelor of Technology in Information Technology
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold hover:text-tech-green transition-colors duration-200">
                      Sri Shakthi Institute of Engineering and Technology
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Aug 2019 – May 2023</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Coimbatore, Tamil Nadu</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-tech-green text-tech-green w-fit hover:scale-110 transition-transform duration-200">
                      CGPA: 7.0 / 10.0
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Certifications */}
          <Card className={`bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-tech-green/20 rounded-lg flex items-center justify-center hover:bg-tech-green/30 transition-colors duration-300">
                  <Award className="h-6 w-6 text-tech-green" />
                </div>
                <CardTitle className="text-2xl text-tech-green hover:text-tech-green-dark transition-colors duration-200">
                  Certifications & Achievements
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <div className="font-semibold group-hover:text-tech-blue transition-colors duration-200">AWS Developer Associate</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">In Progress - 2025</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <div>
                    <div className="font-semibold group-hover:text-tech-blue transition-colors duration-200">Experiential Project-Based Learning</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">Team2Solve & Code2Build (TNSDC & IBM)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;