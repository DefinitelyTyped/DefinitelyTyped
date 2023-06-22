import * as ini from 'ini';

const iniContent = '';

/* ini.decode() / ini.parse() */

// $ExpectType { [key: string]: any; }
let decoded = ini.decode(iniContent);
decoded = ini.parse(iniContent);

// @ts-expect-error
let badDecoded = ini.decode();
// @ts-expect-error
badDecoded = ini.decode(null);
// @ts-expect-error
badDecoded = ini.parse();
// @ts-expect-error
badDecoded = ini.parse(null);

/* ini.encode() / ini.stringify() */

// $ExpectType string
let encoded = ini.encode(decoded);
encoded = ini.encode(decoded, 'Section');
encoded = ini.encode(decoded, { whitespace: true });
encoded = ini.encode(decoded, { section: 'Section' });
encoded = ini.encode(decoded, { whitespace: true, section: 'Section' });

// @ts-expect-error
let badEncoded = ini.encode();
// @ts-expect-error
badEncoded = ini.encode(decoded, null);

encoded = ini.stringify(decoded);
encoded = ini.stringify(decoded, 'Section');
encoded = ini.stringify(decoded, { whitespace: true });
encoded = ini.stringify(decoded, { section: 'Section' });
encoded = ini.stringify(decoded, { whitespace: true, section: 'Section' });

// @ts-expect-error
badEncoded = ini.stringify();
// @ts-expect-error
badEncoded = ini.stringify(decoded, null);

/* ini.safe() / ini.unsafe() */

// $ExpectType string
const safeStr = ini.safe('foo bar');

// @ts-expect-error
let badSafeStr = ini.safe();
// @ts-expect-error
badSafeStr = ini.safe(null);

// $ExpectType string
const unsafeStr = ini.unsafe(safeStr);

// @ts-expect-error
let badUnsafeStr = ini.unsafe();
// @ts-expect-error
badUnsafeStr = ini.unsafe(null);
