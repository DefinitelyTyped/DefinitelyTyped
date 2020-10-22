interface Point {
    x: number;
    y: number;
}

declare function generator(
    x0: number, y0: number,
    x1: number, y1: number
): Generator<Point>;

export = generator;
