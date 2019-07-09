// Type definitions for kdbush 3.0
// Project: https://github.com/mourner/kdbush
// Definitions by: DenisCarriere <https://github.com/DenisCarriere>
//                 Christian Scott <https://github.com/chrfrasco>
//                 Jamie Winder <https://github.com/jamiewinder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Get<T> = (point: T) => number;

type ArrayType =
    | typeof Int8Array
    | typeof Int16Array
    | typeof Int32Array
    | typeof Float32Array
    | typeof Float64Array
    | typeof Array;

declare class KDBush<T = readonly [number, number]> {
    public constructor(points: Array<T>, getX?: Get<T>, getY?: Get<T>, arrayType?: ArrayType);

    public readonly nodeSize: number;
    public readonly points: ReadonlyArray<T>;

    public range(minX: number, minY: number, maxX: number, maxY: number): Array<number>;
    public within(x: number, y: number, r: number): Array<number>;
}

export = KDBush;
