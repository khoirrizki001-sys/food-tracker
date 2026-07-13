import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hapus semua console.* secara otomatis di production build
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimasi gambar otomatis: Next.js serve AVIF & WebP untuk browser modern
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // Keamanan: sembunyikan header "X-Powered-By: Next.js"
  poweredByHeader: false,

  // Kompresi Gzip/Brotli untuk semua response
  compress: true,
};

export default nextConfig;
