const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  env: {
    // API_URL: "http://localhost:3000",
    // BASE_URL: "http://localhost:3001",
    // SITE_URL: "localhost:3001",
    API_URL: "https://my-bookk.vercel.app",
    BASE_URL: "https://my-book-docs.vercel.app",
    SITE_URL: "my-book-docs.vercel.app",
  }
};

module.exports = withNextra(nextConfig)