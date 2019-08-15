import cookie = require('cookie');

function test_serialize(): void {
    let retVal: string;

    retVal = cookie.serialize('foo', 'bar');
    retVal = cookie.serialize('foo', 'bar', { httpOnly: true });
    retVal = cookie.serialize('foo', 'bar', { sameSite: 'none' });
    retVal = cookie.serialize('foo', 'bar', { sameSite: 'lax' });
}

function test_parse(): void {
    let retVal: { [key: string]: string };

    retVal = cookie.parse('foo=bar; bar=baz;');
    retVal = cookie.parse('foo=bar; bar=baz', { decode: x => x });
}

function test_options(): void {
    const serializeOptions: cookie.CookieSerializeOptions = {
        encode: (x: string) => x,
        path: '/',
        expires: new Date(),
        maxAge: 200,
        domain: 'example.com',
        secure: false,
        httpOnly: false,
        sameSite: 'strict'
    };

    const parseOptios: cookie.CookieParseOptions = {
        decode: (x: string) => x
    };
}
