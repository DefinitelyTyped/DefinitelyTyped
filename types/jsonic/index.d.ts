// Type definitions for jsonic 0.3
// Project: https://github.com/rjrodger/jsonic
// Definitions by: Rong SHen <https://github.com/jacobbubu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function jsonic(text: string): any;
declare namespace jsonic {
    interface Options {
        depth?: number;
        maxitems?: number;
        maxchars?: number;
        omit?: string[];
        exclude?: string[];
    }

    function stringify(val: any, opts?: Options): string;
}

export = jsonic;
