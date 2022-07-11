import type { CRCBufferSource } from '.';
export type { CRCBufferSource };

export const model: 'jam';
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crcjam(buf: CRCBufferSource, previous?: number): number;
declare namespace crcjam {
    export { model, signed, crcjam as unsigned };
    export type { CRCBufferSource };
}

export default crcjam;
