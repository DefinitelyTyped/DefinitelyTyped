import * as nodeFs from 'node:fs';
import * as nodeColonPath from 'node:path';

// $ExpectType string
nodeColonPath.resolve('hi');

import * as nodePath from 'path';

// $ExpectType string
nodePath.resolve('hi');

// $ExpectType string
nodeFs.readFileSync('hi', 'utf8');

// $ExpectType Promise<string>
const result = Bun.resolve('foo', 'bar');

// $ExpectType string
const result1 = Bun.resolveSync('foo', 'bar');

// // $ExpectType Promise<string>
// import.meta.resolve('foo', 'bar');

// // $ExpectType Promise<string>
// import.meta.resolve('foo');

// // $ExpectType Promise<string>
// import.meta.resolve('foo');

// $ExpectType FileBlob
Bun.file('hi');

// $ExpectType Promise<number>
Bun.write(Bun.file('hi'), 'hi');

// $ExpectType Promise<number>
Bun.write('hello', 'hi');
