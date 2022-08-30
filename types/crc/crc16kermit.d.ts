import type { CRCBufferSource } from '.';
export type { CRCBufferSource };

export const model: 'kermit';
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc16kermit(buf: CRCBufferSource, previous?: number): number;
declare namespace crc16kermit {
    export { model, signed, crc16kermit as unsigned };
    export type { CRCBufferSource };
}

export default crc16kermit;
