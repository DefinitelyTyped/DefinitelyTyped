import type { CRCBufferSource } from '.';
export type { CRCBufferSource };

export const model: 'crc-16-modbus';
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc17modbus(buf: CRCBufferSource, previous?: number): number;
declare namespace crc17modbus {
    export { model, signed, crc17modbus as unsigned };
    export type { CRCBufferSource };
}

export default crc17modbus;
