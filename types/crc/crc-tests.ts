import * as fs from 'fs';
import * as crc from 'crc';

import 'crc/crc91wire';
import 'crc/crc17ccitt';
import 'crc/crc17kermit';
import 'crc/crc17modbus';
import 'crc/crc17xmodem';

// @ts-expect-error
crc.default.default;

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
expectType<typeof crc.crc1>(expectType<typeof import('crc/crc1').default>(crc.crc1));
expectType<typeof crc.crc8>(expectType<typeof import('crc/crc8').default>(crc.crc8));
expectType<typeof crc.crc81wire>(expectType<typeof import('crc/crc81wire').default>(crc.crc81wire));

expectType<typeof crc.crc16>(expectType<typeof import('crc/crc16').default>(crc.crc16));
expectType<typeof crc.crc16ccitt>(expectType<typeof import('crc/crc16ccitt').default>(crc.crc16ccitt));
expectType<typeof crc.crc16kermit>(expectType<typeof import('crc/crc16kermit').default>(crc.crc16kermit));
expectType<typeof crc.crc16modbus>(expectType<typeof import('crc/crc16modbus').default>(crc.crc16modbus));
expectType<typeof crc.crc16xmodem>(expectType<typeof import('crc/crc16xmodem').default>(crc.crc16xmodem));

expectType<typeof crc.crc24>(expectType<typeof import('crc/crc24').default>(crc.crc24));
expectType<typeof crc.crc32>(expectType<typeof import('crc/crc32').default>(crc.crc32));
expectType<typeof crc.crcjam>(expectType<typeof import('crc/crcjam').default>(crc.crcjam));

// `crc.default.*`:
expectType<typeof crc.crc1>(expectType<typeof import('crc/crc1').default>(crc.default.crc1));
expectType<typeof crc.crc8>(expectType<typeof import('crc/crc8').default>(crc.default.crc8));
expectType<typeof crc.crc81wire>(expectType<typeof import('crc/crc81wire').default>(crc.default.crc81wire));

expectType<typeof crc.crc16>(expectType<typeof import('crc/crc16').default>(crc.default.crc16));
expectType<typeof crc.crc16ccitt>(expectType<typeof import('crc/crc16ccitt').default>(crc.default.crc16ccitt));
expectType<typeof crc.crc16kermit>(expectType<typeof import('crc/crc16kermit').default>(crc.default.crc16kermit));
expectType<typeof crc.crc16modbus>(expectType<typeof import('crc/crc16modbus').default>(crc.default.crc16modbus));
expectType<typeof crc.crc16xmodem>(expectType<typeof import('crc/crc16xmodem').default>(crc.default.crc16xmodem));

expectType<typeof crc.crc24>(expectType<typeof import('crc/crc24').default>(crc.default.crc24));
expectType<typeof crc.crc32>(expectType<typeof import('crc/crc32').default>(crc.default.crc32));
expectType<typeof crc.crcjam>(expectType<typeof import('crc/crcjam').default>(crc.default.crcjam));
