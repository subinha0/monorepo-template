import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  transpilePackages: ['@repo/ui'],
  webpack: config => {
    // 필요시 추가 웹팩 설정
    return config;
  }
};

export default nextConfig;
