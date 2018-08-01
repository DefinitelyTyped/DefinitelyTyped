// Type definitions for kdbush 1.0
// Project: https://github.com/mourner/kdbush
// Definitions by: DenisCarriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Points = number[][];
type Get<T> = (point: T) => number;
type ArrayType = typeof Int32Array | typeof Array;

declare function kdbush(points: Points): kdbush.KDBush<Points>;
declare function kdbush<T>(points: T[], getX: Get<T>, getY: Get<T>, nodeSize?: number, ArrayType?: ArrayType): kdbush.KDBush<T>;
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
