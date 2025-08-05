import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['@next/font'],
  },
  webpack: (config, { isServer }) => {
    // Fix for lightningcss issue on Netlify
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
        process: false,
      };
    }
    
    // Exclude lightningcss from client bundle
    config.externals = config.externals || [];
    if (!isServer) {
      config.externals.push('lightningcss');
    }
    
    return config;
  },
};

export default nextConfig;
