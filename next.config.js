/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to https://<username>.github.io/ (user site), leave basePath as ''
  // If deploying to https://<username>.github.io/<repo-name>/ (project site), set basePath to '/<repo-name>'
  basePath: '',
};

module.exports = nextConfig;
