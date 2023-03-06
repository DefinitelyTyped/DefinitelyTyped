import caseless = require("caseless");

// @ts-expect-error
new caseless.Caseless();

// tslint:disable-next-line: prefer-const
let c1: caseless.Caseless;

caseless(); // $ExpectType Caseless
caseless({}); // $ExpectType Caseless
// @ts-expect-error
caseless(null);
// @ts-expect-error
caseless(1);
// @ts-expect-error
caseless("2");

const c2 = caseless();

c2.set({}); // $ExpectType void
c2.set('foo', 'bar'); // $ExpectType string | false
c2.set('foo', 'bar', false); // $ExpectType string | false
c2.set('foo', new Date()); // $ExpectType string | false
// @ts-expect-error
c2.set(10, 'bar');

c2.get('foo'); // $ExpectType any
// @ts-expect-error
c2.get(10);

c2.has('foo'); // $ExpectType string | false
// @ts-expect-error
c2.has(10);

c2.swap('foo'); // $ExpectType void
// @ts-expect-error
c2.swap(10);

c2.del('foo'); // $ExpectType boolean

// @ts-expect-error
caseless.httpify(null, {});
// @ts-expect-error
caseless.httpify(1, {});
// @ts-expect-error
caseless.httpify("2", {});
// @ts-expect-error
caseless.httpify({}, null);
// @ts-expect-error
caseless.httpify({}, 1);
// @ts-expect-error
caseless.httpify({}, "2");

caseless.httpify({}, {}); // $ExpectType Caseless

// @ts-expect-error
const request: caseless.Httpified = {};

request.setHeader({}); // $ExpectType void
request.setHeader('foo', 'bar'); // $ExpectType string | false
request.setHeader('foo', 'bar', false); // $ExpectType string | false
request.setHeader('foo', new Date()); // $ExpectType string | false
// @ts-expect-error
request.setHeader(10, 'bar');

request.getHeader('foo'); // $ExpectType any
// @ts-expect-error
request.getHeader(10);

request.hasHeader('foo'); // $ExpectType string | false
// @ts-expect-error
request.hasHeader(10);

request.removeHeader('foo'); // $ExpectType boolean
request.headers = {};
