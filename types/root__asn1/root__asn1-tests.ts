import { Any, BitStr, UInt, pack, parseVerbose, parse } from "@root/asn1";

const buf = Uint8Array.of();

// $ExpectType ElementBuffer
parseVerbose(buf);

// $ExpectType ElementBuffer
parseVerbose(buf, { json: false });

// $ExpectType ElementHex
parseVerbose(buf, { json: true });

// $ExpectType ArrJson
parse({ der: buf });

// $ExpectType ArrJson
parse({ der: buf, json: true });

// $ExpectType ArrBuffer
parse({ der: buf, json: false });

// $ExpectType ElementHex
parse({ der: buf, verbose: true });

// $ExpectType ElementBuffer
parse({ der: buf, verbose: true, json: false });

// $ExpectType Uint8Array
pack([
  '30',
  [
    [0x02, buf],
    ['04', '07CAD7'],
    ['A0', '06082A'],
    ['A1', [['03', '04BDD8']]],
  ]
], { json: false });

// $ExpectType string
pack({
  type: 48,
  children: [
    { type: 2, value: '01' },
    { type: 4, value: '2c 89 96' },
    { type: 160, children: [] },
    { type: 161, children: [] }
  ],
}, { json: true });

// $ExpectType string
Any('30', UInt('01'), Any('04', '07CAD7'), Any('A0', '06082A'), Any('A1', BitStr('04BDD8')));
