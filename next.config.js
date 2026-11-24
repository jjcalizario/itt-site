/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async rewrites() {
    return [{ source: '/teste', destination: '/teste/index.html' }]
  },
}

module.exports = nextConfig
