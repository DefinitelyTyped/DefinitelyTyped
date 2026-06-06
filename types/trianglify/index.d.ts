import { type Color, mix, type Scale } from "chroma-js";

declare function trianglify(opts?: trianglify.Options): trianglify.PatternInterface;

declare namespace trianglify {
    interface ColorFunctionInput {
        xPercent: number;
        yPercent: number;
        xScale: Scale<Color>;
        yScale: Scale<Color>;
        opts: number[][];
        random?: () => number | undefined;
    }

    type ColorFunction = (args: ColorFunctionInput) => ReturnType<typeof mix>;
    type Points = Array<[number, number]>;

    interface Options {
        /** Width of pattern */
        width?: number;
        /** Height of pattern */
        height?: number;
        /** Size of the cells used to generate a randomized grid */
        cellSize?: number;
        /** how much to randomize the grid */
        variance?: number;
        /** Seed for the RNG */
        seed?: string | null | undefined;
        /** X color stops */
        xColors?: string[];
        /** Y color stops */
        yColors?: string[];
        /** Color space used for gradient construction & interpolation */
        colorSpace?: "rgb" | "hsl" | "hsv" | "hsi" | "lab" | "oklab" | "lch" | "oklch" | "hcl" | "lrgb" | undefined;
        /** Color function f(x, y) that returns a color specification that is consumable by chroma-js */
        colorFunction?: ColorFunction;
        /** Width of stroke. Defaults to 1.51 to fix an issue with canvas antialiasing. */
        strokeWidth?: number;
        /** An array of [x,y] coordinates to triangulate. Defaults to `undefined`, and points are generated. */
        points?: Points | undefined;
        /** A boolean value to tell if trianglify should render the triangles or not. Defaults to `true` */
        fill?: boolean;
        /** The array of color combinations to pick from when using random for the `xColors` or `yColors`. */
        palette?: Record<string, string[]> | Color;
    }

    type RequiredOptions = Required<Options>;

    interface SVGOptions {
        includeNamespace?: boolean;
        coordinateDecimals?: number;
    }

    interface CanvasOptions {
        scaling?: "auto" | false;
        applyCssScaling?: boolean;
    }

    type Polys = Array<{
        vertexIndices: number[];
        centroid: {
            x: number;
            y: number;
        };
        color: Color;
    }>;

    interface PatternInterface {
        points: Points;
        polys: Polys;
        opts: RequiredOptions;
        toSVG(element?: SVGElement, opts?: SVGOptions): SVGElement;
        toCanvas(canvas?: HTMLCanvasElement, opts?: CanvasOptions): HTMLCanvasElement;
    }

    class Pattern implements PatternInterface {
        constructor(points: Points, polys: Polys, opts: RequiredOptions);
        points: Points;
        polys: Polys;
        opts: RequiredOptions;
        toSVG(element?: SVGElement, opts?: SVGOptions): SVGElement;
        toCanvas(canvas?: HTMLCanvasElement, opts?: CanvasOptions): HTMLCanvasElement;
    }

    const defaultOptions: RequiredOptions;

    const colorFunctions: {
        interpolateLinear(n: number): ColorFunction;
        sparkle(n: number): ColorFunction;
        shadows(n: number): ColorFunction;
    };

    const utils: {
        mix: typeof mix;
        colorbrewer: Record<string, string[]>;
    };
}

export as namespace trianglify;
export = trianglify;
