import * as ini from 'ini';

const iniContent = '';

/* ini.decode() / ini.parse() */

// $ExpectType { [key: string]: any; }
let decoded = ini.decode(iniContent);
decoded = ini.parse(iniContent);

// $ExpectError
let badDecoded = ini.decode();
// $ExpectError
badDecoded = ini.decode(null);
// $ExpectError
badDecoded = ini.parse();
// $ExpectError
badDecoded = ini.parse(null);

/* ini.encode() / ini.stringify() */

// $ExpectType string
let encoded = ini.encode(decoded);
encoded = ini.encode(decoded, 'Section');
encoded = ini.encode(decoded, { whitespace: true });
encoded = ini.encode(decoded, { section: 'Section' });
encoded = ini.encode(decoded, { whitespace: true, section: 'Section' });

// $ExpectError
let badEncoded = ini.encode();
// $ExpectError
badEncoded = ini.encode(decoded, null);

encoded = ini.stringify(decoded);
encoded = ini.stringify(decoded, 'Section');
encoded = ini.stringify(decoded, { whitespace: true });
encoded = ini.stringify(decoded, { section: 'Section' });
encoded = ini.stringify(decoded, { whitespace: true, section: 'Section' });

// $ExpectError
badEncoded = ini.stringify();
// $ExpectError
badEncoded = ini.stringify(decoded, null);

/* ini.safe() / ini.unsafe() */

// $ExpectType string
const safeStr = ini.safe('foo bar');

// $ExpectError
let badSafeStr = ini.safe();
// $ExpectError
badSafeStr = ini.safe(null);

// $ExpectType string
const unsafeStr = ini.unsafe(safeStr);

// $ExpectError
let badUnsafeStr = ini.unsafe();
// $ExpectError
badUnsafeStr = ini.unsafe(null);
