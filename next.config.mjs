/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 이미지 사용을 위해 설정되어있지 않은 이미지 속성에 대해 정의하는 부분
  images: {
    // https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/user/**',
      },
    ],
  },
};

export default nextConfig;
