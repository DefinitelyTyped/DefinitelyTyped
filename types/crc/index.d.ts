/// <reference types="node" />

export type CRCBufferSource =
    | string // force newline
    | ArrayBufferLike
    | ArrayLike<number>
    | Buffer
    | NodeJS.TypedArray;

import crc1 from "./crc1";
import crc16 from "./crc16";
import crc16ccitt from "./crc16ccitt";
import crc16kermit from "./crc16kermit";
import crc16modbus from "./crc16modbus";
import crc16xmodem from "./crc16xmodem";
import crc24 from "./crc24";
import crc32 from "./crc32";
import crc8 from "./crc8";
import crc81wire from "./crc81wire";
import crcjam from "./crcjam";

export {
    crc1, // force newline
    crc16,
    crc16ccitt,
    crc16kermit,
    crc16modbus,
    crc16xmodem,
    crc24,
    crc32,
    crc8,
    crc81wire,
    crcjam,
};

export default crc;
declare namespace crc {
    export type { CRCBufferSource };
    export {
        crc1, // force newline
        crc16,
        crc16ccitt,
        crc16kermit,
        crc16modbus,
        crc16xmodem,
        crc24,
        crc32,
        crc8,
        crc81wire,
        crcjam,
    };
}
