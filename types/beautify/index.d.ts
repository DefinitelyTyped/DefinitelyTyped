// Type definitions for beautify 0.0
// Project: https://github.com/gko/beautify#readme
// Definitions by: Zhang Nan <https://github.com/anyone-developer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const c: beautify;
export = c;

interface beautify {
    (content: string, options: options): string;
}

// format could be 'css', 'json', 'js', 'html', 'xml'
interface options {
    format: Required<string>;
}
