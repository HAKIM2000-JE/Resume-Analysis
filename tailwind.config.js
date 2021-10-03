module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'lato': ['lato', 'sans-serif'],
    },
    fontSize: {
      'xs': '8px',
      'sm': '12px',
      'md': '14px',
      'lg': '16px',
      'xl': '18px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '48px',
    },
    // screens: {
    //   xs: {
    //     raw: '(min-width: 375px) and (min-height: 667px)'
    //   },
    //   sm: {
    //     raw: '(min-width: 414px) and (min-height: 896px)'
    //   },
    //   md: {
    //     raw: '(min-width: 360px) and (min-height: 640px)'
    //   },
    //   lg: {
    //     raw: '(min-width: 1536px) and (min-height: 864px)'
    //   },
    //   xl: {
    //     raw: '(min-width: 1366px) and (min-height: 768px)'
    //   },
    //   xxl: {
    //     raw: '(min-width: 1920px) and (min-height: 1080px)'
    //   }  
    // }, 
    extend: {
      colors: {
        light: '#F8F8F8',
        orange: '#FB7C51',
        black: '#000000',
        custome_gray: '#515151',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
