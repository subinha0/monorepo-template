// tailwind config is required for editor support

import sharedConfig from '@repo/tailwind-config';
import uiConfig from '@repo/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./pages/**/*.tsx', './shared/**/*.tsx', './features/**/*.tsx'],
  presets: [sharedConfig, uiConfig]
};

export default config;
