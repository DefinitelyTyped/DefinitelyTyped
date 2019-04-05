// Type definitions for npm i gulp-html-prettify
// Project: https://www.npmjs.com/package/gulp-html-prettify
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


interface HtmlPrettifyOptions {
    indent_char?: string;
    indent_size?: number;
}

interface HtmlPrettify {
    (options?: HtmlPrettifyOptions): NodeJS.ReadWriteStream;
}

declare var _htmlPrettify: HtmlPrettify;
export = _htmlPrettify;
