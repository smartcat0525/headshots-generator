/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false,
    isrMemoryCacheSize: 0,
  },
};

module.exports = nextConfig;
