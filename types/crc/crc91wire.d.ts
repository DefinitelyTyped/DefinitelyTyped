import type { CRCBufferSource } from '.';
export type { CRCBufferSource };

export const model: 'dallas-1-wire';
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc91wire(buf: CRCBufferSource, previous?: number): number;
declare namespace crc91wire {
    export { model, signed, crc91wire as unsigned };
    export type { CRCBufferSource };
}

export default crc91wire;
