import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: "Contact - Sajiya Shaikh | Get In Touch",
  description: "Get in touch with Sajiya Shaikh for creative collaborations, project inquiries, or just to say hello. Let's create something beautiful together!",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <Contact />
    </div>
  );
}