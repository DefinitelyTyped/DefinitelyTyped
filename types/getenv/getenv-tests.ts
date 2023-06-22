import * as getenv from 'getenv';
import { UrlWithStringQuery } from 'url';

getenv('FOO'); // $ExpectType string
getenv('FOO', 'bar'); // $ExpectType string
// @ts-expect-error
getenv('FOO', 123);

getenv.string('FOO'); // $ExpectType string
getenv.string('FOO', 'bar'); // $ExpectType string
// @ts-expect-error
getenv.string('FOO', 123);

getenv.array('FOO'); // $ExpectType string[]
getenv.array('FOO', 'int'); // $ExpectType number[]

getenv.bool('FOO'); // $ExpectType boolean
getenv.bool('FOO', true); // $ExpectType boolean
// @ts-expect-error
getenv.bool('FOO', 'true');

getenv.int('FOO'); // $ExpectType number
getenv.int('FOO', 123); // $ExpectType number
// @ts-expect-error
getenv.int('FOO', '123');

getenv.float('FOO'); // $ExpectType number
getenv.float('FOO', 123.55); // $ExpectType number
// @ts-expect-error
getenv.float('FOO', '123.55');

getenv.boolish('FOO'); // $ExpectType boolean
getenv.boolish('FOO', false); // $ExpectType boolean
// @ts-expect-error
getenv.boolish('FOO', 'false');

getenv.url('FOO'); // $ExpectType UrlWithStringQuery
// tslint:disable-next-line:no-object-literal-type-assertion
getenv.url('FOO', {} as UrlWithStringQuery); // $ExpectType UrlWithStringQuery
// @ts-expect-error
getenv.url('FOO', {});

getenv.array('FOO'); // $ExpectType string[]
getenv.array('FOO', 'int'); // $ExpectType number[]
getenv.array('FOO', 'int', [1]); // $ExpectType number[]
// @ts-expect-error
getenv.array('FOO', 'int', ['bar']);

getenv.multi({ foo: 'BAR' }); // $ExpectType { foo: string; }
getenv.multi({ foo: ['BAR', 'baz'] }); // $ExpectType { foo: string; }
getenv.multi({ foo: ['BAR', 'baz', 'string'] }); // $ExpectType { foo: string; }
getenv.multi({ foo: ['BAR', true, 'bool'] }); // $ExpectType { foo: boolean; }
getenv.multi({ foo: ['BAR', 1.55, 'float'] }); // $ExpectType { foo: number; }
// tslint:disable-next-line:no-object-literal-type-assertion
getenv.multi({ foo: ['BAR', {} as UrlWithStringQuery, 'url'] }); // $ExpectType { foo: UrlWithStringQuery; }
// @ts-expect-error
getenv.multi({ foo: ['BAR', 'baz', 'int'] });
