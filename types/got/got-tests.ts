import got = require('got');
import cookie = require('cookie');
import FormData = require('form-data');
import Keyv = require('keyv');
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as url from 'url';
import tough = require('tough-cookie');

let str: string;
let buf: Buffer;

got('todomvc.com')
    .then(response => {
        str = response.body;
    })
    .catch((error: got.GotError) => {
        console.log(error.response.body);
    });

got('todomvc.com').cancel();

got('todomvc.com').then((response) => {
    response.statusCode; // $ExpectType number
    response.statusMessage; // $ExpectType string
});

got('todomvc.com', { json: true }).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', { json: true, body: {} }).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', { json: true, body: [{}] }).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', { json: true, form: true }).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', { json: true, form: true, encoding: null }).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', { json: true, form: true, encoding: null, hostname: 'todomvc' }).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', { form: true }).then(response => str = response.body);
got('todomvc.com', { form: true, body: {} }).then(response => str = response.body);
got('todomvc.com', { form: true, body: [{}] }).then(response => str = response.body);
got('todomvc.com', { form: true, body: [{}], encoding: null }).then(response => buf = response.body);
got('todomvc.com', { form: true, body: [{}], encoding: 'utf8' }).then(response => str = response.body);
got('todomvc.com', {
    form: true,
    body: [{}],
    encoding: 'utf8',
    hostname: 'todomvc'
}).then(response => str = response.body);
got('todomvc.com', {
    form: true,
    body: [{}],
    encoding: 'utf8',
    hostname: 'todomvc',
    timeout: 2000
}).then(response => str = response.body);
got('todomvc.com', {
    form: true,
    body: [{}],
    encoding: 'utf8',
    hostname: 'todomvc',
    timeout: { connect: 20, request: 20, socket: 20 }
}).then(response => str = response.body);
// following must lead to type checking error: got('todomvc.com', {form: true, body: ''}).then(response => str = response.body);

got('todomvc.com', { encoding: null, hostname: 'todomvc' }).then(response => buf = response.body);
got('todomvc.com', { encoding: 'utf8', hostname: 'todomvc' }).then(response => str = response.body);

got('todomvc.com', { hostname: 'todomvc' }).then(response => str = response.body);

got.get('todomvc.com', { hostname: 'todomvc' }).then(response => str = response.body);
got.post('todomvc.com', { hostname: 'todomvc' }).then(response => str = response.body);
got.put('todomvc.com', { hostname: 'todomvc' }).then(response => str = response.body);
got.patch('todomvc.com', { hostname: 'todomvc' }).then(response => str = response.body);
got.head('todomvc.com', { hostname: 'todomvc' }).then(response => str = response.body);
got.delete('todomvc.com', { hostname: 'todomvc' }).then(response => str = response.body);

got.stream('todomvc.com').pipe(fs.createWriteStream('index.html'));

fs.createReadStream('index.html').pipe(got.stream.get('todomvc.com'));
fs.createReadStream('index.html').pipe(got.stream.post('todomvc.com'));
fs.createReadStream('index.html').pipe(got.stream.put('todomvc.com'));
fs.createReadStream('index.html').pipe(got.stream.patch('todomvc.com'));
fs.createReadStream('index.html').pipe(got.stream.head('todomvc.com'));
fs.createReadStream('index.html').pipe(got.stream.delete('todomvc.com'));

let req: http.ClientRequest;
let res: http.IncomingMessage | undefined;
let opts: got.GotOptions<string | null>;
let err: got.GotError;
let href: string | undefined;
let progress: got.Progress;

const stream = got.stream('todomvc.com');
stream.addListener('request', (r) => req = r);
stream.addListener('response', (r) => res = r);
stream.addListener('redirect', (r, o) => {
    res = r;
    opts = o;
    href = o.href;
});
stream.addListener('error', (e, b, r) => {
    err = e;
    res = r;
});
stream.addListener('downloadProgress', (p) => {
    progress = p;
});
stream.addListener('uploadProgress', (p) => {
    progress = p;
});

stream.on('request', (r) => req = r);
stream.on('response', (r) => res = r);
stream.on('redirect', (r, o) => {
    res = r;
    opts = o;
    href = o.href;
});
stream.on('error', (e, b, r) => {
    err = e;
    res = r;
});
stream.on('downloadProgress', (p) => {
    progress = p;
});
stream.on('uploadProgress', (p) => {
    progress = p;
});

