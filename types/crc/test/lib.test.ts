import * as fs from 'fs';
import * as crc from 'crc/lib';

// @ts-expect-error
crc.default;

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(t: T): T;

// tests move from the readme of the module

crc.crc32('hello').toString(16);
// "3610a686"

crc.crc32(fs.readFileSync('README.md', 'utf8')).toString(16);
// "127ad531"
crc.crc32(fs.readFileSync('README.md')).toString(16);
// "127ad531"

let value = crc.crc32('one');
value = crc.crc32('two', value);
value = crc.crc32('three', value);
value.toString(16);

// `crc.*`:
expectType<typeof crc.crc1>(expectType<typeof import('crc/lib/crc1')>(crc.crc1));
expectType<typeof crc.crc8>(expectType<typeof import('crc/lib/crc8')>(crc.crc8));
expectType<typeof crc.crc81wire>(expectType<typeof import('crc/lib/crc8_1wire')>(crc.crc81wire));

expectType<typeof crc.crc16>(expectType<typeof import('crc/lib/crc16')>(crc.crc16));
expectType<typeof crc.crc16ccitt>(expectType<typeof import('crc/lib/crc16_ccitt')>(crc.crc16ccitt));
expectType<typeof crc.crc16kermit>(expectType<typeof import('crc/lib/crc16_kermit')>(crc.crc16kermit));
expectType<typeof crc.crc16modbus>(expectType<typeof import('crc/lib/crc16_modbus')>(crc.crc16modbus));
expectType<typeof crc.crc16xmodem>(expectType<typeof import('crc/lib/crc16_xmodem')>(crc.crc16xmodem));

expectType<typeof crc.crc24>(expectType<typeof import('crc/lib/crc24')>(crc.crc24));
expectType<typeof crc.crc32>(expectType<typeof import('crc/lib/crc32')>(crc.crc32));
expectType<typeof crc.crcjam>(expectType<typeof import('crc/lib/crcjam')>(crc.crcjam));
