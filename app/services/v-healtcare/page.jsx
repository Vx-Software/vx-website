import HeroSection from "../../../components/hero-section";
import FeatureSection from "../../../components/feature-section"
import TestimonialSection from "../../../components/testimonial-section"
import CTASection from "../../../components/cta-section"

export const metadata = {
  title: "Healthcare Software Services - V Healthcare | VX",
  description:
    "V Healthcare by VX Software Solutions: end-to-end medical coding and billing services, compliance-first, scalable infrastructure.",
  alternates: { canonical: "/services/v-healtcare" },
  openGraph: {
    title: "V Healthcare — VX Software Solutions",
    description:
      "End-to-end medical coding and billing services with enterprise-grade security.",
    url: "https://www.vxsoftwaresolutions.com/services/v-healtcare",
    images: [
      { url: "/images/bannerimg.jpg", width: 1200, height: 630, alt: "V Healthcare" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V Healthcare — VX Software Solutions",
    description:
      "End-to-end medical coding and billing services with enterprise-grade security.",
    images: ["/images/bannerimg.jpg"],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
    </main>
  )
}
