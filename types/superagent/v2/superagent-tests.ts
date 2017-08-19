// via: http://visionmedia.github.io/superagent/

import * as request from 'superagent';
import * as fs from 'fs';
import * as assert from 'assert';
import { Agent } from 'https';

// Examples taken from https://github.com/visionmedia/superagent/blob/gh-pages/docs/index.md
// and https://github.com/visionmedia/superagent/blob/master/Readme.md

const httpsAgent: Agent = new Agent();

request
    .post('/api/pet')
    .send({name: 'Manny', species: 'cat'})
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .agent(httpsAgent)
    .end((err, res) => {
        if (res.ok) {
            console.log('yay got ' + JSON.stringify(res.body));
        } else {
            console.log('Oh no! error ' + res.text);
        }
    });

const agent = request.agent();
agent
    .post('/api/pet')
    .send({name: 'Manny', species: 'cat'})
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end((err, res) => {
        if (res.error) {
            console.log('oh no ' + res.error.message);
        } else {
            console.log('got ' + res.status + ' response');
        }
    });

const callback = (err: any, res: request.Response) => {};

// Request basics
request
    .get('/search')
    .end(callback);

request('GET', '/search')
    .end(callback);

request
    .get('http://example.com/search')
    .end(callback);

request
    .head('/favicon.ico')
    .end(callback);

request
    .del('/user/1')
    .end(callback);

request
    .delete('/user/1')
    .end(callback);

request
    .delete('/user/1')
    .send()
    .end(callback);

request('/search')
    .end(callback);

// Setting header fields
request
    .get('/search')
    .set('API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(callback);

request
    .get('/search')
    .set({'API-Key': 'foobar', Accept: 'application/json'})
    .end(callback);

// GET requests
request
    .get('/search')
    .query({query: 'Manny'})
    .query({range: '1..5'})
    .query({order: 'desc'})
    .end(callback);

request
    .get('/search')
    .query({query: 'Manny', range: '1..5', order: 'desc'})
    .end(callback);

request
    .get('/querystring')
    .query('search=Manny&range=1..5')
    .end(callback);

request
    .get('/querystring')
    .query('search=Manny')
    .query('range=1..5')
    .end(callback);

// HEAD requests
request
    .head('/users')
    .query({email: 'joe@smith.com'})
    .end(callback);

// POST / PUT requests
request.post('/user')
    .set('Content-Type', 'application/json')
    .send('{"name":"tj","pet":"tobi"}')
    .end(callback);

request.post('/user')
    .send({name: 'tj', pet: 'tobi'})
    .end(callback);

request.post('/user')
    .send({name: 'tj'})
    .send({pet: 'tobi'})
    .end(callback);

request.post('/user')
    .send('name=tj')
    .send('pet=tobi')
    .end(callback);

request.post('/user')
    .type('form')
    .send({name: 'tj'})
    .send({pet: 'tobi'})
    .end(callback);

// Setting the Content-Type
request.post('/user')
    .set('Content-Type', 'application/json');

request.post('/user')
    .type('application/json');

request.post('/user')
    .type('json');

request.post('/user')
    .type('png');

// Setting Accept
request.get('/user')
    .accept('application/json');

request.get('/user')
    .accept('json');

request.get('/user')
    .accept('png');

// Query strings
request
    .post('/')
    .query({format: 'json'})
    .query({dest: '/login'})
    .send({post: 'data', here: 'wahoo'})
    .end(callback);

// Parsing response bodies
request('/search')
  .end((res: request.Response) => {
    const status: number = res.status;
    const body = res.body;
    const files: object = res.files;
    const text: string = res.text;
    const contentLength = res.header['content-length'];
    const contentType: string = res.type;
    const charset: string = res.charset;
  });

// Custom parsers
request
    .post('/search')
    .parse((res, callback) => {
        res.setEncoding("binary");
        let data = "";
        res.on("data", (chunk: string) => {
            data += chunk;
        });

        res.on("end", () => {
            callback(null, new Buffer(data, "base64"));
        });
    })
    .end((res: request.Response) => {
        res.body.toString("hex");
    });

const req = request.get('/hoge');
// Aborting requests
req.abort();

// Request timeouts
req.timeout(100);

const reqUrl: string = req.url;
const reqMethod: string = req.method;
const reqCookies: string = req.cookies;

console.log(reqMethod + ' request to ' + reqUrl + ' cookies ' + reqCookies);

// Basic authentication
request.get('http://tobi:learnboost@local').end(callback);
request
    .get('http://local')
    .auth('tobo', 'learnboost')
    .end(callback);

// Following redirects
request
    .get('/some.png')
    .redirects(2)
    .end(callback);

// Piping data
/*
(() => {
const stream = fs.createReadStream('path/to/my.json');
const req = request.post('/somewhere');
req.type('json');
stream.pipe(req);
})();
*/

(() => {
    const stream = fs.createWriteStream('path/to/my.json');
    const req = request.get('/some.json');
    req.pipe(stream);
})();

// Multipart requests
(() => {
    const req = request.post('/upload');

    req.part()
        .set('Content-Type', 'image/png')
        .set('Content-Disposition', 'attachment; filename="myimage.png"')
        .write('some image data')
        .write('some more image data');

    req.part()
        .set('Content-Disposition', 'form-data; name="name"')
        .set('Content-Type', 'text/plain')
        .write('tobi');

    req.end(callback);
})();

// Attaching files
request
    .post('/upload')
    .attach('avatar', 'path/to/tobi.png', 'user.png')
    .attach('image', 'path/to/loki.png')
    .attach('file', 'path/to/jane.png')
    .end(callback);

// Field values
request
    .post('/upload')
    .field('user[name]', 'Tobi')
    .field('user[email]', 'tobi@learnboost.com')
    .attach('image', 'path/to/tobi.png')
    .end(callback);

// CORS
request
    .get('http://localhost:4001/')
    .withCredentials()
    .end(callback);

// Error handling
request
    .post('/upload')
    .attach('image', 'path/to/tobi.png')
    .end((err: any, res: request.Response): void => {
    });
request
    .post('/upload')
    .attach('image', 'path/to/tobi.png')
    .on('error', (err: any) => {
    })
    .end(callback);

// Promise
request
    .get('/search')
    .then((response) => {
    })
    .catch((error) => {
    });
// Requesting binary data.
// adapted from: https://github.com/visionmedia/superagent/blob/v2.0.0/test/client/request.js#L110
request
  .get('/blob')
  .responseType('blob')
  .end((err, res) => {
    assert(res.xhr instanceof XMLHttpRequest);
    assert(res.xhr.response instanceof Blob);
  });
