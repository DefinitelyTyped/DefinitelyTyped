declare namespace AMap {
    class Pixel {
        constructor(x: number, y: number, round?: boolean);
        getX(): number;
        getY(): number;
        equals(point: Pixel): boolean;
        toString(): string;

        // internal
        add(offset: {x: number; y: number}, round?: boolean): Pixel;
        round(): Pixel;
        floor(): Pixel;
        length(): number;
        direction(): null | number;
        toFixed(decimals?: number): this;
    }
}
