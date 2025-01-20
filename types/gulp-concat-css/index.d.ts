/// <reference types="node"/>

interface Options {
    inlineImports?: boolean | undefined;
    rebaseUrls?: boolean | undefined;
    includePaths?: string[] | undefined;
    commonBase?: string | undefined;
}

interface Concat {
    (destFile: string, options?: Options): NodeJS.ReadWriteStream;
}

declare var concatCss: Concat;
export = concatCss;
