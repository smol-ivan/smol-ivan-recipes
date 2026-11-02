/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'var(--color-surface)',
          dim: 'var(--color-surface-dim)',
          bright: 'var(--color-surface-bright)',
          'container-lowest': 'var(--color-surface-container-lowest)',
          'container-low': 'var(--color-surface-container-low)',
          container: 'var(--color-surface-container)',
          'container-high': 'var(--color-surface-container-high)',
          'container-highest': 'var(--color-surface-container-highest)',
          variant: 'var(--color-surface-variant)',
          tint: 'var(--color-surface-tint)',
        },
        'on-surface': {
          DEFAULT: 'var(--color-on-surface)',
          variant: 'var(--color-on-surface-variant)',
        },
        'inverse-surface': 'var(--color-inverse-surface)',
        'inverse-on-surface': 'var(--color-inverse-on-surface)',
        outline: {
          DEFAULT: 'var(--color-outline)',
          variant: 'var(--color-outline-variant)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          container: 'var(--color-primary-container)',
          fixed: 'var(--color-primary-fixed)',
          'fixed-dim': 'var(--color-primary-fixed-dim)',
        },
        'on-primary': {
          DEFAULT: 'var(--color-on-primary)',
          container: 'var(--color-on-primary-container)',
          fixed: 'var(--color-on-primary-fixed)',
          'fixed-variant': 'var(--color-on-primary-fixed-variant)',
        },
        'inverse-primary': 'var(--color-inverse-primary)',
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          container: 'var(--color-secondary-container)',
          fixed: 'var(--color-secondary-fixed)',
          'fixed-dim': 'var(--color-secondary-fixed-dim)',
        },
        'on-secondary': {
          DEFAULT: 'var(--color-on-secondary)',
          container: 'var(--color-on-secondary-container)',
          fixed: 'var(--color-on-secondary-fixed)',
          'fixed-variant': 'var(--color-on-secondary-fixed-variant)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary)',
          container: 'var(--color-tertiary-container)',
          fixed: 'var(--color-tertiary-fixed)',
          'fixed-dim': 'var(--color-tertiary-fixed-dim)',
        },
        'on-tertiary': {
          DEFAULT: 'var(--color-on-tertiary)',
          container: 'var(--color-on-tertiary-container)',
          fixed: 'var(--color-on-tertiary-fixed)',
          'fixed-variant': 'var(--color-on-tertiary-fixed-variant)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          container: 'var(--color-error-container)',
        },
        'on-error': {
          DEFAULT: 'var(--color-on-error)',
          container: 'var(--color-on-error-container)',
        },
        background: 'var(--color-background)',
        'on-background': 'var(--color-on-background)',
      },
      fontFamily: {
        sans: ['Geist', '"Geist Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      spacing: {
        gutter: 'var(--spacing-gutter)',
        margin: 'var(--spacing-margin)',
        'space-xs': 'var(--spacing-space-xs)',
        'space-sm': 'var(--spacing-space-sm)',
        'space-md': 'var(--spacing-space-md)',
        'space-lg': 'var(--spacing-space-lg)',
        'space-xl': 'var(--spacing-space-xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: '0.5rem',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      fontSize: {
        'headline-xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.04em', fontWeight: '400' }],
        'headline-xl-mobile': ['28px', { lineHeight: '34px', letterSpacing: '-0.03em', fontWeight: '400' }],
        'headline-lg': ['28px', { lineHeight: '36px', letterSpacing: '-0.03em', fontWeight: '400' }],
        'headline-lg-mobile': ['22px', { lineHeight: '28px', letterSpacing: '-0.02em', fontWeight: '400' }],
        'headline-md': ['20px', { lineHeight: '28px', letterSpacing: '-0.02em', fontWeight: '400' }],
        'body-lg': ['17px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.04em', fontWeight: '400' }],
        'label-sm': ['10px', { lineHeight: '14px', letterSpacing: '0.06em', fontWeight: '400' }],
      }
    },
  },
  plugins: [],
};
