const withImages = require("next-images");
module.exports = withImages({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  }
});
