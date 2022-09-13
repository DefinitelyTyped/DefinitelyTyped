import { JSONValue } from 'k6';
import { Selection } from 'k6/html';
import http, {
    CookieJar,
    CookieJarCookies,
    FileData,
    RefinedResponse,
    Response,
    ResponseType,
    del,
    head,
    get,
    options,
    patch,
    post,
    put,
    request,
    batch,
    file,
    cookieJar,
    expectedStatuses,
    setResponseCallback
} from 'k6/http';

const address = 'http://example.com';
const addressFromHttpURL = http.url`http://example.com/posts/${5}/${'10'}/`;

let response: Response;
let responseDefault: RefinedResponse<undefined>;
let responseBinary: RefinedResponse<'binary'>;
let responseNone: RefinedResponse<'none'>;
let responseText: RefinedResponse<'text'>;
let responsesArray: Response[];
let responsesArrayDefault: Array<RefinedResponse<undefined>>;
let responsesArrayBinary: Array<RefinedResponse<'binary'>>;
let responsesArrayNone: Array<RefinedResponse<'none'>>;
let responsesArrayText: Array<RefinedResponse<'text'>>;
let responsesMap: { [name: string]: Response };
let responsesMapDefault: { [name: string]: RefinedResponse<undefined> };
let responsesMapBinary: { [name: string]: RefinedResponse<'binary'> };
let responsesMapNone: { [name: string]: RefinedResponse<'none'> };
let responsesMapText: { [name: string]: RefinedResponse<'text'> };
let fileData: FileData;
let html: Selection;
let json: JSONValue | undefined;
let cookies: CookieJarCookies;
let jar: CookieJar;

// del
// @ts-expect-error
del();
// @ts-expect-error
del(5);
del(addressFromHttpURL);
responseDefault = del(address);
// @ts-expect-error
del(address, 5);
responseDefault = del(address, 'skadoosh');
responseDefault = del(address, {});
responseDefault = del(address, { item: '576' });
// @ts-expect-error
del(address, {}, 5);
responseBinary = del(address, null, { responseType: 'binary' });
// @ts-expect-error
del(address, {}, {}, 5);

// head
// @ts-expect-error
head();
// @ts-expect-error
head(5);
head(addressFromHttpURL);
responseDefault = head(address);
// @ts-expect-error
head(address, 5);
responseDefault = head(address, {});
responseBinary = head(address, { responseType: 'binary' });
responseNone = head(address, { responseType: 'none' });
responseText = head(address, { responseType: 'text' });
// @ts-expect-error
head(address, {}, 5);

// get
// @ts-expect-error
get();
// @ts-expect-error
get(5);
get(addressFromHttpURL);
responseDefault = get(address);
// @ts-expect-error
get(address, 5);
responseDefault = get(address, {});
responseBinary = get(address, { responseType: 'binary' });
responseNone = get(address, { responseType: 'none' });
responseText = get(address, { responseType: 'text' });
// @ts-expect-error
get(address, {}, 5);

// options
// @ts-expect-error
options();
// @ts-expect-error
options(5);
options(addressFromHttpURL);
responseDefault = options(address);
// @ts-expect-error
options(address, 5);
responseDefault = options(address, 'choices choices');
responseDefault = options(address, {});
responseDefault = options(address, { theme: 'forest' });
responseDefault = options(address, new ArrayBuffer(8));
// @ts-expect-error
options(address, {}, 5);
responseNone = options(address, {}, { responseType: 'none' });
// @ts-expect-error
options(address, {}, {}, 5);

// patch
// @ts-expect-error
patch();
// @ts-expect-error
patch(5);
patch(addressFromHttpURL);
responseDefault = patch(address);
// @ts-expect-error
patch(address, 5);
responseDefault = patch(address, 'a life of contrasts and patchwork');
responseDefault = patch(address, {});
responseDefault = patch(address, { weaponOfChoice: 'pen' });
responseDefault = patch(address, new ArrayBuffer(8));
// @ts-expect-error
patch(address, {}, 5);
responseBinary = patch(address, {}, { responseType: 'binary' });
// @ts-expect-error
patch(address, {}, {}, 5);

