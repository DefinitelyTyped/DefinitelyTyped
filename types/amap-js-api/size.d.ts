declare namespace AMap {
    class Size {
        constructor(width: number, height: number);
        getWidth(): number;
        getHeight(): number;
        toString(): string;
        // internal
        contains(size: { x: number; y: number }): boolean;
    }
}
