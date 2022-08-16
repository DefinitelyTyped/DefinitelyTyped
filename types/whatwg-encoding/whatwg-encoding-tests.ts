import { labelToName, isSupported, getBOMEncoding, decode, BOMEncoding } from 'whatwg-encoding';

// test type exports
type Encoding = BOMEncoding;

labelToName('latin1'); // $ExpectType string | null
isSupported('IBM866'); // $ExpectType boolean
const encoding: BOMEncoding | null = getBOMEncoding(new Uint8Array([0xfe, 0xff]));
// @ts-expect-error
const encoding1: BOMEncoding = getBOMEncoding(new Uint8Array([0xfe, 0xff]));
decode(new Uint8Array([0x48, 0x69]), 'UTF-8'); // $ExpectType string
