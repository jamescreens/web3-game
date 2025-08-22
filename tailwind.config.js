const config = {
  important:true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-purple":"linear-gradient(90deg, #5543D1 0%, #553DFF 100%)",
        "gradient-blue":"linear-gradient(90deg, #5543D1 0%, #553DFF 100%)",
        "gradient-orange":"linear-gradient(90deg, #F8672C 0%, #FF7036 100%)",
        'radial-gradient': 'radial-gradient(66.05% 106.4% at 75.68% 45.96%, #221D24 0%, #151316 100%)',
        'gradient-black' : 'radial-gradient(52.06% 52.06% at 34.12% 38.38%, #222222 0%, #151316 100%)'

      },
      colors: {
        customDark: '#1d1c1d',
      },
      borderImageSource: {
        'conic-gradient': 'conic-gradient(from 41.42deg at 46.85% 40.69%, #5543D1 0deg, #F8672C 223.43deg, #5543D1 360deg)',
      },
      rotate: {
        '-135': '-135deg',
        '135': '135deg',
      },
      spacing: {
        '120': '30rem',
        '127': '31.75rem',
        '240': '60rem',
        '250': '62.5rem',
      }
    },
  },
  plugins: [],
};
export default config;
