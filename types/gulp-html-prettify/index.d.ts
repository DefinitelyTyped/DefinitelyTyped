// Type definitions for npm i gulp-html-prettify 0.0
// Project: https://www.npmjs.com/package/gulp-html-prettify
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

interface GulpHtmlPrettifyOptions {
    indent_char?: string;
    indent_size?: number;
}

interface GulpHtmlPrettify {
    (options?: GulpHtmlPrettifyOptions): NodeJS.ReadWriteStream;
}

declare var gulpHtmlPrettify: GulpHtmlPrettify;
export = gulpHtmlPrettify;
