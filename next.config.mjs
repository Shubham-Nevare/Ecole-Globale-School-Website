/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ecoleglobale.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
