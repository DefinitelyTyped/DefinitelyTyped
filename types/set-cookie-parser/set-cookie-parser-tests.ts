import assert = require('assert');
import { IncomingMessage } from 'http';
import setCookie = require('set-cookie-parser');
import { Cookie, CookieMap } from 'set-cookie-parser';

// Call parse function on imported object
const input = 'foo=bar;';
let cookies = setCookie.parse(input);
assert.strictEqual(cookies.length, 1);
assert.strictEqual(cookies[0].name, 'foo');
assert.strictEqual(cookies[0].value, 'bar');

// Required properties only test
const requiredOnly = 'foo=bar;';
cookies = setCookie(requiredOnly);
assert.strictEqual(cookies.length, 1);
assert.strictEqual(cookies[0].name, 'foo');
assert.strictEqual(cookies[0].value, 'bar');

// Optional properties included test
const optionalIncluded =
    'foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure; SameSite=Strict';
cookies = setCookie(optionalIncluded);
assert.strictEqual(cookies.length, 1);
assert.strictEqual(cookies[0].name, 'foo');
assert.strictEqual(cookies[0].value, 'bar');
assert.strictEqual(cookies[0].domain, '.example.com');
assert.strictEqual(cookies[0].path, '/');
assert.deepStrictEqual(cookies[0].expires, new Date('Tue Jul 01 2025 06:01:11 GMT-0400 (EDT)'));
assert.strictEqual(cookies[0].maxAge, 1000);
assert.strictEqual(cookies[0].httpOnly, true);
assert.strictEqual(cookies[0].secure, true);
assert.strictEqual(cookies[0].sameSite, 'Strict');

// Array of strings test
const arrayOfCookies = ['bam=baz', 'foo=bar'];
cookies = setCookie(arrayOfCookies);
assert.strictEqual(cookies.length, 2);
assert.strictEqual(cookies[0].name, 'bam');
assert.strictEqual(cookies[0].value, 'baz');
assert.strictEqual(cookies[1].name, 'foo');
assert.strictEqual(cookies[1].value, 'bar');

// HTTP response message test
declare const message: IncomingMessage;
message.headers = { 'set-cookie': ['bam=baz', 'foo=bar'] };
cookies = setCookie(message);
assert.strictEqual(cookies.length, 2);
assert.strictEqual(cookies[0].name, 'bam');
assert.strictEqual(cookies[0].value, 'baz');
assert.strictEqual(cookies[1].name, 'foo');
assert.strictEqual(cookies[1].value, 'bar');

// Create new cookie with only required properties
const requiredOnlyCookie: Cookie = {
    name: 'Foo',
    value: 'Bar',
};

// Create new cookie with all properties included optional ones
const optionalIncludedCookie: Cookie = {
    name: 'Bam',
    value: 'Baz',
    domain: '.example.com',
    path: '/',
    expires: new Date('Tue Jul 01 2025 06:01:11 GMT-0400 (EDT)'),
    maxAge: 1000,
    httpOnly: true,
    secure: true,
};

let cookiesString = setCookie.splitCookiesString(undefined);
assert.deepStrictEqual(cookiesString, []);

cookiesString = setCookie.splitCookiesString([]);
assert.deepStrictEqual(cookiesString, []);

cookiesString = setCookie.splitCookiesString([
    'foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
    'baz=buz; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
]);
assert.deepStrictEqual(cookiesString, [
    'foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
    'baz=buz; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
]);

cookiesString = setCookie.splitCookiesString(
    'foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure, ' +
        'baz=buz; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
);
assert.deepStrictEqual(cookiesString, [
    'foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
    'baz=buz; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
]);

// Use decodeValues=false option
const notDecodedValueCookies = setCookie.parse(
    'user=%D0%98%D0%BB%D1%8C%D1%8F%20%D0%97%D0%B0%D0%B9%D1%86%D0%B5%D0%B2; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 3000 10:01:11 GMT; HttpOnly; Secure',
    { decodeValues: false },
);
assert.strictEqual(notDecodedValueCookies[0].value, '%D0%98%D0%BB%D1%8C%D1%8F%20%D0%97%D0%B0%D0%B9%D1%86%D0%B5%D0%B2');

const decodedValueCookies = setCookie.parse(
    'user=%D0%98%D0%BB%D1%8C%D1%8F%20%D0%97%D0%B0%D0%B9%D1%86%D0%B5%D0%B2; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 3000 10:01:11 GMT; HttpOnly; Secure',
    { decodeValues: true },
);
assert.strictEqual(decodedValueCookies[0].value, 'Илья Зайцев');

// Use map=true option
const expectedCookiesMap: CookieMap = {
    foo: {
        name: 'foo',
        value: 'bar',
        maxAge: 1000,
        domain: '.example.com',
    },
};
// $ExpectType CookieMap
const cookiesMap = setCookie.parse('foo=bar; Max-Age=1000; Domain=.example.com;', {
    map: true,
    decodeValues: false,
    silent: true,
});
assert.deepStrictEqual(cookiesMap, expectedCookiesMap);

// Call parseString function
const individualSetCookieHeader =
    'user=%D0%98%D0%BB%D1%8C%D1%8F%20%D0%97%D0%B0%D0%B9%D1%86%D0%B5%D0%B2; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure; SameSite=Strict';
const decodedValueCookie = setCookie.parseString(individualSetCookieHeader);
const notDecodedValueCookie = setCookie.parseString(individualSetCookieHeader, { decodeValues: false });
const expectedCookie: setCookie.Cookie = {
    name: 'user',
    value: 'Илья Зайцев',
    maxAge: 1000,
    domain: '.example.com',
    path: '/',
    expires: new Date('Tue, 01 Jul 2025 10:01:11 GMT'),
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
};
assert.deepStrictEqual(decodedValueCookie, expectedCookie);
assert.strictEqual(notDecodedValueCookie.value, '%D0%98%D0%BB%D1%8C%D1%8F%20%D0%97%D0%B0%D0%B9%D1%86%D0%B5%D0%B2');
