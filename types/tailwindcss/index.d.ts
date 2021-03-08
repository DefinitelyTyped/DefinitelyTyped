// Type definitions for tailwindcss 2.0
// Project: https://github.com/tailwindlabs/tailwindcss
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import type { TailwindConfig } from './tailwind-config';

declare function tailwindcss(
    config: TailwindConfig,
): {
    postcssPlugin: 'tailwindcss';
    plugins: string[];
};

export = tailwindcss;