// post
// @ts-expect-error
post();
// @ts-expect-error
post(5);
post(addressFromHttpURL);
responseDefault = post(address);
// @ts-expect-error
post(address, 5);
responseDefault = post(address, 'hello in cyberspace');
responseDefault = post(address, {});
responseDefault = post(address, { query: 'kittens' });
responseDefault = post(address, new ArrayBuffer(8));
// @ts-expect-error
post(address, {}, 5);
responseNone = post(address, null, { responseType: 'none' });
// @ts-expect-error
post(address, {}, {}, 5);

// put
// @ts-expect-error
put();
// @ts-expect-error
put(5);
put(addressFromHttpURL);
responseDefault = put(address);
// @ts-expect-error
put(address, 5);
responseDefault = put(address, 'cat in box');
responseDefault = put(address, {});
responseDefault = put(address, { box: 'cat' });
responseDefault = put(address, new ArrayBuffer(8));
// @ts-expect-error
put(address, {}, 5);
responseText = put(address, null, { responseType: 'text' });
// @ts-expect-error
put(address, {}, {}, 5);

// request
// @ts-expect-error
request();
// @ts-expect-error
request(5);
// @ts-expect-error
request('get');
// @ts-expect-error
request('get', 5);
request('get', addressFromHttpURL);
responseDefault = request('get', address);
// @ts-expect-error
request('post', address, 5);
responseDefault = request('post', address, 'welcome to the internet');
responseDefault = request('post', address, {});
responseDefault = request('post', address, { query: 'quokka' });
responseDefault = request('post', address, new ArrayBuffer(8));
// @ts-expect-error
request('post', address, {}, 5);
responseBinary = request('post', address, {}, { responseType: 'binary' });
// @ts-expect-error
request('post', address, {}, {}, 5);

// request params
responseDefault = request('post', address, {}, {timeout: '10s'});
responseDefault = request('post', address, {}, {timeout: 10});

// batch
// @ts-expect-error
batch();
// @ts-expect-error
batch(5);
// @ts-expect-error
batch([ address ], 5);

// batch(Array)
responsesArray = batch([]);
responsesArrayDefault = batch([ address ]);
responsesArrayDefault = batch([ addressFromHttpURL ]);
responsesArrayDefault = batch([ address, address, address ]);
responsesArrayDefault = batch([
    [ 'GET', address ],
    [ 'POST', addressFromHttpURL, 'hello' ],
    [ 'POST', address, { title: 'Hello' }, {} ]
]);
responsesArrayBinary = batch([
    [ 'GET', address, null, { responseType: 'binary' } ],
    [ 'GET', address, null, { responseType: 'binary' } ],
    [ 'GET', address, null, { responseType: 'binary' } ]
]);
responsesArrayNone = batch([
    [ 'GET', address, null, { responseType: 'none' } ],
    [ 'GET', address, null, { responseType: 'none' } ],
    [ 'GET', address, null, { responseType: 'none' } ]
]);
responsesArrayText = batch([
    [ 'GET', address, null, { responseType: 'text' } ],
    [ 'GET', address, null, { responseType: 'text' } ],
    [ 'GET', address, null, { responseType: 'text' } ]
]);
/*
Incorrectly passes due to https://github.com/microsoft/TypeScript/issues/32070
This is an obscure pattern that probably won't happen in practice.
To be enabled when the ability becomes available.

/// @ts-expect-error
responsesArrayText = batch([
    [ 'GET', address, null, { responseType: 'binary' } ],
    [ 'GET', address, null, { responseType: 'none' } ],
    [ 'GET', address, null, { responseType: 'text' } ]
]);
*/
responsesArray = batch([
    [ 'GET', address, null, { responseType: 'binary' } ],
    [ 'GET', address, null, { responseType: 'none' } ],
    [ 'GET', addressFromHttpURL, null, { responseType: 'text' } ]
]);
responsesArrayDefault = batch([ { method: 'GET', url: address } ]);
responsesArrayDefault = batch([
    { method: 'GET', url: address },
    { method: 'GET', url: address },
    { method: 'GET', url: addressFromHttpURL }
]);
responsesArrayBinary = batch([
    { method: 'GET', url: address, params: { responseType: 'binary' } },
    { method: 'GET', url: address, params: { responseType: 'binary' } },
    { method: 'GET', url: address, params: { responseType: 'binary' } }
]);
responsesArray = batch([
    { method: 'GET', url: address, params: { responseType: 'binary' } },
    { method: 'GET', url: address, params: { responseType: 'none' } },
    { method: 'GET', url: address, params: { responseType: 'text' } }
]);

