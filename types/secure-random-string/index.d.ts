// Type definitions for secure-random-string 1.1
// Project: https://github.com/S2-/securerandomstring
// Definitions by: Dominik Korsa <https://github.com/dominik-korsa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function srs(options?: srs.Options): string;
declare function srs(cb: srs.Callback): void;
declare function srs(options: srs.Options, cb: srs.Callback): void;

declare namespace srs {
    interface Options {
        length?: number;
        alphanumeric?: boolean;
    }

    type Callback = (error: Error | null, result?: string) => void;
}

export = srs;
