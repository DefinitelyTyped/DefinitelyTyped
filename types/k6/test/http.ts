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
del(); // $ExpectError
del(5); // $ExpectError
responseDefault = del(address);
del(address, 5); // $ExpectError
responseDefault = del(address, 'skadoosh');
responseDefault = del(address, {});
responseDefault = del(address, { item: '576' });
del(address, {}, 5); // $ExpectError
responseBinary = del(address, null, { responseType: 'binary' });
del(address, {}, {}, 5); // $ExpectError

// get
get(); // $ExpectError
get(5); // $ExpectError
responseDefault = get(address);
get(address, 5); // $ExpectError
responseDefault = get(address, {});
responseBinary = get(address, { responseType: 'binary' });
responseNone = get(address, { responseType: 'none' });
responseText = get(address, { responseType: 'text' });
get(address, {}, 5); // $ExpectError

// options
options(); // $ExpectError
options(5); // $ExpectError
responseDefault = options(address);
options(address, 5); // $ExpectError
responseDefault = options(address, 'choices choices');
responseDefault = options(address, {});
responseDefault = options(address, { theme: 'forest' });
responseDefault = options(address, new ArrayBuffer(8));
options(address, {}, 5); // $ExpectError
responseNone = options(address, {}, { responseType: 'none' });
options(address, {}, {}, 5); // $ExpectError

// patch
patch(); // $ExpectError
patch(5); // $ExpectError
responseDefault = patch(address);
patch(address, 5); // $ExpectError
responseDefault = patch(address, 'a life of contrasts and patchwork');
responseDefault = patch(address, {});
responseDefault = patch(address, { weaponOfChoice: 'pen' });
responseDefault = patch(address, new ArrayBuffer(8));
patch(address, {}, 5); // $ExpectError
responseBinary = patch(address, {}, { responseType: 'binary' });
patch(address, {}, {}, 5); // $ExpectError

// post
post(); // $ExpectError
post(5); // $ExpectError
responseDefault = post(address);
post(address, 5); // $ExpectError
responseDefault = post(address, 'hello in cyberspace');
responseDefault = post(address, {});
responseDefault = post(address, { query: 'kittens' });
responseDefault = post(address, new ArrayBuffer(8));
post(address, {}, 5); // $ExpectError
responseNone = post(address, null, { responseType: 'none' });
post(address, {}, {}, 5); // $ExpectError

// put
put(); // $ExpectError
put(5); // $ExpectError
responseDefault = put(address);
put(address, 5); // $ExpectError
responseDefault = put(address, 'cat in box');
responseDefault = put(address, {});
responseDefault = put(address, { box: 'cat' });
responseDefault = put(address, new ArrayBuffer(8));
put(address, {}, 5); // $ExpectError
responseText = put(address, null, { responseType: 'text' });
put(address, {}, {}, 5); // $ExpectError

// request
request(); // $ExpectError
request(5); // $ExpectError
request('get'); // $ExpectError
request('get', 5); // $ExpectError
responseDefault = request('get', address);
request('post', address, 5); // $ExpectError
responseDefault = request('post', address, 'welcome to the internet');
responseDefault = request('post', address, {});
responseDefault = request('post', address, { query: 'quokka' });
responseDefault = request('post', address, new ArrayBuffer(8));
request('post', address, {}, 5); // $ExpectError
responseBinary = request('post', address, {}, { responseType: 'binary' });
request('post', address, {}, {}, 5); // $ExpectError

// request params
responseDefault = request('post', address, {}, {timeout: '10s'});
responseDefault = request('post', address, {}, {timeout: 10});

// batch
batch(); // $ExpectError
batch(5); // $ExpectError
batch([ address ], 5); // $ExpectError