// batch(object)
responsesMap = batch({});
responsesMapDefault = batch({ home: address });
responsesMapDefault = batch({
    home: address,
    about: address,
    forum: address
});
responsesMapBinary = batch({
    home: [ 'GET', address, null, { responseType: 'binary' } ],
    about: [ 'GET', address, null, { responseType: 'binary' } ],
    forum: [ 'GET', address, null, { responseType: 'binary' } ]
});
responsesMapNone = batch({
    home: [ 'GET', address, null, { responseType: 'none' } ],
    about: [ 'GET', address, null, { responseType: 'none' } ],
    forum: [ 'GET', address, null, { responseType: 'none' } ]
});
responsesMapText = batch({
    home: [ 'GET', address, null, { responseType: 'text' } ],
    about: [ 'GET', address, null, { responseType: 'text' } ],
    forum: [ 'GET', address, null, { responseType: 'text' } ]
});
// @ts-expect-error
responsesMapBinary = batch({
    home: [ 'GET', address, null, { responseType: 'binary' } ],
    about: [ 'GET', address, null, { responseType: 'none' } ],
    forum: [ 'GET', address, null, { responseType: 'text' } ]
});
responsesMap = batch({
    home: [ 'GET', address, null, { responseType: 'binary' } ],
    about: [ 'GET', address, null, { responseType: 'none' } ],
    forum: [ 'GET', address, null, { responseType: 'text' } ]
});
responsesMapDefault = batch({ home: { method: 'GET', url: address } });
responsesMapDefault = batch({
    home: { method: 'GET', url: address },
    about: { method: 'GET', url: address },
    forum: { method: 'GET', url: address }
});
responsesMapText = batch({
    home: { method: 'GET', url: address, params: { responseType: 'text' } },
    about: { method: 'GET', url: address, params: { responseType: 'text' } },
    forum: { method: 'GET', url: address, params: { responseType: 'text' } }
});
responsesMap = batch({
    home: { method: 'GET', url: address, params: { responseType: 'binary' } },
    about: { method: 'GET', url: address, params: { responseType: 'none' } },
    forum: { method: 'GET', url: address, params: { responseType: 'text' } }
});

// file
// @ts-expect-error
file();
// @ts-expect-error
file(5);
fileData = file('important data');
fileData = file([ 1, 2, 3 ]);
fileData = file(new Uint8Array([10, 12]).buffer);
// @ts-expect-error
file('', 5);
fileData = file('important data', 'data.txt');
// @ts-expect-error
file('important data', 'data.txt', 5);
fileData = file('important data', 'data.txt', 'text/plain');
// @ts-expect-error
file('important data', 'data.txt', 'text/plain', 5);
post(address, {
    recipient: 'research-lab-XIII',
    data: file('important data', 'data.txt'),
    summary: file('short digest', 'summary.txt'),
    analysis: file('thorough analysis', 'analysis.txt')
});

// Response parameters
response = get(address);
response.status_text;

