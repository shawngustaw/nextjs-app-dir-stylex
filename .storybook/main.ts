import type { StorybookConfig } from "@storybook/nextjs";
const StylexPlugin = require("@stylexjs/webpack-plugin");
import path from "path";

const config: StorybookConfig = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.plugins = [
      ...(config.plugins || []),
      new StylexPlugin({
        filename: "styles.[contenthash].css",
        // get webpack mode and set value for dev
        dev: true,
        // Use statically generated CSS files and not runtime injected CSS.
        // Even in development.
        runtimeInjection: false,
        // optional. default: 'x'
        classNamePrefix: "x",
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: "commonJS",
          // The absolute path to the root directory of your project
          rootDir: __dirname,
        },
      }),
    ];

    return config;
  },
};
export default config;
