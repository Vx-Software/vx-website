import React from "react"
import Navbar from "../../components/Navbar"
import Contact from "../../components/Contact"
import Testimonials from "../../components/Testimonials"
import Footer from "../../components/footer1"

export const metadata = {
  title: "Contact Us - VX Software Solutions",
  description:
    "Get in touch with VX Software Solutions. Contact our team for software development, AI, and healthcare solutions.",
  alternates: { canonical: "/contactus" },
  openGraph: {
    title: "Contact VX Software Solutions",
    description:
      "Reach our team for partnerships, projects, and support.",
    url: "https://www.vxsoftwaresolutions.com/contactus",
    images: [
      { url: "/images/bannerimg.jpg", width: 1200, height: 630, alt: "Contact VX" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact VX Software Solutions",
    description:
      "Reach our team for partnerships, projects, and support.",
    images: ["/images/bannerimg.jpg"],
  },
};

export default function ContactUs(){
    return (
        <div>
            <Navbar/>
            <div className="p-6">
            <div className="w-full bg-[#1423C933] border-[0.8px] border-[#1423C9] px-3 py-9 rounded-xl mt-4">
                    <p className="font-figtree text-3xl uppercase font-semibold text-center">
                        Contact us
                    </p>
            </div>
            <Contact/>
            <div className="p-4">
                <Testimonials />
            </div>
            
                
        
        </div>
        <Footer/>
        </div>
    )
}