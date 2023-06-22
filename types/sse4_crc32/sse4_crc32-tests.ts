import { createReadStream } from 'fs';
import { fromStream, calculate, hardware_support, sse42_crc, table_crc } from 'sse4_crc32';

// $ExpectType Crc32CStream
fromStream(createReadStream('./test.txt'), 1);

// $ExpectType number
calculate('123', 1);

// $ExpectType number
sse42_crc!('123', 1);

// $ExpectType number
table_crc!('123', 1);

// $ExpectType boolean | undefined
hardware_support;
