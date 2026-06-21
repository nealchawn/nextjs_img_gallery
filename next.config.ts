import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "/Users/chawn.neal/code/sandbox/nextjs_img_gallery",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**'
      }
    ]
  }
};

export default nextConfig;
