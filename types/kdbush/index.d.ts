// Type definitions for kdbush 3.0
// Project: https://github.com/mourner/kdbush
// Definitions by: DenisCarriere <https://github.com/DenisCarriere>
//                 SangYeob Bono Yu <https://github.com/deminoth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Points = number[][];
type Get<T> = (point: T) => number;
type ArrayType =
  typeof Int8Array
  | typeof Int16Array
  | typeof Int32Array
  | typeof Float32Array
  | typeof Float64Array
  | typeof Array;

declare class KDBush<T> {
    constructor(points: Points);
    constructor(points: T[], getX: Get<T>, getY: Get<T>, nodeSize?: number, ArrayType?: ArrayType);
    ids: number[];
    coords: number[];
    nodeSize: number;
    points: T[];
    range(minX: number, minY: number, maxX: number, maxY: number): number[];
    within(x: number, y: number, r: number): number[];
}

export = KDBush;

export as namespace KDBush;
