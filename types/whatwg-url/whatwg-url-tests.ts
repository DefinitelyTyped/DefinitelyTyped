import * as whatwgUrl from 'whatwg-url';

// $ExpectType URL
new whatwgUrl.URL('http://example.com');

// $ExpectType URL
new whatwgUrl.URL('foo', 'http://example.com');

// $ExpectType URLRecord | null
const urlRecord = whatwgUrl.parseURL('http://example.com');

if (urlRecord !== null) {
    // $ExpectType URLRecord | null
    whatwgUrl.basicURLParse('http://example.com', {url: urlRecord});

    // $ExpectType string
    whatwgUrl.serializeURL(urlRecord);
    //
    // $ExpectType string
    whatwgUrl.serializeURLOrigin(urlRecord);
    //
    // $ExpectType void
    whatwgUrl.setTheUsername(urlRecord, 'user');
    //
    // $ExpectType void
    whatwgUrl.setThePassword(urlRecord, 'secret');
    //
    // $ExpectType boolean
    whatwgUrl.cannotHaveAUsernamePasswordPort(urlRecord);
}

// $ExpectType string
whatwgUrl.serializeHost('http://example.com');

// $ExpectType string
whatwgUrl.serializeHost(42);

// $ExpectType string
whatwgUrl.serializeHost([0, 0, 0, 0, 0, 0, 0, 0]);

// $ExpectType string
whatwgUrl.serializeInteger(42);

// $ExpectType Buffer
whatwgUrl.percentDecode(Buffer.from('foo'));
