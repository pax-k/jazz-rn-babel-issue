module.exports = function (api) {
  api.cache(true);
  console.log("BABEL CONFIG");
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-transform-class-static-block",
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./config/tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === "development",
        },
      ],
    ],
  };
};
