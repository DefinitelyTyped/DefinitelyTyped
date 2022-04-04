// Type definitions for tailwindcss 3.0
// Project: https://github.com/tailwindlabs/tailwindcss
// Definitions by: Dolan Miu <https://github.com/dolanmiu>,
//                 Dylan Vann <https://github.com/DylanVann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import type { TailwindConfig } from './tailwind-config';

declare function tailwindcss(config?: TailwindConfig | string): {
    postcssPlugin: 'tailwindcss';
    plugins: string[];
};

declare namespace tailwindcss {
    let postcss: true;
}

export = tailwindcss;
