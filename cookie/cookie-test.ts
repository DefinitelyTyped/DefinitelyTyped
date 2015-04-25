/// <reference path="cookie.d.ts" />

import cookie = require('cookie');

function test_serialize(): void {
    var retVal: string;

    retVal = cookie.serialize('foo', 'bar');
    retVal = cookie.serialize('foo', 'bar', { httpOnly: true });
}

function test_parse(): void {
    var retVal: { [key: string]: string };

    retVal = cookie.parse('foo=bar; bar=baz;');
    retVal = cookie.parse('foo=bar; bar=baz', { decode: x => x });
}

function test_options(): void {
    var serializeOptions: CookieSerializeOptions = {
        encode: (x: string) => x,
        path: '/',
        expires: new Date(),
        maxAge: 200,
        domain: 'example.com',
        secure: false,
        httpOnly: false
    };

    var parseOptios: CookieParseOptions = {
        decode: (x: string) => x
    };
}
