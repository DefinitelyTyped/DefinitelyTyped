import type { CRCBufferSource } from '.';
export type { CRCBufferSource };

export const model: 'dallas-1-wire';
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc81wire(buf: CRCBufferSource, previous?: number): number;
declare namespace crc81wire {
    export { model, signed, crc81wire as unsigned };
    export type { CRCBufferSource };
}

export default crc81wire;
