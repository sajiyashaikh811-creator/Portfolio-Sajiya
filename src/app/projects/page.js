import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: "Projects - Sajiya Shaikh | Portfolio Showcase",
  description: "Discover the creative projects and portfolio of Sajiya Shaikh, showcasing beautiful web applications, AI projects, and design work.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <Projects />
    </div>
  );
}