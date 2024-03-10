/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/components/**/*.stories.@(js|jsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
   '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal(config) {
    config.plugins = (config.plugins ?? []).filter((plugin) => plugin && 'name' in plugin && plugin.name !== 'vite:dts');
    return config;
  },
};
export default config;