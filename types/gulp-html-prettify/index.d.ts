// Type definitions for npm i gulp-html-prettify 0.0
// Project: https://www.npmjs.com/package/gulp-html-prettify
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

interface GulpHtmlPrettifyOptions {
    indent_char?: string | undefined;
    indent_size?: number | undefined;
}

interface GulpHtmlPrettify {
    (options?: GulpHtmlPrettifyOptions): NodeJS.ReadWriteStream;
}

declare var gulpHtmlPrettify: GulpHtmlPrettify;
export = gulpHtmlPrettify;
