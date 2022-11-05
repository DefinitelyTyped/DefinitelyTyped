import got = require('got');
import cookie = require('cookie');
import FormData = require('form-data');
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as url from 'url';

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

got('todomvc.com', {json: true}).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', {json: true, body: {}}).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', {json: true, body: [{}]}).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', {json: true, form: true}).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', {json: true, form: true, encoding: null}).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', {json: true, form: true, encoding: null, hostname: 'todomvc'}).then((response) => {
    response.body; // $ExpectType any
});

got('todomvc.com', {form: true}).then(response => str = response.body);
got('todomvc.com', {form: true, body: {}}).then(response => str = response.body);
got('todomvc.com', {form: true, body: [{}]}).then(response => str = response.body);
got('todomvc.com', {form: true, body: [{}], encoding: null}).then(response => buf = response.body);
got('todomvc.com', {form: true, body: [{}], encoding: 'utf8'}).then(response => str = response.body);
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
    timeout: {connect: 20, request: 20, socket: 20}
}).then(response => str = response.body);
// following must lead to type checking error: got('todomvc.com', {form: true, body: ''}).then(response => str = response.body);

got('todomvc.com', {encoding: null, hostname: 'todomvc'}).then(response => buf = response.body);
got('todomvc.com', {encoding: 'utf8', hostname: 'todomvc'}).then(response => str = response.body);

got('todomvc.com', {hostname: 'todomvc'}).then(response => str = response.body);

got.get('todomvc.com', {hostname: 'todomvc'}).then(response => str = response.body);
got.post('todomvc.com', {hostname: 'todomvc'}).then(response => str = response.body);
got.put('todomvc.com', {hostname: 'todomvc'}).then(response => str = response.body);
got.patch('todomvc.com', {hostname: 'todomvc'}).then(response => str = response.body);
got.head('todomvc.com', {hostname: 'todomvc'}).then(response => str = response.body);
got.delete('todomvc.com', {hostname: 'todomvc'}).then(response => str = response.body);

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

declare const customCache: {
    set(key: string, value: any, ttl?: number): void;
    get(key: string): any;
    delete(key: string): void;
};
got('todomvc', {
    cache: customCache
}).then(res => res.fromCache);

got(new url.URL('http://todomvc.com'));

got(url.parse('http://todomvc.com'));

got('https://todomvc.com', { rejectUnauthorized: false });
