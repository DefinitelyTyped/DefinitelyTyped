// Type definitions for beautify 0.0
// Project: https://github.com/gko/beautify#readme
// Definitions by: Zhang Nan <https://github.com/anyone-developer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = beautify;

declare function beautify(content: string, options: Options): string;

interface Options {
    format: 'css' | 'json' | 'js' | 'html' | 'xml';
}
