import type { CRCBufferSource } from '.';
export type { CRCBufferSource };

export const model: 'kermit';
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc17kermit(buf: CRCBufferSource, previous?: number): number;
declare namespace crc17kermit {
    export { model, signed, crc17kermit as unsigned };
    export type { CRCBufferSource };
}

export default crc17kermit;
