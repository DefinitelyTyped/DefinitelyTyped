// Type definitions for purdy 3.5
// Project: https://github.com/danielb2/purdy.js
// Definitions by: YellowKirby <https://github.com/YellowKirby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function Purdy(obj: object, options: Purdy.Options): void;

declare namespace Purdy {
    interface Instance {
        (obj: object, options: Options): void;
        print: (...args: any[]) => void;
        stringify: (...args: any[]) => string;
    }

    interface Options {
        depth?: number|null;
        plain?: boolean;
        json?: boolean;
        path?: boolean;
        proto?: boolean;
        indent?: number;
        align?: 'left'|'right';
        arrayIndex?: boolean;
        pathPrefix?: string;
    }

    function purdy(options: Options): Instance;
    function stringify(obj: object, options: Options): string;
}

export = Purdy;
