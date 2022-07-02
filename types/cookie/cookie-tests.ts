import * as cookie from 'cookie';
// tslint:disable-next-line:no-duplicate-imports
import { CookieParseOptions, CookieSerializeOptions, parse, serialize } from 'cookie';

function test_serialize(): void {
    let retVal: string;

    retVal = serialize('foo', 'bar');
    retVal = serialize('foo', 'bar', { httpOnly: true });
    retVal = cookie.serialize('foo', 'bar', { sameSite: 'none' });
    retVal = cookie.serialize('foo', 'bar', { sameSite: 'lax' });
}

function test_parse(): void {
    let retVal: Record<string, string>;

    retVal = parse('foo=bar; bar=baz;');
    retVal = cookie.parse('foo=bar; bar=baz', { decode: x => x });
}

function test_options(): void {
    const serializeOptions: CookieSerializeOptions = {
        encode: (x: string) => x,
        path: '/',
        expires: new Date(),
        maxAge: 200,
        domain: 'example.com',
        secure: false,
        httpOnly: false,
        sameSite: 'strict',
        priority: 'low',
    };

    const parseOptions: CookieParseOptions = {
        decode: (x: string) => x,
    };
}
