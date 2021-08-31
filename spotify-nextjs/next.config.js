/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    path: "https://example.com/myaccount/",
  },
};
