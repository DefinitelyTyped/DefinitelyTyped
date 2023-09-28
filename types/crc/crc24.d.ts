import type { CRCBufferSource } from ".";
export type { CRCBufferSource };

export const model: "crc-24";
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc24(buf: CRCBufferSource, previous?: number): number;
declare namespace crc24 {
    export { crc24 as unsigned, model, signed };
    export type { CRCBufferSource };
}

export default crc24;
