// Type definitions for xxhashjs 0.1
// Project: https://github.com/pierrec/js-xxhash
// Definitions by: Dibyo Majumdar <https://github.com/mDibyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace XXH;

export interface HashObject {
  init(seed: number): this;
  update(data: string | ArrayBuffer): this;
  digest(): number;
}

export interface HashInterface {
  (seed?: number): HashObject;
  (data: string | ArrayBuffer, seed: number): number;
}

export const h32: HashInterface;
export const h64: HashInterface;

declare const defaultExport: { h32: typeof h32, h64: typeof h64 };
export default defaultExport;
