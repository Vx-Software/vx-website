import { Archivo, Figtree } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";


export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata = {
  title: {
    default: "VX Software Solutions",
    template: "%s | VX Software Solutions"
  },
  description: "VX Software Solutions is a leading software development company specializing in AI solutions, healthcare software (V Healthcare), school management systems (V Remind), mobile development, and digital transformation services.",
  keywords: [
    "VX Software Solutions",
    "software development company",
    "AI development",
    "healthcare software",
    "school management system",
    "mobile app development",
    "digital transformation",
    "custom software development",
    "V Healthcare",
    "V Remind",
    "fintech solutions",
    "blockchain development",
    "cloud services",
    "software solutions"
  ],
  authors: [{ name: "VX Software Solutions" }],
  creator: "VX Software Solutions",
  publisher: "VX Software Solutions",
  metadataBase: new URL('https://www.vxsoftwaresolutions.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.vxsoftwaresolutions.com',
    title: 'VX Software Solutions',
    description: 'Leading software development company specializing in AI solutions, healthcare software (V Healthcare), school management systems (V Remind), and digital transformation.',
    siteName: 'VX Software Solutions',
    images: [
      {
        url: '/images/bannerimg.jpg',
        width: 1200,
        height: 630,
        alt: 'VX Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VX Software Solutions',
    description: 'Leading software development company specializing in AI solutions, healthcare software, school management systems, and digital transformation.',
    images: ['/images/bannerimg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '7d9afdb70696a250',
  },
};

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VX Software Solutions",
    "url": "https://www.vxsoftwaresolutions.com",
    "logo": "https://www.vxsoftwaresolutions.com/images/logo.png",
    "description": "Leading software development company specializing in AI solutions, healthcare software, school management systems, and digital transformation.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Flat no 102, Namas Building, #945 Road No - 48, Ayyappa Society, Madhapur",
      "addressLocality": "Hyderabad",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9515053073",
      "contactType": "customer service",
      "email": "remind@vxsoftwaresolutions.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/vx-software-solutions",
      "https://twitter.com/vxsoftwaresolutions"
    ],
    "services": [
      "Software Development",
      "AI & Machine Learning",
      "Healthcare Software",
      "School Management Systems",
      "Mobile App Development",
      "Digital Transformation"
    ],
    "areaServed": "India",
    "knowsAbout": [
      "Software Development",
      "AI Solutions",
      "Healthcare Technology",
      "Educational Technology",
      "Mobile Applications",
      "Cloud Services"
    ]
  }

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VX Software Solutions",
    "url": "https://www.vxsoftwaresolutions.com",
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": "VX Software Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.vxsoftwaresolutions.com/images/logo.png"
      }
    }
  }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={jsonLd} />
        <JsonLd data={webSiteJsonLd} />
        <meta name="google-site-verification" content="7d9afdb70696a250" />
      </head>
      <body className={`${archivo.variable} ${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}