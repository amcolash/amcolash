const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  trailingSlash: true,
  productionBrowserSourceMaps: true,

  // React --> Preact: https://dev.to/dlw/next-js-replace-react-with-preact-2i72
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat',
  //     });
  //   }
  //   return config;
  // },

  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.json5$/i,
      loader: 'json5-loader',
      type: 'javascript/auto',
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(config);
