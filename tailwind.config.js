export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 40px rgba(56, 189, 248, 0.18), 0 0 100px rgba(16, 185, 129, 0.08)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(16,185,129,0.16), transparent 24%)',
      },
    },
  },
  plugins: [],
};
