import Navbar from '@/components/Navbar';
import About from '@/components/About';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: "About - Sajiya Shaikh | Web Developer & UI/UX Designer",
  description: "Learn more about Sajiya Shaikh, a passionate Web Developer and UI/UX Designer pursuing AIML at Nexcore Institute of Technology.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <About />
    </div>
  );
}