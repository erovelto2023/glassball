import type { NextConfig } from "next";

// Remove the NextConfig type to avoid type errors with new properties
const nextConfig = {
  reactStrictMode: true,
  // swcMinify is now the default in Next.js 13+, so we can remove it
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com', 'img.clerk.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
