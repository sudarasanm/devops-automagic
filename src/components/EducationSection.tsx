import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic foundation and professional certifications
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Education */}
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tech-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-tech-blue" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-tech-blue mb-2">
                    Bachelor of Technology in Information Technology
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">
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
                    <Badge variant="outline" className="border-tech-green text-tech-green w-fit">
                      CGPA: 7.0 / 10.0
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Certifications */}
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-tech-green/20 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-tech-green" />
                </div>
                <CardTitle className="text-2xl text-tech-green">
                  Certifications & Achievements
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">AWS Developer Associate</div>
                    <div className="text-sm text-muted-foreground">In Progress - 2025</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Experiential Project-Based Learning</div>
                    <div className="text-sm text-muted-foreground">Team2Solve & Code2Build (TNSDC & IBM)</div>
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