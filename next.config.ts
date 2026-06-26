import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No security headers configured
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), camera=(), microphone=(), fullscreen=(), autoplay=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
