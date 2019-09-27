// Type definitions for hasbin 1.2
// Project: https://github.com/springernature/hasbin
// Definitions by: Micha Streppel <https://github.com/michastreppel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function hasbin(bin: string, resultFunction: (result: boolean) => void): void;

declare namespace hasbin {
    function sync(bin: string): boolean;

    function all(bins: string[], resultFunction: (result: boolean) => void): void;
    namespace all {
        function sync(bins: string[]): boolean;
    }

    function some(bins: string[], resultFunction: (result: boolean) => void): void;
    namespace some {
        function sync(bins: string[]): boolean;
    }

    function first(bins: string[], resultFunction: (result: string | false) => void): void;
    namespace first {
        function sync(bins: string[]): string | false;
    }
}

// tslint:disable-next-line no-declare-current-package no-single-declare-module
declare module "hasbin" {
    export = hasbin;
}
