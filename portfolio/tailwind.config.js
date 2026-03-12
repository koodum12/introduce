/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      colors: {
        navy: '#0f172a',
        'navy-light': '#1e293b',
        accent: '#2563eb',
        'accent-light': '#3b82f6',
        green: '#22c55e',
        muted: '#94a3b8',
        surface: '#f1f5f9',
        card: '#ffffff',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fillBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--target-width)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
        fillBar: 'fillBar 1s ease forwards',
      },
    },
  },
  plugins: [],
}
