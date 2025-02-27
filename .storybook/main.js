module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/components/*.stories.mdx",
    "../src/stories/utils/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",

  ],
  "framework": "@storybook/html"
}