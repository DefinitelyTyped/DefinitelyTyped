// Type definitions for babar 0.2
// Project: https://github.com/stephan83/babar#readme
// Definitions by: Matt Bachmann <https://github.com/Bachmann1234>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type color = "yellow" | "cyan" | "white" | "magenta" | "green" | "red" | "grey" | "blue";

interface Options {
    caption?: string | undefined;
    color?: color | "ascii" | undefined;
    grid?: color | undefined;
    width?: number | undefined;
    height?: number | undefined;
    xFractions?: number | undefined;
    yFractions?: number | undefined;
    minX?: number | undefined;
    maxX?: number | undefined;
    minY?: number | undefined;
    maxY?: number | undefined;
}
declare function babar(points: ReadonlyArray<[number, number]>, options?: Options): string;

export = babar;
