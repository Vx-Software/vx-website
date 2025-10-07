import Navbar from "../../components/Navbar";
import SubNavbar from "./Subnav";
import Herosection from "./Herosection";
import VXSchoolBoard from "./VXSchoolBoard";
import TrustedSchools from "./Trustedschools";
import PlatformFeaturesPage from "./PlatformFeaturesPage";
import StarSection from "./StarSection";
import EducationalPlatform from "./EducationalPlatform";
import TestimonialsSection from "./TestimonialsSection";
import FAQComponent from "./FAQCoomponent";
import PricingPage from "./PricingPage";
import Gradsection from "./Gradsection";
import VXSoftwareFooter from "./VXSoftwareFooter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Products - V Remind and Platform Capabilities | VX",
  description:
    "Discover VX Software Solutions products including V Remind and platform capabilities built for scale, security, and performance.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — VX Software Solutions",
    description:
      "Explore VX products and platform features for enterprises and startups.",
    url: "https://www.vxsoftwaresolutions.com/products",
    images: [
      { url: "/images/bannerimg.jpg", width: 1200, height: 630, alt: "VX Products" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — VX Software Solutions",
    description:
      "Explore VX products and platform features for enterprises and startups.",
    images: ["/images/bannerimg.jpg"],
  },
};


export default function Products() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <PlatformFeaturesPage/>

      <VXSoftwareFooter/>
    </div>
  );
}
 