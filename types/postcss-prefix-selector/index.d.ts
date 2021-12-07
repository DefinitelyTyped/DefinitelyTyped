// Type definitions for postcss-prefix-selector 1.14
// Project: https://github.com/RadValentin/postcss-prefix-selector
// Definitions by: robertmaier <https://github.com/robertmaier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/types/postcss-prefix-selector

import type { Root } from 'postcss';

interface Options {
    prefix?: string;
    exclude?: ReadonlyArray<string | RegExp>;
    ignoreFiles?: ReadonlyArray<string | RegExp>;
    includeFiles?: ReadonlyArray<string | RegExp>;
    transform?: (prefix: Readonly<string>, selector: Readonly<string>, prefixedSelector?: Readonly<string>, file?: Readonly<string>) => string;
}

declare function postcssPrefixSelector(options: Readonly<Options>): (root: Root) => string | undefined;

export = postcssPrefixSelector;
