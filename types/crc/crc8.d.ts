import type { CRCBufferSource } from ".";
export type { CRCBufferSource };

export const model: "crc-8";
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc8(buf: CRCBufferSource, previous?: number): number;
declare namespace crc8 {
    export { crc8 as unsigned, model, signed };
    export type { CRCBufferSource };
}

export default crc8;
