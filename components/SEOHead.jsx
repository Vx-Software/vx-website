import Head from 'next/head';

const SEOHead = ({ 
  title = "VX Software Solutions",
  description = "Leading software development company specializing in AI solutions, healthcare software, school management systems, and digital transformation.",
  keywords = "VX Software Solutions, software development company, AI development, healthcare software, school management system",
  canonical = "https://vxsoftwaresolutions.com",
  ogImage = "/images/og-image.png",
  structuredData = null
}) => {
  const fullTitle = title.includes('VX Software Solutions') ? title : `${title} | VX Software Solutions`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`https://vxsoftwaresolutions.com${ogImage}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VX Software Solutions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://vxsoftwaresolutions.com${ogImage}`} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEOHead;
