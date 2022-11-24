import type { CRCBufferSource } from '.';
export type { CRCBufferSource };

export const model: 'xmodem';
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc16xmodem(buf: CRCBufferSource, previous?: number): number;
declare namespace crc16xmodem {
    export { model, signed, crc16xmodem as unsigned };
    export type { CRCBufferSource };
}

export default crc16xmodem;
