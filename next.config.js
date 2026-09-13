/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ]
  },
  i18n: {
    locales: ['en', 'my', 'th'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
