// eslint-disable-next-line @typescript-eslint/no-var-requires
const { addDynamicIconSelectors } = require('@iconify/tailwind');

import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        topography: "url('/assets/bg/topography.svg')",
      },
    },
  },
  plugins: [
    addDynamicIconSelectors({
      prefix: 'i',
    }),
  ],
};
export default config;
