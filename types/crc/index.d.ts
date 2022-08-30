// Type definitions for crc 3.8
// Project: https://github.com/alexgorbatchev/node-crc/
// Definitions by: Jianrong Yu <https://github.com/YuJianrong>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export type CRCBufferSource =
    | string // force newline
    | ArrayBufferLike
    | ArrayLike<number>
    | Buffer
    | NodeJS.TypedArray;

import crc1 from './crc1';
import crc8 from './crc8';
import crc81wire from './crc81wire';
import crc16 from './crc16';
import crc16ccitt from './crc16ccitt';
import crc16modbus from './crc16modbus';
import crc16xmodem from './crc16xmodem';
import crc16kermit from './crc16kermit';
import crc24 from './crc24';
import crc32 from './crc32';
import crcjam from './crcjam';

export {
    crc1, // force newline
    crc8,
    crc81wire,
    crc16,
    crc16ccitt,
    crc16modbus,
    crc16xmodem,
    crc16kermit,
    crc24,
    crc32,
    crcjam,
};

export default crc;
declare namespace crc {
    export type { CRCBufferSource };
    export {
        crc1, // force newline
        crc8,
        crc81wire,
        crc16,
        crc16ccitt,
        crc16modbus,
        crc16xmodem,
        crc16kermit,
        crc24,
        crc32,
        crcjam,
    };
}
