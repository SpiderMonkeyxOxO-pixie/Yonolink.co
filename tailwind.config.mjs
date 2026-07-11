/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
      },
      colors: {
        void: '#05070A',
      },
      animation: {
        'gradient-x':  'gradient-x 4s ease infinite',
        'ticker':      'ticker-scroll 30s linear infinite',
        'cat-slide':   'cat-slide 24s linear infinite',
        'ping-slow':   'ping 2s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%,100%': { backgroundPosition: '0% 50%'   },
          '50%':     { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
      boxShadow: {
        'glow-gold':  '0 0 30px rgba(250,204,21,0.25), 0 4px 20px rgba(249,115,22,0.15)',
        'glow-gold-lg': '0 0 50px rgba(250,204,21,0.4), 0 8px 30px rgba(249,115,22,0.2)',
        'glow-violet': '0 0 30px rgba(139,92,246,0.25)',
        'card':        '0 8px 32px rgba(0,0,0,0.5)',
        'card-hover':  '0 24px 64px rgba(0,0,0,0.65)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body':     '#9ca3af',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links':    '#facc15',
            '--tw-prose-code':     '#facc15',
            '--tw-prose-pre-bg':   '#0d1117',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        yono: {
          'primary':          '#FACC15',
          'primary-content':  '#0A0A0A',
          'secondary':        '#F97316',
          'secondary-content':'#0A0A0A',
          'accent':           '#8B5CF6',
          'accent-content':   '#ffffff',
          'neutral':          '#1F2937',
          'neutral-content':  '#9CA3AF',
          'base-100':         '#05070A',
          'base-200':         '#0D1117',
          'base-300':         '#161B22',
          'base-content':     '#FFFFFF',
          'info':             '#3B82F6',
          'success':          '#22C55E',
          'warning':          '#F59E0B',
          'error':            '#EF4444',
        },
      },
    ],
    darkTheme: 'yono',
    base: false,
    styled: true,
    utils: true,
    logs: false,
  },
};
