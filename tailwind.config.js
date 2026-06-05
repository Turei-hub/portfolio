/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'marquee-scroll': 'marquee-scroll 20s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
      keyframes: {
        'marquee-scroll': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        'pulse-slow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(16,185,129,0.4)' },
          '50%':       { boxShadow: '0 0 30px rgba(16,185,129,0.8)' },
        },
      },
    },
  },
  plugins: [],
}
