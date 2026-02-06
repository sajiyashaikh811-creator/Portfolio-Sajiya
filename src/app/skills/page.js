import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: "Skills - Sajiya Shaikh | Technical Expertise",
  description: "Explore the technical skills and expertise of Sajiya Shaikh in Web Development, UI/UX Design, and emerging technologies.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <Skills />
      </div>
    </div>
  );
}