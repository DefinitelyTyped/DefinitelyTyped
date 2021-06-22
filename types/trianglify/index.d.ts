// Type definitions for trianglify 1.2
// Project: https://github.com/qrohlf/trianglify
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace trianglify {
    interface Options {
        /** Width of pattern */
        width?: number;
        /** Height of pattern */
        height?: number;
        /** Size of the cells used to generate a randomized grid */
        cell_size?: number;
        /** how much to randomize the grid */
        variance?: number;
        /** Seed for the RNG */
        seed?: number | string | null;
        /** X color stops */
        x_colors?: false | string | string[];
        /** Y color stops */
        y_colors?: false | string | string[];
        /** Color space used for gradient construction & interpolation */
        color_space?: string;
        /** Color function f(x, y) that returns a color specification that is consumable by chroma-js */
        color_function?: ((x: number, y: number) => string) | null;
        /** Width of stroke. Defaults to 1.51 to fix an issue with canvas antialiasing. */
        stroke_width?: number;
        /** An array of [x,y] coordinates to trianglulate. Defaults to undefined, and points are generated. */
        points?: number[];
    }

    interface SVGOptions {
        includeNamespace: boolean;
    }

    interface Pattern {
        opts: Options;
        polys: any;
        svg(opts?: SVGOptions): SVGElement;
        canvas(canvas?: HTMLCanvasElement): HTMLCanvasElement;
        png(): string;
    }
}

declare function Trianglify(opts?: trianglify.Options): trianglify.Pattern;

export = Trianglify;
