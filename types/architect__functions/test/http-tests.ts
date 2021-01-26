////////////////////
// tests arc.http.async: https://arc.codes/docs/en/reference/runtime/node#arc.http.async
import * as arc from '@architect/functions';

exports.handler = arc.http.async(auth, handlerasync);

async function auth(request: arc.HttpRequest): Promise<arc.HttpResponse | undefined> {
    if (!request.session || !request.session.account) {
        return { status: 403 };
    }
}

async function handlerasync(request: arc.HttpRequest) {
    return {
        json: { ok: true },
    };
}

////////////////////
// tests arc.http.express: https://arc.codes/docs/en/reference/runtime/node#arc.http.express
import express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/cool', (req, res) => res.send('very cool'));

////////////////////
// tests for arc.http.session: https://arc.codes/docs/en/reference/runtime/node#arc.http.session
async function handlersession(req: arc.HttpRequest): Promise<arc.HttpResponse | undefined> {
    // read the session
    const session = await arc.http.session.read(req);
    // save the session into a cookie string
    const cookie = await arc.http.session.write({ count: 1 });
    // write the cookie to the browser
    return {
        statusCode: 200,
        headers: { 'set-cookie': cookie },
    };
}

////////////////////
// tests for arc.http.proxy: https://arc.codes/docs/en/reference/runtime/node#arc.http.proxy
const asap = arc.http.proxy({
    spa: false,
    alias: {
        '/playground': '/playground.html',
    },
});

exports.handler = arc.http.async(asap);
