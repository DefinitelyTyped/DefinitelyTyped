interface Point {
    x: number;
    y: number;
}

declare function bresenham(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
): Point[];
declare function bresenham(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    fn: (x: number, y: number) => void,
): void;

export = bresenham;
