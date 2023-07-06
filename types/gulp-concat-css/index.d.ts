// Type definitions for gulp-concat-css 1.0
// Project: https://github.com/mariocasciaro/gulp-concat-css
// Definitions by: Igor Voropaev <https://github.com/snakeego/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
