import type { TailwindConfig } from 'tailwindcss/tailwind-config';
import plugin from 'tailwindcss/plugin';

const tailwindConfig: TailwindConfig = {
    content: ['testing'],
    darkMode: 'class',
    theme: {
        gap: {
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px',
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                '.skew-10deg': {
                    transform: 'skewY(-10deg)',
                },
            });
        }),
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    ['.new-flex-ganpp']: (value: any) => ({
                        gap: value,
                    }),
                },
                { values: theme('gap') },
            );
        }),
        plugin.withOptions(options => {
            return ({ addComponents }) => {
                const className = options.className ?? 'markdown';

                addComponents({
                    [`.${className}`]: {
                        // ...
                    },
                });
            };
        })({ className: 'wsiwyg' }),
        plugin.withOptions(options => {
            return ({ addComponents }) => {
                const className = options.className ?? 'markdown';

                addComponents({
                    [`.${className}`]: {
                        // ...
                    },
                });
            };
        }),
        plugin.withOptions(options => {
            return ({ addComponents }) => {
                const className = options.className ?? 'markdown';

                addComponents([
                    {
                        [`.${className}`]: {
                            // ...
                        },
                    },
                ]);
            };
        }),
    ],
};
