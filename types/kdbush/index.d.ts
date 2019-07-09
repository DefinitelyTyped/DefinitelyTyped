// Type definitions for kdbush 3.0
// Project: https://github.com/mourner/kdbush
// Definitions by: DenisCarriere <https://github.com/DenisCarriere>
//                 Christian Scott <https://github.com/chrfrasco>
//                 Jamie Winder <https://github.com/jamiewinder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

type Get<T> = (point: T) => number;

type ArrayType =
    | typeof Int8Array
    | typeof Int16Array
    | typeof Int32Array
    | typeof Float32Array
    | typeof Float64Array
    | typeof Array;

declare class KDBush<T = readonly [number, number]> {
    constructor(points: T[], getX?: Get<T>, getY?: Get<T>, arrayType?: ArrayType);

    readonly nodeSize: number;
    readonly points: readonly T[];

    range(minX: number, minY: number, maxX: number, maxY: number): number[];
    within(x: number, y: number, r: number): number[];
}

export = KDBush;
