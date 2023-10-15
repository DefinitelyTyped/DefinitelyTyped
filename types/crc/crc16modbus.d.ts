import type { CRCBufferSource } from ".";
export type { CRCBufferSource };

export const model: "crc-16-modbus";
export function signed(buf: CRCBufferSource, previous?: number): number;

declare function crc16modbus(buf: CRCBufferSource, previous?: number): number;
declare namespace crc16modbus {
    export { crc16modbus as unsigned, model, signed };
    export type { CRCBufferSource };
}

export default crc16modbus;
