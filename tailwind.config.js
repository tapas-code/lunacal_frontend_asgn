/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'widget-shadow': '5.67px 5.67px 3.78px 0px #00000066',
        'rect-shadow': 'inset 0px 4.96px 12.4px 2.48px #00000040',
        'moving-tab': '13.49px 16.87px 67.47px 8.43px #0A0A0A, -8.43px -16.87px 50.6px -16.87px #485B71',
        'add-button': '0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15) inset, 0px 0px 48.91px 0px rgba(255, 255, 255, 0.05) inset, 9px 10px 7.1px 0px rgba(0, 0, 0, 0.4), -0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25)',
        'navigate-btn': '4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7',
      },
      backgroundImage: {
        'hr-gradient': `linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
        'main-gradient': 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',
        'navigate-btn': 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
        'navigate-btn-dark': 'linear-gradient(139.14deg, #1C1E21 12.4%, #0D0E0F 94.96%)',
      },
      fontFamily: {
        'jakarta-sans': '"Plus Jakarta Sans", sans-serif',
      }
    },
  },
  plugins: [],
}

