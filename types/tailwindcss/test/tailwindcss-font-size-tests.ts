import type { TailwindConfig } from 'tailwindcss/tailwind-config';

// https://tailwindcss.com/docs/font-size#using-custom-values
const tailwindConfig: TailwindConfig = {
    theme: {
        fontSize: {
            sizeOnly: '1rem',
            withLineHeight: ['1rem', '1.5rem'],
            withOptions: ['1rem', { lineHeight: '1.5rem' }],
            withFullOptions: ['1rem', { lineHeight: '1.5rem', letterSpacing: '1rem' }],
            withEmptyOptions: ['1rem', {}],
        },
    },
};
