import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
