import type { CRCBufferSource } from ".";
export type { CRCBufferSource };

export const model: "crc-32";
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc32(buf: CRCBufferSource, previous?: number): number;
declare namespace crc32 {
    export { crc32 as unsigned, model, signed };
    export type { CRCBufferSource };
}

export default crc32;
