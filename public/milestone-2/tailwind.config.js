/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable class-based dark mode toggle
  darkMode: 'class',

  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {
      // ─── Custom Color Palette ──────────────────────────────────────
      colors: {
        // Primary brand (indigo-violet gradient base)
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        // Accent purple
        accent: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        // Dark-mode surface layers
        dark: {
          bg:       '#0f172a',   // page background
          surface:  '#1e293b',   // card / panel surface
          elevated: '#293548',   // elevated elements
          border:   '#334155',   // borders
          muted:    '#475569',   // muted text
        },
        // Light-mode surface layers
        light: {
          bg:       '#f1f5f9',
          surface:  '#ffffff',
          elevated: '#f8fafc',
          border:   '#e2e8f0',
          muted:    '#94a3b8',
        },
        // Status / semantic
        success: { light: '#dcfce7', DEFAULT: '#22c55e', dark: '#15803d' },
        warning: { light: '#fef9c3', DEFAULT: '#eab308', dark: '#a16207' },
        danger:  { light: '#fee2e2', DEFAULT: '#ef4444', dark: '#b91c1c' },
        info:    { light: '#dbeafe', DEFAULT: '#3b82f6', dark: '#1d4ed8' },
      },

      // ─── Typography ────────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },

      // ─── Spacing & Sizing ──────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },

      // ─── Animations ────────────────────────────────────────────────
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-ring': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(99,102,241,0.4)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(99,102,241,0)' },
        },
      },
      animation: {
        'fade-in':    'fade-in 0.3s ease-out both',
        'slide-in':   'slide-in 0.3s ease-out both',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },

      // ─── Border Radius ─────────────────────────────────────────────
      borderRadius: {
        'xl':  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      // ─── Box Shadows ───────────────────────────────────────────────
      boxShadow: {
        'card':       '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
        'card-hover': '0 10px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.1)',
        'glow':       '0 0 20px rgba(99,102,241,0.3)',
        'glow-sm':    '0 0 10px rgba(99,102,241,0.2)',
      },
    },
  },

  plugins: [],
};
