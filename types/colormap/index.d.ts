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
