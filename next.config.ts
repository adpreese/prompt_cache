import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: "/prompt_cache",
  
  assetPrefix: '/prompt_cache',
};

export default nextConfig;