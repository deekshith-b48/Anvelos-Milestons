import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/milestone-1",
        destination: "/milestone-1/index.html",
      },
      {
        source: "/milestone-2",
        destination: "/milestone-2/index.html",
      },
      {
        source: "/milestone-3",
        destination: "/milestone-3/index.html",
      },
    ];
  },
};

export default nextConfig;
