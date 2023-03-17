const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true, layers: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        remotes: {
          secondary: `secondary@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chuncks"
          }/secondaryEntry.js`,
        },
        filename: "static/chuncks/mainEntry.js",
        exposes: {
          "./footer": "./src/components/Footer",
        },
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
