import Contact from "../../components/Contact";
import Footer from "../../components/footer1";
import Navbar from "../../components/Navbar"
import Testimonials from "../../components/Testimonials";
import ListedPortfolio from "./ListedPortfolio";

export const metadata = {
  title: "Portfolio - Client Work and Case Studies | VX",
  description:
    "Explore VX Software Solutions' portfolio: software projects, case studies, and outcomes across healthcare, fintech, and enterprise.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — VX Software Solutions",
    description:
      "Selected work across industries: healthcare, fintech, education, and more.",
    url: "https://www.vxsoftwaresolutions.com/portfolio",
    images: [
      { url: "/images/bannerimg.jpg", width: 1200, height: 630, alt: "VX Portfolio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — VX Software Solutions",
    description:
      "Selected work across industries: healthcare, fintech, education, and more.",
    images: ["/images/bannerimg.jpg"],
  },
};

export default function Portfolio() {
  return (
    <div className="w-full min-h-screen bg-[#0C0C0C]">
      <Navbar />
      <div className="flex flex-col gap-10 px-3">
        <div className="w-full bg-[#5029FF33] border-[0.8px] border-[#5029FF] px-3 py-9 rounded-xl mt-8">
          <p className="font-figtree text-3xl uppercase font-semibold text-center">
            Portfolio
          </p>
        </div>
        <ListedPortfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
