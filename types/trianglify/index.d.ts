declare namespace trianglify {
    interface Options {
        /** Width of pattern */
        width?: number | undefined;
        /** Height of pattern */
        height?: number | undefined;
        /** Size of the cells used to generate a randomized grid */
        cell_size?: number | undefined;
        /** how much to randomize the grid */
        variance?: number | undefined;
        /** Seed for the RNG */
        seed?: number | string | null | undefined;
        /** X color stops */
        x_colors?: false | string | string[] | undefined;
        /** Y color stops */
        y_colors?: false | string | string[] | undefined;
        /** Color space used for gradient construction & interpolation */
        color_space?: string | undefined;
        /** Color function f(x, y) that returns a color specification that is consumable by chroma-js */
        color_function?: ((x: number, y: number) => string) | null | undefined;
        /** Width of stroke. Defaults to 1.51 to fix an issue with canvas antialiasing. */
        stroke_width?: number | undefined;
        /** An array of [x,y] coordinates to trianglulate. Defaults to undefined, and points are generated. */
        points?: number[] | undefined;
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
