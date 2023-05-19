const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true, layers: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        remotes: {
          shared: `shared@${
            process.env.MODULE_SHARED_ENTRYPOINT_URL
          }/_next/static/${isServer ? "ssr" : "chunks"}/sharedEntry.js`,
        },
        filename: "static/chunks/mainEntry.js",
        exposes: {
          "./footer": "./src/components/Footer",
        },
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true,
        },
        remoteType: "module",
        runtime: false,
      })
    );
    return config;
  },
};

module.exports = nextConfig;
