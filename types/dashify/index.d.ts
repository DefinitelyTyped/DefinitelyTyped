// Type definitions for dashify 1.0
// Project: https://github.com/jonschlinkert/dashify
// Definitions by: Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function dashify(input: string, options?: dashify.Options): string;

declare namespace dashify {
    interface Options {
        condense?: boolean;
    }
}

export = dashify;
