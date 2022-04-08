// Type definitions for babar 0.2
// Project: https://github.com/stephan83/babar#readme
// Definitions by: Matt Bachmann <https://github.com/Bachmann1234>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type color = 'yellow' | 'cyan' | 'white' | 'magenta' | 'green' | 'red' | 'grey' | 'blue';

interface Options {
    caption?: string;
    color?: color | 'ascii';
    grid?: color;
    width?: number;
    height?: number;
    xFractions?: number;
    yFractions?: number;
    minX?: number;
    maxX?: number;
    minY?: number;
    maxY?: number;
}
declare function babar(points: ReadonlyArray<[number, number]>, options?: Options): string;

export = babar;
