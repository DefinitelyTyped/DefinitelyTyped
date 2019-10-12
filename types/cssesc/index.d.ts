// Type definitions for cssesc 3.0
// Project: https://mths.be/cssesc
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = cssesc;

declare function cssesc(string: string, options?: Readonly<Partial<cssesc.Options>>): string;

declare namespace cssesc {
    interface Options {
        escapeEverything: boolean;
        isIdentifier: boolean;
        quotes: string;
        wrap: boolean;
    }

    const options: Options;

    const version: string;
}
