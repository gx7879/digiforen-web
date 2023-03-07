/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'success-medium': '#2EB774',
        'success-light': '#F3FDF6',
        'primary-dark': '#009DC7',
        'primary-medium': '#21BAE3',
        'primary-light': '#EDF9FF',
        'netural-lighter': '#DEE2EB',
        'purple-medium': '#470781',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};
