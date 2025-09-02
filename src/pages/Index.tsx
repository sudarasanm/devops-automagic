import PortfolioHeader from "@/components/PortfolioHeader";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <AchievementsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
};

export default Index;
