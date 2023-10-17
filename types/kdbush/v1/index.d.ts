type Points = number[][];
type Get<T> = (point: T) => number;
type ArrayType =
    | typeof Int8Array
    | typeof Int16Array
    | typeof Int32Array
    | typeof Float32Array
    | typeof Float64Array
    | typeof Array;

declare function kdbush(points: Points): kdbush.KDBush<Points>;
declare function kdbush<T>(
    points: T[],
    getX: Get<T>,
    getY: Get<T>,
    nodeSize?: number,
    ArrayType?: ArrayType,
): kdbush.KDBush<T>;
declare namespace kdbush {
    class KDBush<T> {
        ids: number[];
        coords: number[];
        nodeSize: number;
        points: T[];
        range(minX: number, minY: number, maxX: number, maxY: number): number[];
        within(x: number, y: number, r: number): number[];
    }
}
export = kdbush;
