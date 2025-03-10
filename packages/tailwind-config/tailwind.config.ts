import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      backgroundImage: {
        'glow-conic':
          'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)'
      },
      colors: {
        // Primary colors
        'primary-blue': 'var(--primary-blue)',
        'primary-black': 'var(--primary-black)',
        'primary-white': 'var(--primary-white)',

        // Blue scale
        blue: {
          '10': 'var(--blue-10)',
          '20': 'var(--blue-20)',
          '30': 'var(--blue-30)',
          '40': 'var(--blue-40)',
          '50': 'var(--blue-50)',
          '60': 'var(--blue-60)',
          '70': 'var(--blue-70)',
          '80': 'var(--blue-80)',
          '90': 'var(--blue-90)',
          '100': 'var(--blue-100)'
        },

        // Gray scale
        gray: {
          '10': 'var(--gray-10)',
          '20': 'var(--gray-20)',
          '30': 'var(--gray-30)',
          '40': 'var(--gray-40)',
          '50': 'var(--gray-50)',
          '60': 'var(--gray-60)',
          '70': 'var(--gray-70)',
          '80': 'var(--gray-80)',
          '90': 'var(--gray-90)',
          '100': 'var(--gray-100)'
        },

        // Yellow scale
        yellow: {
          '10': 'var(--yellow-10)',
          '20': 'var(--yellow-20)',
          '30': 'var(--yellow-30)',
          '40': 'var(--yellow-40)',
          '50': 'var(--yellow-50)',
          '60': 'var(--yellow-60)',
          '70': 'var(--yellow-70)',
          '80': 'var(--yellow-80)',
          '90': 'var(--yellow-90)',
          '100': 'var(--yellow-100)'
        },

        // Green scale
        green: {
          '10': 'var(--green-10)',
          '20': 'var(--green-20)',
          '30': 'var(--green-30)',
          '40': 'var(--green-40)',
          '50': 'var(--green-50)',
          '60': 'var(--green-60)',
          '70': 'var(--green-70)',
          '80': 'var(--green-80)',
          '90': 'var(--green-90)',
          '100': 'var(--green-100)'
        },

        // Red scale
        red: {
          '10': 'var(--red-10)',
          '20': 'var(--red-20)',
          '30': 'var(--red-30)',
          '40': 'var(--red-40)',
          '50': 'var(--red-50)',
          '60': 'var(--red-60)',
          '70': 'var(--red-70)',
          '80': 'var(--red-80)',
          '90': 'var(--red-90)',
          '100': 'var(--red-100)'
        },

        // Semantic colors
        'success-green': {
          '10': 'var(--success-green-10)',
          '60': 'var(--success-green-60)'
        },
        'warning-yellow': {
          '10': 'var(--warning-yellow-10)',
          '60': 'var(--warning-yellow-60)'
        },
        'info-blue': {
          '10': 'var(--info-blue-10)',
          '50': 'var(--info-blue-50)'
        },
        'error-red': {
          '10': 'var(--error-red-10)',
          '20': 'var(--error-red-20)',
          '60': 'var(--error-red-60)',
          '70': 'var(--error-red-70)',
          '80': 'var(--error-red-80)'
        }
      }
    }
  },
  plugins: []
};
export default config;
