/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0f',
          secondary: '#12121a',
          card: '#1a1a26',
          'card-hover': '#22222f',
        },
        accent: {
          DEFAULT: '#6c63ff',
          light: '#8b83ff',
          glow: 'rgba(108, 99, 255, 0.15)',
          'glow-strong': 'rgba(108, 99, 255, 0.3)',
        },
        txt: {
          primary: '#eaeaf0',
          secondary: '#9696a8',
          muted: '#5e5e72',
        },
        border: '#2a2a3a',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fillBar: {
          from: { width: '0%' },
          to: { width: 'var(--bar-width)' },
        },
      },
      animation: {
        'fade-up-1': 'fadeUp 0.8s ease forwards 0.2s',
        'fade-up-2': 'fadeUp 0.8s ease forwards 0.4s',
        'fade-up-3': 'fadeUp 0.8s ease forwards 0.6s',
        'fade-up-4': 'fadeUp 0.8s ease forwards 0.8s',
        'fade-up-5': 'fadeUp 0.8s ease forwards 1s',
        'fade-in': 'fadeIn 1s ease forwards 0.6s',
        'fill-bar': 'fillBar 1.5s ease forwards',
      },
    },
  },
  plugins: [],
};
