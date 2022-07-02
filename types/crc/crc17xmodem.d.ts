import type { CRCBufferSource } from '.';
export type { CRCBufferSource };

export const model: 'xmodem';
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc17xmodem(buf: CRCBufferSource, previous?: number): number;
declare namespace crc17xmodem {
    export { model, signed, crc17xmodem as unsigned };
    export type { CRCBufferSource };
}

export default crc17xmodem;
