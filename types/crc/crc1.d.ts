import type { CRCBufferSource } from ".";
export type { CRCBufferSource };

export const model: "crc1";
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc1(buf: CRCBufferSource, previous?: number): number;
declare namespace crc1 {
    export { crc1 as unsigned, model, signed };
    export type { CRCBufferSource };
}

export default crc1;
