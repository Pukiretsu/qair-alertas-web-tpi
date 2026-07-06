/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        qair: {
          night: '#06111f',
          teal: '#14b8a6',
          mint: '#99f6e4',
          sky: '#38bdf8',
          lime: '#bef264',
        },
      },
      boxShadow: {
        soft: '0 22px 70px rgba(15, 23, 42, 0.18)',
        glow: '0 0 60px rgba(20, 184, 166, 0.24)',
      },
      backgroundImage: {
        'qair-grid':
          'linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)',
        'radial-teal': 'radial-gradient(circle at top left, rgba(20, 184, 166, 0.22), transparent 35%)',
      },
    },
  },
  plugins: [],
};
