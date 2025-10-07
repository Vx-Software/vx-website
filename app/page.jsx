import AnimatedText from "../components/AnimatedText"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WorkflowSection from "../components/WorkflowSection";
import Wrapper from "../components/Wrapper/Wrapper";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] overflow-x-hidden">
      <Navbar />
      <div className="px-6 pt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white">VX Software Solutions</h1>
        <p className="mt-2 text-gray-300 max-w-3xl">A software development company building AI-driven platforms, healthcare solutions, mobile apps, and enterprise software. We deliver fast, secure, and scalable products.</p>
      </div>
      <Wrapper />
      <AnimatedText />
      <WorkflowSection />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
