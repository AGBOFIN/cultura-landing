import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  eslint: {
    // Ajout de cette option pour ignorer les erreurs ESLint lors du build sur Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;