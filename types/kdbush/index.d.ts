// Type definitions for kdbush 1.0
// Project: https://github.com/mourner/kdbush
// Definitions by: DenisCarriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Points = number[][];
type Get<T> = (p: T) => void;

declare class KDBush<T> {
  ids: number[];
  coords: number[];
  nodeSize: number;
  points: T[];
  range(minX: number, minY: number, maxX: number, maxY: number): number[];
  within(x: number, y: number, r: number): number[];
}

interface KDBushStatic {
  (points: Points): KDBush<Points>;
  <T>(points: T[], getX: Get<T>, getY: Get<T>, nodeSize?: number, ArrayType?: any): KDBush<T>;
}

declare const kdbush: KDBushStatic;
declare namespace kdbush {}
export = kdbush;
