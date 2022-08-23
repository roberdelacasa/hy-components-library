module.exports = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/web-components',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    'storyStoreV7': true
  }
}