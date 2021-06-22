// Type definitions for bresenham 0.0
// Project: https://github.com/madbence/node-bresenham
// Definitions by: Richard <https://github.com/Chnapy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

interface Point {
    x: number;
    y: number;
}

declare function bresenham(
    x0: number, y0: number,
    x1: number, y1: number
): Point[];
declare function bresenham(
    x0: number, y0: number,
    x1: number, y1: number,
    fn: (x: number, y: number) => void
): void;

export = bresenham;
