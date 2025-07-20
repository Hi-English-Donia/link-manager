
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.9rem',
        base: '1.025rem',
      },
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        headline: ['var(--font-space-grotesk)', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'dialog-in': {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        'dialog-out': {
          from: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1)',
          },
          to: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.95)',
          },
        },
        pulse: {
          '50%': { opacity: '0.5' },
        },
        "bounce-in-left": {
          "0%": {
            transform: "translateX(0) scale(1)",
            "animation-timing-function": "cubic-bezier(0.22, 1, 0.36, 1)",
          },
          "50%": {
            transform: "translateX(1.25rem) scale(1.2)",
            "animation-timing-function": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          },
          "100%": {
            transform: "translateX(1.25rem) scale(1)",
            "animation-timing-function": "cubic-bezier(0.22, 1, 0.36, 1)",
          },
        },
        'jiggle': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'dialog-in': 'dialog-in 0.3s ease-out',
        'dialog-out': 'dialog-out 0.3s ease-out forwards',
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        "bounce-in-left": "bounce-in-left 0.4s ease-out",
        'jiggle': 'jiggle 0.4s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
