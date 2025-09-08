/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.vxsoftwaresolutions.com",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,       // (optional) split sitemaps if > 7000 URLs
};
