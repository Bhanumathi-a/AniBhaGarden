// import type { NextConfig } from "next";
// console.log('Loaded DATABASE_URL:', process.env.DATABASE_URL)


// const nextConfig: NextConfig = {
//   /* config options here */

// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// console.log('Loaded DATABASE_URL:', process.env.DATABASE_URL);

export default nextConfig;
