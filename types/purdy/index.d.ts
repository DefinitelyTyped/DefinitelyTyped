// Type definitions for purdy 3.5
// Project: https://github.com/danielb2/purdy.js
// Definitions by: YellowKirby <https://github.com/YellowKirby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function Purdy(obj: object, options: Purdy.Options): void;

declare namespace Purdy {
    // tslint:disable-next-line strict-export-declare-modifiers
    export interface Instance {
        (obj: object, options: Options): void;
        print: (...args: any[]) => void;
        stringify: (...args: any[]) => string;
    }

    // tslint:disable-next-line strict-export-declare-modifiers
    export interface Options {
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

    // tslint:disable-next-line strict-export-declare-modifiers
    export function purdy(options: Options): Instance;

    // tslint:disable-next-line strict-export-declare-modifiers
    export function stringify(obj: object, options: Options): string;
}

export = Purdy;
