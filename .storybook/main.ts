import type { StorybookConfig } from '@storybook/nextjs';
import path from 'node:path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    // @ts-ignore
    config.resolve.alias['@app'] = path.resolve(__dirname, '../src/app');
    // @ts-ignore
    config.resolve.alias['@atoms'] = path.resolve(
      __dirname,
      '../src/components/01-atoms',
    );
    // @ts-ignore
    config.resolve.alias['@molecules'] = path.resolve(
      __dirname,
      '../src/components/02-molecules',
    );
    // @ts-ignore
    config.resolve.alias['@organisms'] = path.resolve(
      __dirname,
      '../src/components/03-organisms',
    );
    // @ts-ignore
    config.resolve.alias['@template'] = path.resolve(
      __dirname,
      '../src/components/04-template',
    );
    return config;
  },
};
export default config;
