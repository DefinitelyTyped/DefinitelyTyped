////////////////////
// tests arc.http.async – https://arc.codes/docs/en/reference/runtime/node#arc.http.async
import { HttpRequest, HttpResponse } from '../index';
import * as arc from '../index';

exports.handler = arc.http.async(auth, handlerasync);

async function auth(request: HttpRequest): Promise<HttpResponse | undefined> {
    if (!request?.session?.account) {
        return { status: 403 };
    }
}

async function handlerasync(request: HttpRequest) {
    return {
        json: { ok: true },
    };
}

////////////////////
// tests arc.http.express – https://arc.codes/docs/en/reference/runtime/node#arc.http.express
import express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/cool', (req, res) => res.send('very cool'));

//exports.handler = arc.http.express(app);

////////////////////
// tests for arc.http.session – https://arc.codes/docs/en/reference/runtime/node#arc.http.session
async function handlersession(req: HttpRequest): Promise<HttpResponse | undefined> {
    // read the session
    let session = await arc.http.session.read(req);
    // save the session into a cookie string
    let cookie = await arc.http.session.write({ count: 1 });
    // write the cookie to the browser
    return {
        statusCode: 200,
        headers: { 'set-cookie': cookie },
    };
}

////////////////////
// tests for arc.http.proxy – https://arc.codes/docs/en/reference/runtime/node#arc.http.proxy
let asap = arc.http.proxy({
    spa: false,
    alias: {
        '/playground': '/playground.html',
    },
});

exports.handler = arc.http.async(asap);
