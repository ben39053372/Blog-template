import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: "*",
      },
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
