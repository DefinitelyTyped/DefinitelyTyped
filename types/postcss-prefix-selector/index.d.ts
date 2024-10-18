import { Root } from "postcss";

interface Options {
    prefix?: string | undefined;
    exclude?: ReadonlyArray<string | RegExp> | undefined;
    ignoreFiles?: ReadonlyArray<string | RegExp> | undefined;
    includeFiles?: ReadonlyArray<string | RegExp> | undefined;
    transform?:
        | ((
            prefix: Readonly<string>,
            selector: Readonly<string>,
            prefixedSelector: Readonly<string>,
            file: Readonly<string>,
        ) => string)
        | undefined;
}

declare function postcssPrefixSelector(options: Readonly<Options>): (root: Root) => void;

export = postcssPrefixSelector;
