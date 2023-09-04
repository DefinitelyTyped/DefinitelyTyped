// Type definitions for colormap 2.3
// Project: https://github.com/bpostlethwaite/colormap#readme
// Definitions by: Teddy De Puy <https://github.com/ruxpendp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function createColormap<T extends "hex" | "rgbaString" | "rgba" | "float">(spec?: {
    alpha?: number | number[];
    colormap?:
        | string
        | Array<{
            index: number;
            rgb: [number, number, number] | [number, number, number, number];
        }>;
    format?: T;
    nshades?: number;
}): T extends "rgba" | "float" ? Array<[number, number, number, number]> : string[];

export = createColormap;