// batch(Array)
responsesArray = batch([]);
responsesArrayDefault = batch([ address ]);
responsesArrayDefault = batch([ address, address, address ]);
responsesArrayDefault = batch([
    [ 'GET', address ],
    [ 'POST', address, 'hello' ],
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

/// $ExpectError
responsesArrayText = batch([
    [ 'GET', address, null, { responseType: 'binary' } ],
    [ 'GET', address, null, { responseType: 'none' } ],
    [ 'GET', address, null, { responseType: 'text' } ]
]);
*/
responsesArray = batch([
    [ 'GET', address, null, { responseType: 'binary' } ],
    [ 'GET', address, null, { responseType: 'none' } ],
    [ 'GET', address, null, { responseType: 'text' } ]
]);
responsesArrayDefault = batch([ { method: 'GET', url: address } ]);
responsesArrayDefault = batch([
    { method: 'GET', url: address },
    { method: 'GET', url: address },
    { method: 'GET', url: address }
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
// $ExpectError
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
file(); // $ExpectError
file(5); // $ExpectError
fileData = file('important data');
fileData = file([ 1, 2, 3 ]);
fileData = file(new Uint8Array([10, 12]).buffer);
file('', 5); // $ExpectError
fileData = file('important data', 'data.txt');
file('important data', 'data.txt', 5); // $ExpectError
fileData = file('important data', 'data.txt', 'text/plain');
file('important data', 'data.txt', 'text/plain', 5); // $ExpectError
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
response.clickLink(5); // $ExpectError
responseDefault = response.clickLink({});
responseBinary = response.clickLink({
    selector: 'div.menu span#home',
    params: { responseType: 'binary' }
});
response.clickLink({}, 5); // $ExpectError

// Response.html
response = get(address);
html = response.html();
response.html(5); // $ExpectError
html = response.html('div span.item');
response.html('div span.item', 5); // $ExpectError

// Response.json
response = get(address);
json = response.json();
response.json(5); // $ExpectError
json = response.json('user.name');
response.json('user.name', 5); // $ExpectError

// Response.submitForm
response = get(address);
responseDefault = response.submitForm();
response.submitForm(5); // $ExpectError
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
response.submitForm({}, 5); // $ExpectError

// CookieJar
jar = new CookieJar();
new CookieJar(5); // $ExpectError

// cookieJar
jar = cookieJar();
cookieJar(5); // $ExpectError

// CookieJar.cookiesForURL
jar = cookieJar();
jar.cookiesForURL(); // $ExpectError
jar.cookiesForURL(5); // $ExpectError
cookies = jar.cookiesForURL(address);
jar.cookiesForURL(address, 5); // $ExpectError

// CookieJar.set
jar = cookieJar();
jar.set(); // $ExpectError
jar.set(5); // $ExpectError
jar.set('session'); // $ExpectError
jar.set('session', 5); // $ExpectError
jar.set('session', 'abc123'); // $ExpectError
jar.set('session', 'abc123', null); // $ExpectError
jar.set('session', 'abc123', {}); // $ExpectError
jar.set('session', 'abc123', { domain: 'example.com' }); // $ExpectError
jar.set(address, 'session', 'abc123'); // $ExpectType void
jar.set(address, 'session', 'abc123', null); // $ExpectType void
jar.set(address, 'session', 'abc123', {}); // $ExpectType void
jar.set(address, 'session', 'abc123', { badoption: true }); // $ExpectError
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
jar.set('session', 'abc123', {}, 5); // $ExpectError
jar.set(address, 'session', 'abc123', {}, 5); // $ExpectError

// expectedStatuses
expectedStatuses(200);
expectedStatuses({min: 200, max: 300});
expectedStatuses(200, 400);
expectedStatuses(200, {min: 200, max: 300}, 400);
expectedStatuses(200, {min: 200, max: 300}, 400, {min: 500, max: 600});
expectedStatuses(200, {min: 200, max: 300}, 400, {hola: 500, max: 600}); // $ExpectError
expectedStatuses(406, 500, {min: 200, max: 204}, 302, {min: 305, max: 405});

http.expectedStatuses(200);

setResponseCallback(); // $ExpectError
setResponseCallback('hola'); // $ExpectError
setResponseCallback(expectedStatuses(200));

http.setResponseCallback(http.expectedStatuses(200));

request('post', address, {}, {responseCallback: expectedStatuses(200)});