stream.once('request', (r) => req = r);
stream.once('response', (r) => res = r);
stream.once('redirect', (r, o) => {
    res = r;
    opts = o;
    href = o.href;
});
stream.once('error', (e, b, r) => {
    err = e;
    res = r;
});
stream.once('downloadProgress', (p) => {
    progress = p;
});
stream.once('uploadProgress', (p) => {
    progress = p;
});

stream.prependListener('request', (r) => req = r);
stream.prependListener('response', (r) => res = r);
stream.prependListener('redirect', (r, o) => {
    res = r;
    opts = o;
    href = o.href;
});
stream.prependListener('error', (e, b, r) => {
    err = e;
    res = r;
});
stream.prependListener('downloadProgress', (p) => {
    progress = p;
});
stream.prependListener('uploadProgress', (p) => {
    progress = p;
});

stream.prependOnceListener('request', (r) => req = r);
stream.prependOnceListener('response', (r) => res = r);
stream.prependOnceListener('redirect', (r, o) => {
    res = r;
    opts = o;
    href = o.href;
});
stream.prependOnceListener('error', (e, b, r) => {
    err = e;
    res = r;
});
stream.prependOnceListener('downloadProgress', (p) => {
    progress = p;
});
stream.prependOnceListener('uploadProgress', (p) => {
    progress = p;
});

stream.removeListener('request', (r) => req = r);
stream.removeListener('response', (r) => res = r);
stream.removeListener('redirect', (r, o) => {
    res = r;
    opts = o;
    href = o.href;
});
stream.removeListener('error', (e, b, r) => {
    err = e;
    res = r;
});
stream.removeListener('downloadProgress', (p) => {
    progress = p;
});
stream.removeListener('uploadProgress', (p) => {
    progress = p;
});

got('google.com', {
    headers: {
        cookie: cookie.serialize('foo', 'bar')
    }
});

const form = new FormData();

form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

got.post('google.com', {
    body: form
});

got('todomvc.com', {
    headers: {
        'user-agent': `my-module/ (https://github.com/username/my-module)`
    }
});

got('https://httpbin.org/404')
    .catch(err => err instanceof got.HTTPError && err.statusCode === 404);

got('todomvc', {
    throwHttpErrors: false
});

got('todomvc', {
    agent: {
        http: new http.Agent(),
        https: new https.Agent()
    }
});

got('todomvc', {
    cache: new Map(),
}).then(res => res.fromCache);

got('todomvc', {
    cache: new Keyv(),
}).then(res => res.fromCache);

got(new url.URL('http://todomvc.com'));

got(url.parse('http://todomvc.com'));

got('https://todomvc.com', { rejectUnauthorized: false });

got('/examples/angularjs', { baseUrl: 'http://todomvc.com' });
got('http://todomvc.com', { headers: { foo: 'bar' } });
got('http://todomvc.com', { cookieJar: new tough.CookieJar() });

// Test extension
got.extend({ method: 'POST' })('/example');
got.extend({ method: 'POST' }).extend({ headers: {} }).stream('/example');

