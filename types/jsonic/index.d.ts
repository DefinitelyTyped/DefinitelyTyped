// Type definitions for jsonic 0.3
// Project: https://github.com/rjrodger/jsonic
// Definitions by: Rong SHen <https://github.com/jacobbubu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function jsonic(text: string): any;
declare namespace jsonic {
    interface Options {
        depth?: number | undefined;
        maxitems?: number | undefined;
        maxchars?: number | undefined;
        omit?: string[] | undefined;
        exclude?: string[] | undefined;
    }

    function stringify(val: any, opts?: Options): string;
}

export = jsonic;
