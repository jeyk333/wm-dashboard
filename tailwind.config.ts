import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        border: 'var(--border)',
        text: 'var(--font)',
        'text-light': 'var(--font-light)',
        'text-dark': 'var(--font-dark)',
        error: 'var(--error)',
        success: 'var(--success)',
        'table-header': 'var(--table-header)',
      },
      boxShadow: {
        section:
          '0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 5px 22px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        forecasts: "url('/images/forecasts-bg.svg')",
      },
    },
  },
} satisfies Config;