// JSON options:
// $ExpectType Promise<any>
got.extend({ json: true })('/example').then(({ body }) => body);
// $ExpectType Promise<any>
got.extend({ json: true })('/example', { query: {} }).then(({ body }) => body);
// $ExpectType Promise<any>
got.extend({ baseUrl: 'https://localhost' }).extend({ json: true })('/example').then(({ body }) => body);
// $ExpectType Promise<string>
got.extend({})('/example').then(({ body }) => body);
// Form options:
// $ExpectType Promise<Buffer>
got.extend({ form: true, encoding: null })('/example').then(({ body }) => body);
// $ExpectType Promise<Buffer>
got.extend({ form: true, encoding: null })('/example', { query: {} }).then(({ body }) => body);
// $ExpectType Promise<Buffer>
got.extend({ form: true, encoding: null, body: {} })('/example').then(({ body }) => body);
// $ExpectType Promise<string>
got.extend({ form: true, encoding: 'utf8' })('/example').then(({ body }) => body);
// $ExpectType Promise<string>
got.extend({ form: true, encoding: 'utf8' })('/example', { query: {} }).then(({ body }) => body);
// $ExpectType Promise<string>
got.extend({ form: true, encoding: 'utf8', body: {} })('/example').then(({ body }) => body);
// Body options:
// $ExpectType Promise<Buffer>
got.extend({ encoding: null })('/example').then(({ body }) => body);
// $ExpectType Promise<Buffer>
got.extend({ encoding: null, body: '{}' })('/example').then(({ body }) => body);
// $ExpectType Promise<Buffer>
got.extend({ encoding: null, body: '{}' })('/example', { query: {} }).then(({ body }) => body);
// $ExpectType Promise<string>
got.extend({ encoding: 'utf8' })('/example').then(({ body }) => body);
// $ExpectType Promise<string>
got.extend({ encoding: 'utf8', body: '{}' })('/example').then(({ body }) => body);
// $ExpectType Promise<string>
got.extend({ encoding: 'utf8', body: '{}' })('/example', { query: {} }).then(({ body }) => body);

// Test retry options.
got('http://todomvc.com', { retry: 2 });
got('http://todomvc.com', {
    retry: {
        retries: 2,
        methods: ['GET', 'POST'],
        statusCodes: [408, 504],
        maxRetryAfter: 1,
        errorCodes: ['ETIMEDOUT']
    }
});
// Test custom retry error code. See https://github.com/sindresorhus/got/blob/9f3a09948ff80057b12af0af60846cc5b8f0372d/test/retry.js#L155
got('http://todomvc.com', {
    retry: {
        retries: 1,
        methods: ['GET'],
        errorCodes: ['OH_SNAP']
    }
});

got('http://todomvc.com', { throwHttpErrors: false });

// Test timeout options.
got('http://todomvc.com', { timeout: 1 });
got('http://todomvc.com', {
    timeout: {
        lookup: 1,
        connect: 2,
        secureConnect: 3,
        socket: 4,
        response: 5,
        send: 6,
        request: 7
    }
});

// Test got.TimeoutError.
got('http://todomvc.com', { timeout: 1 }).catch((err) => err instanceof got.TimeoutError);

// Test hooks.
got('example.com', {
    hooks: {
        init: [
            options => {
                options.baseUrl = 'https://google.com';
            }
        ]
    }
});
got('example.com', {
    hooks: {
        beforeRequest: [
            options => {
                options.headers!['x-foo'] = 'bar';
            }
        ]
    }
});
got('example.com', {
    hooks: {
        beforeRedirect: [
            options => {
                if (options.hostname === 'deadSite') {
                    options.hostname = 'fallbackSite';
                }
            }
        ]
    }
});
got('example.com', {
    hooks: {
        beforeRetry: [
            (options, error, retryCount) => {
                if (error instanceof got.HTTPError && error.statusCode === 413) { // Payload too large
                    options.body = 'new body';
                }
            }
        ]
    }
});
got('example.com', {
    hooks: {
        beforeError: [
            error => {
                return error;
            }
        ]
    }
});
got('example.com', {
    hooks: {
        afterResponse: [
            (response, retryWithMergedOptions) => {
                if (response.statusCode === 401) { // Unauthorized
                    const updatedOptions = {
                        headers: {
                            token: 'new token' // Refresh the access token
                        }
                    };

                    // Make a new retry
                    return retryWithMergedOptions(updatedOptions);
                }

                // No changes otherwise
                return response;
            }
        ]
    }
});
// Test async hooks.
{
    const doSomethingAsync = (): Promise<any> => {
        throw new Error('unimplemented');
    };

    got('example.com', {
        hooks: {
            beforeRequest: [
                async () => {
                    await doSomethingAsync();
                }
            ],
            beforeRedirect: [
                async () => {
                    await doSomethingAsync();
                }
            ],
            beforeRetry: [
                async () => {
                    await doSomethingAsync();
                }
            ],
            beforeError: [
                async (error) => {
                    await doSomethingAsync();
                    return error;
                }
            ],
            afterResponse: [
                async (response) => {
                    await doSomethingAsync();
                    return response;
                }
            ]
        }
    });
}

// Test request option
got('example.com', {
    request: https.request
});
