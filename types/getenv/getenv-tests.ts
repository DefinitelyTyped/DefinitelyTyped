import * as getenv from 'getenv';
import { UrlWithStringQuery } from 'url';

getenv('FOO'); // $ExpectType string
getenv('FOO', 'bar'); // $ExpectType string
getenv('FOO', 123); // $ExpectError

getenv.string('FOO'); // $ExpectType string
getenv.string('FOO', 'bar'); // $ExpectType string
getenv.string('FOO', 123); // $ExpectError

getenv.array('FOO'); // $ExpectType string[]
getenv.array('FOO', 'int'); // $ExpectType number[]

getenv.bool('FOO'); // $ExpectType boolean
getenv.bool('FOO', true); // $ExpectType boolean
getenv.bool('FOO', 'true'); // $ExpectError

getenv.int('FOO'); // $ExpectType number
getenv.int('FOO', 123); // $ExpectType number
getenv.int('FOO', '123'); // $ExpectError

getenv.float('FOO'); // $ExpectType number
getenv.float('FOO', 123.55); // $ExpectType number
getenv.float('FOO', '123.55'); // $ExpectError

getenv.boolish('FOO'); // $ExpectType boolean
getenv.boolish('FOO', false); // $ExpectType boolean
getenv.boolish('FOO', 'false'); // $ExpectError

getenv.url('FOO'); // $ExpectType UrlWithStringQuery
// tslint:disable-next-line:no-object-literal-type-assertion
getenv.url('FOO', {} as UrlWithStringQuery); // $ExpectType UrlWithStringQuery
getenv.url('FOO', {}); // $ExpectError

getenv.array('FOO'); // $ExpectType string[]
getenv.array('FOO', 'int'); // $ExpectType number[]
getenv.array('FOO', 'int', [1]); // $ExpectType number[]
getenv.array('FOO', 'int', ['bar']); // $ExpectError

getenv.multi({ foo: 'BAR' }); // $ExpectType { foo: string; }
getenv.multi({ foo: ['BAR', 'baz'] }); // $ExpectType { foo: string; }
getenv.multi({ foo: ['BAR', 'baz', 'string'] }); // $ExpectType { foo: string; }
getenv.multi({ foo: ['BAR', true, 'bool'] }); // $ExpectType { foo: boolean; }
getenv.multi({ foo: ['BAR', 1.55, 'float'] }); // $ExpectType { foo: number; }
// tslint:disable-next-line:no-object-literal-type-assertion
getenv.multi({ foo: ['BAR', {} as UrlWithStringQuery, 'url'] }); // $ExpectType { foo: UrlWithStringQuery; }
getenv.multi({ foo: ['BAR', 'baz', 'int'] }); // $ExpectError
