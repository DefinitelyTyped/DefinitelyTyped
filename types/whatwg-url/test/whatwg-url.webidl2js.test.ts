import { URL, URLSearchParams } from 'whatwg-url/webidl2js-wrapper';

declare const any: unknown;
declare const global: { [prop: string]: any };

URL.install(global);
URLSearchParams.install(global);

URL.create(global, ['https://example.org']); // $ExpectType URL
URL.create(global, ['foo', 'https://example.org']); // $ExpectType URL

URLSearchParams.create(global, ['?foo=bar&baz=biz']); // $ExpectType URLSearchParams
URLSearchParams.create(global, ['?foo=bar&baz=biz'], { doNotStripQMark: true }); // $ExpectType URLSearchParams

// $ExpectType URLSearchParams
URLSearchParams.create(global, [
    [
        ['foo', 'bar'],
        ['baz', 'biz'],
    ],
]);

URL.createImpl(global, ['foo']); // $ExpectType URLImpl
URL.createImpl(global, ['foo', 'someURL']); // $ExpectType URLImpl

URLSearchParams.createImpl(global, ['?foo=bar&baz=biz']); // $ExpectType URLSearchParamsImpl
URLSearchParams.createImpl(global, ['?foo=bar&baz=biz'], { doNotStripQMark: true }); // $ExpectType URLSearchParamsImpl

// $ExpectType URLSearchParamsImpl
URLSearchParams.createImpl(global, [
    [
        ['foo', 'bar'],
        ['baz', 'biz'],
    ],
]);

if (URL.is(any)) {
    any; // $ExpectType URL
    const impl = URL.convert(any);

    impl; // $ExpectType URLImpl
}

if (URLSearchParams.is(any)) {
    any; // $ExpectType URLSearchParams
    const impl = URLSearchParams.convert(any);

    impl; // $ExpectType URLSearchParamsImpl
}

if (URL.isImpl(any)) {
    any; // $ExpectType URLImpl
}

if (URLSearchParams.isImpl(any)) {
    any; // $ExpectType URLSearchParamsImpl
}

URL.setup<URL>(Object.create(global.URL.prototype), global, ['https://example.org']); // $ExpectType URL
URL.setup<URL>(Object.create(global.URL.prototype), global, ['foo', 'https://example.org']); // $ExpectType URL

URLSearchParams.setup<URLSearchParams>(Object.create(global.URLSearchParams.prototype), global, ['?foo=bar&baz=biz']); // $ExpectType URLSearchParams

// $ExpectType URLSearchParams
URLSearchParams.setup<URLSearchParams>(Object.create(global.URLSearchParams.prototype), global, [
    [
        ['foo', 'bar'],
        ['baz', 'biz'],
    ],
]);
