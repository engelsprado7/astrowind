import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        green: {
          DEFAULT: "rgb(var(--color-green-500) / <alpha-value>)",
          70: "rgb(var(--color-green-70) / <alpha-value>)",
          100: "rgb(var(--color-green-100) / <alpha-value>)",
          200: "rgb(var(--color-green-200) / <alpha-value>)",
          300: "rgb(var(--color-green-300) / <alpha-value>)",
          400: "rgb(var(--color-green-400) / <alpha-value>)",
          500: "rgb(var(--color-green-500) / <alpha-value>)",
          600: "rgb(var(--color-green-600) / <alpha-value>)",
          700: "rgb(var(--color-green-700) / <alpha-value>)",
          800: "rgb(var(--color-green-800) / <alpha-value>)",
          900: "rgb(var(--color-green-900) / <alpha-value>)",
          950: "rgb(var(--color-green-950) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
