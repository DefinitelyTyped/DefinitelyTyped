/* tslint:disable:ban-types */
import * as whatwgUrl from 'whatwg-url';
import { URL, URLSearchParams } from 'whatwg-url/webidl2js-wrapper';

declare const unknown: unknown;
declare const globalObject: {
    URL: typeof whatwgUrl.URL;
    URLSearchParams: typeof whatwgUrl.URLSearchParams;
    String: String;
    Number: Number;
    TypeError: TypeError;
};

URL.install(globalObject, ['Window']);
URLSearchParams.install(globalObject, ['Window']);

URL.create(globalObject, ['https://example.org']); // $ExpectType URL
URL.create(globalObject, ['foo', 'https://example.org']); // $ExpectType URL

URLSearchParams.create(globalObject, ['?foo=bar&baz=biz']); // $ExpectType URLSearchParams
URLSearchParams.create(globalObject, ['?foo=bar&baz=biz'], { doNotStripQMark: true }); // $ExpectType URLSearchParams

// $ExpectType URLSearchParams
URLSearchParams.create(globalObject, [
    [
        ['foo', 'bar'],
        ['baz', 'biz'],
    ],
]);

URL.createImpl(globalObject, ['foo']); // $ExpectType URLImpl
URL.createImpl(globalObject, ['foo', 'someURL']); // $ExpectType URLImpl

URLSearchParams.createImpl(globalObject, ['?foo=bar&baz=biz']); // $ExpectType URLSearchParamsImpl
URLSearchParams.createImpl(globalObject, ['?foo=bar&baz=biz'], { doNotStripQMark: true }); // $ExpectType URLSearchParamsImpl

// $ExpectType URLSearchParamsImpl
URLSearchParams.createImpl(globalObject, [
    [
        ['foo', 'bar'],
        ['baz', 'biz'],
    ],
]);

if (URL.is(unknown)) {
    unknown; // $ExpectType URL
    const impl = URL.convert(globalObject, unknown);

    impl; // $ExpectType URLImpl
}

if (URLSearchParams.is(unknown)) {
    unknown; // $ExpectType URLSearchParams
    const impl = URLSearchParams.convert(globalObject, unknown);

    impl; // $ExpectType URLSearchParamsImpl
}

if (URL.isImpl(unknown)) {
    unknown; // $ExpectType URLImpl
}

if (URLSearchParams.isImpl(unknown)) {
    unknown; // $ExpectType URLSearchParamsImpl
}

URL.setup<whatwgUrl.URL>(Object.create(globalObject.URL.prototype), globalObject, ['https://example.org']); // $ExpectType URL
URL.setup<whatwgUrl.URL>(Object.create(globalObject.URL.prototype), globalObject, ['foo', 'https://example.org']); // $ExpectType URL

// $ExpectType URLSearchParams
URLSearchParams.setup<whatwgUrl.URLSearchParams>(Object.create(whatwgUrl.URLSearchParams.prototype), globalObject, [
    '?foo=bar&baz=biz',
]);

// $ExpectType URLSearchParams
URLSearchParams.setup<whatwgUrl.URLSearchParams>(Object.create(whatwgUrl.URLSearchParams.prototype), globalObject, [
    [
        ['foo', 'bar'],
        ['baz', 'biz'],
    ],
]);
