import Navbar from "../../components/Navbar"
import ContentGrid from "./ContentGrid"
import Testimonials from "../../components/Testimonials"
import Contact from "../../components/Contact"
import Footer from "../../components/footer1"
export const metadata = {
  title: "Blog - Insights, Case Studies, and Engineering at VX",
  description:
    "Explore VX Software Solutions' blog: engineering insights, AI, healthcare tech, product updates, and case studies.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "VX Blog — Engineering, AI, and Case Studies",
    description:
      "Engineering insights, AI/ML, healthcare, and product learnings from VX Software Solutions.",
    url: "https://www.vxsoftwaresolutions.com/blog",
    images: [
      {
        url: "/images/bannerimg.jpg",
        width: 1200,
        height: 630,
        alt: "VX Software Solutions Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VX Blog — Engineering, AI, and Case Studies",
    description:
      "Engineering insights, AI/ML, healthcare, and product learnings from VX Software Solutions.",
    images: ["/images/bannerimg.jpg"],
  },
};

export default function Blog(){
    return (
         <div className="w-full min-h-screen bg-[#0C0C0C] ">
            <Navbar />
            <div className="p-6">
              <div className="w-full bg-[#C9BA1433] border-[0.8px] border-[#C9BA14] px-3 py-9 rounded-xl mt-4">
          <p className="font-figtree text-3xl uppercase font-semibold text-center">
                Blog
          </p>
        </div>
        </div>
        <ContentGrid/>
        <div className="p-6"> 
        <Testimonials/>
        </div>
        <Contact/>
        <Footer/>
        
        </div>
    )
}