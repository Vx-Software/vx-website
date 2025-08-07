import { Archivo, Figtree } from "next/font/google";
import "./globals.css";


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
    default: "VX Software Solutions - Leading Software Development Company in Hyderabad",
    template: "%s | VX Software Solutions"
  },
  description: "VX Software Solutions is a premier software development company in Hyderabad specializing in AI, healthcare solutions (V Healthcare), school management systems (V Remind), mobile development, and digital transformation services.",
  keywords: [
    "VX Software Solutions",
    "software development Hyderabad",
    "V Remind school management",
    "V Healthcare solutions", 
    "AI development",
    "mobile app development",
    "healthcare software",
    "school ERP system",
    "fintech solutions",
    "blockchain development",
    "cloud services Hyderabad",
    "custom software development",
    "digital transformation",
    "Vamsi Krishna",
    "Vamsi Krishna software developer",
    "Vamsi Krishna Hyderabad",
    "Vamsi Krishna portfolio",
    "Vremind School ERP",
    "V Healthcare",
    "V Remind",
    "V Healthcare software",
    "V Remind ERP",
    "V Healthcare Hyderabad",
    "School management system",
    "ERP solutions Hyderabad",
    "Vamsi Krishna software engineer",
    "Vamsi Krishna developer",
    "Vamsi Krishna software solutions",
    "Vamsi Krishna software company",
    "Vamsi Krishna software development",
    "VXSOFTWARESOLUTIONS",
    "VX Software Solutions Hyderabad",
    "VX Software Solutions Vamsi Krishna",
    "VX Software Solutions portfolio",
    "VX Software Solutions services",
    "VX Software Solutions products",
    "VX Software Solutions company",
    "VX Software Solutions team",
    "VX Software Solutions contact",
    "VX Software Solutions about",
    "VX software solutions Hyderabad",
    "VX software solutions Vamsi Krishna",
    "VX software solutions portfolio",
    "VX software solutions bengaluru",
    "VX software solutions Pune",
    "VX software solutions Chennai",
    "VX software solutions Mumbai",
    "VX software solutions India",
    "VX software solutions services",
    "VX software solutions products",
    "VX software solutions company",
    "VX software solutions team",
    "VX software solutions contact",
    "VX software solutions about",
    "VX software solutions Hyderabad",
    "Vx software soultions",
    "VX Software Solutions AI",
    "VX Software Solutions mobile development",
    "VX Software Solutions fintech",
    "VX Software Solutions blockchain",
    "VX Software Solutions cloud services",
    "VX Software Solutions custom software",
    "VX Software Solutions digital transformation",
    "VX Software Solutions Vamsi Krishna portfolio",
    "VX Software Solutions Vamsi Krishna software developer",
    ""

  ],
  authors: [{ name: "VX Software Solutions" }],
  creator: "VX Software Solutions",
  publisher: "VX Software Solutions",
  metadataBase: new URL('https://vxsoftwaresolutions.com'),
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
    url: 'https://vxsoftwaresolutions.com',
    title: 'VX Software Solutions - Leading Software Development Company in Hyderabad',
    description: 'Premier software development company in Hyderabad specializing in V Healthcare, V Remind school management, AI solutions, and digital transformation.',
    siteName: 'VX Software Solutions',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VX Software Solutions - Software Development Company Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VX Software Solutions - Software Development Company Hyderabad',
    description: 'Leading software development company in Hyderabad. V Healthcare, V Remind school management, AI solutions & more.',
    images: ['/images/twitter-image.png'],
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
      </head>
      <body className={`${archivo.variable} ${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}