// Response.clickLink
response = get(address);
responseDefault = response.clickLink();
// @ts-expect-error
response.clickLink(5);
responseDefault = response.clickLink({});
responseBinary = response.clickLink({
    selector: 'div.menu span#home',
    params: { responseType: 'binary' }
});
// @ts-expect-error
response.clickLink({}, 5);

// Response.html
response = get(address);
html = response.html();
// @ts-expect-error
response.html(5);
html = response.html('div span.item');
// @ts-expect-error
response.html('div span.item', 5);

// Response.json
response = get(address);
json = response.json();
// @ts-expect-error
response.json(5);
json = response.json('user.name');
// @ts-expect-error
response.json('user.name', 5);

// Response.submitForm
response = get(address);
responseDefault = response.submitForm();
// @ts-expect-error
response.submitForm(5);
responseDefault = response.submitForm({});
responseText = response.submitForm({
    formSelector: 'div.input form',
    fields: {
        title: 'How to train your dragon',
        body: 'This post shares my years of experience training dragons.'
    },
    submitSelector: 'div.input form button.submit',
    params: { responseType: 'text' }
});
// @ts-expect-error
response.submitForm({}, 5);

// CookieJar
jar = new CookieJar();
// @ts-expect-error
new CookieJar(5);

// cookieJar
jar = cookieJar();
// @ts-expect-error
cookieJar(5);

// CookieJar.cookiesForURL
jar = cookieJar();
// @ts-expect-error
jar.cookiesForURL();
// @ts-expect-error
jar.cookiesForURL(5);
cookies = jar.cookiesForURL(address);
// @ts-expect-error
jar.cookiesForURL(address, 5);

// CookieJar.set
jar = cookieJar();
// @ts-expect-error
jar.set();
// @ts-expect-error
jar.set(5);
// @ts-expect-error
jar.set('session');
// @ts-expect-error
jar.set('session', 5);
// @ts-expect-error
jar.set('session', 'abc123');
// @ts-expect-error
jar.set('session', 'abc123', null);
// @ts-expect-error
jar.set('session', 'abc123', {});
// @ts-expect-error
jar.set('session', 'abc123', { domain: 'example.com' });
jar.set(address, 'session', 'abc123'); // $ExpectType void
jar.set(address, 'session', 'abc123', null); // $ExpectType void
jar.set(address, 'session', 'abc123', {}); // $ExpectType void
// @ts-expect-error
jar.set(address, 'session', 'abc123', { badoption: true });
jar.set(address, 'session', 'abc123', { domain: 'example.com' }); // $ExpectType void
// $ExpectType void
jar.set(address, 'session', 'abc123', {
    domain: address,
    path: '/index.html',
    expires: '2019-06-23T18:04:45Z',
    max_age: 10,
    secure: true,
    http_only: true,
});
// @ts-expect-error
jar.set('session', 'abc123', {}, 5);
// @ts-expect-error
jar.set(address, 'session', 'abc123', {}, 5);

// expectedStatuses
expectedStatuses(200);
expectedStatuses({min: 200, max: 300});
expectedStatuses(200, 400);
expectedStatuses(200, {min: 200, max: 300}, 400);
expectedStatuses(200, {min: 200, max: 300}, 400, {min: 500, max: 600});
// @ts-expect-error
expectedStatuses(200, {min: 200, max: 300}, 400, {hola: 500, max: 600});
expectedStatuses(406, 500, {min: 200, max: 204}, 302, {min: 305, max: 405});

http.expectedStatuses(200);

// @ts-expect-error
setResponseCallback();
// @ts-expect-error
setResponseCallback('hola');
setResponseCallback(expectedStatuses(200));

http.setResponseCallback(http.expectedStatuses(200));

request('post', address, {}, {responseCallback: expectedStatuses(200)});

http.cookieJar().clear('https://test.k6.io');
http.cookieJar();
http.cookieJar().delete('https://test.k6.io', 'Oreo');
// @ts-expect-error
http.cookieJar().clear();
// @ts-expect-error
http.cookieJar().delete();
