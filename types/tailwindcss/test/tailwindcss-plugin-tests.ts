import type { TailwindConfig } from 'tailwindcss/tailwind-config';
import plugin from 'tailwindcss/plugin';

const tailwindConfig: TailwindConfig = {
    content: ['testing'],
    darkMode: 'class',
    theme: {},
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                '.skew-10deg': {
                    transform: 'skewY(-10deg)',
                },
            });
        }),
    ],
};
