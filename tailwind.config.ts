import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: '#f5f0eb',
          dark: '#e8ddd4',
          deeper: '#d4c4b5',
        },
        accent: {
          DEFAULT: '#c4a68a',
          light: '#d4b89e',
          dark: '#a88a6e',
        },
        stone: {
          primary: '#333333',
          secondary: '#666666',
          light: '#999999',
        },
      },
      fontFamily: {
        serif: ['var(--font-noto-serif-jp)', 'serif'],
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
        garamond: ['var(--font-cormorant)', 'serif'],
      },
      fontSize: {
        '10xl': '10rem',
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 1s ease-out 0.2s forwards',
        'fade-in-up-delay-2': 'fadeInUp 1s ease-out 0.4s forwards',
        'fade-in-up-delay-3': 'fadeInUp 1s ease-out 0.6s forwards',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'line-expand': 'lineExpand 0.8s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(10px)', opacity: '1' },
        },
        lineExpand: {
          '0%': { width: '0' },
          '100%': { width: '3rem' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
