/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.vxsoftwaresolutions.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*', '/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about-us'),
    await config.transform(config, '/services'),
    await config.transform(config, '/portfolio'),
    await config.transform(config, '/contactus'),
    await config.transform(config, '/products'),
    await config.transform(config, '/industries'),
    await config.transform(config, '/blog'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://www.vxsoftwaresolutions.com/sitemap.xml',
    ],
  },
};
