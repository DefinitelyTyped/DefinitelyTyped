import type { CRCBufferSource } from ".";
export type { CRCBufferSource };

export const model: "ccitt";
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc16ccitt(buf: CRCBufferSource, previous?: number): number;
declare namespace crc16ccitt {
    export { crc16ccitt as unsigned, model, signed };
    export type { CRCBufferSource };
}

export default crc16ccitt;
