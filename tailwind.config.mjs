/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:      '#F7F3EC',
        'cream-dark': '#EDE7DB',
        navy:       '#1C3454',
        'navy-light': '#2A4A72',
        terracotta: '#C4653B',
        sage:       '#7B9E87',
        mustard:    '#D4A827',
        charcoal:   '#2C2C2C',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        oia: {
          css: {
            '--tw-prose-body':        theme('colors.charcoal'),
            '--tw-prose-headings':    theme('colors.navy'),
            '--tw-prose-links':       theme('colors.terracotta'),
            '--tw-prose-bold':        theme('colors.charcoal'),
            '--tw-prose-counters':    theme('colors.sage'),
            '--tw-prose-bullets':     theme('colors.sage'),
            '--tw-prose-hr':          theme('colors.cream-dark'),
            '--tw-prose-quotes':      theme('colors.navy'),
            '--tw-prose-quote-borders': theme('colors.terracotta'),
            '--tw-prose-code':        theme('colors.navy'),
            '--tw-prose-pre-bg':      theme('colors.cream-dark'),
            maxWidth: '72ch',
            fontSize: '1.125rem',
            lineHeight: '1.85',
            h1: { fontFamily: theme('fontFamily.display').join(', '), fontWeight: '400', letterSpacing: '-0.01em' },
            h2: { fontFamily: theme('fontFamily.display').join(', '), fontWeight: '400' },
            h3: { fontFamily: theme('fontFamily.display').join(', '), fontWeight: '600' },
            p: { marginTop: '1.5em', marginBottom: '1.5em' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
