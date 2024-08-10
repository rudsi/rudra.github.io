/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/rudsi.github.io/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/rudsi.github.io' : '',
  };
  
  export default nextConfig;
  