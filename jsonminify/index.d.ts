// Type definitions for jsonminify 0.4.1
// Project: https://github.com/fkei/JSON.minify
// Definitions by: Dan Homola <https://github.com/no23reason>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface MinifyFn {
    (json: string): string;
}

declare var minify: MinifyFn;

export = minify;
