// Type definitions for pretty 2.0
// Project: https://github.com/jonschlinkert/pretty
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PrettyOptions {
    ocd: boolean;
}

declare function pretty(str: string, options?: PrettyOptions): string;

export = pretty;
