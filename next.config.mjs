/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/rudra.github.io/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/rudra.github.io' : '',
  };
  
  export default nextConfig;
  