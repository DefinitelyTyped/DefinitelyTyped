// Type definitions for postcss-prefix-selector 1.15
// Project: https://github.com/RadValentin/postcss-prefix-selector
// Definitions by: robertmaier <https://github.com/robertmaier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/types/postcss-prefix-selector

interface Options {
    prefix?: string | undefined;
    exclude?: ReadonlyArray<string | RegExp> | undefined;
    ignoreFiles?: ReadonlyArray<string | RegExp> | undefined;
    includeFiles?: ReadonlyArray<string | RegExp> | undefined;
    transform?: ((prefix: Readonly<string>, selector: Readonly<string>, prefixedSelector: Readonly<string>, file: Readonly<string>) => string) | undefined;
}

declare function postcssPrefixSelector(options: Readonly<Options>): (root: any) => string | undefined;

export = postcssPrefixSelector;
