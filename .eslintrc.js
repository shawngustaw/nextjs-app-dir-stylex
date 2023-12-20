module.exports = {
  extends: ["next/core-web-vitals", "plugin:storybook/recommended"],
  plugins: ["@stylexjs"],
  rules: {
    // The Eslint rule still needs work, but you can
    // enable it to test things out.
    "@stylexjs/valid-styles": "error",
  },
};
