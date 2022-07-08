import syncFetch = require('sync-fetch');

const { FetchError, Headers, Request, Response } = syncFetch;

syncFetch(''); // $ExpectType SyncResponse

syncFetch(new URL(''));
syncFetch(new Request(''));
syncFetch(new Request(''), {});

syncFetch('', {
    body: '',
    headers: { '': '' },
    method: '',
    redirect: 'follow',
    compress: true,
    follow: 0,
    size: 0,
    timeout: 0,
});

syncFetch('', {
    body: new URLSearchParams(),
});
syncFetch('', {
    body: new ArrayBuffer(0),
});

syncFetch('', {
    agent: undefined, // $ExpectError
});
syncFetch('', {
    signal: undefined, // $ExpectError
});

new Request('');
new Request('', {});

new Request('', {
    body: '',
    headers: { '': '' },
    method: '',
    redirect: 'follow',
    compress: true,
    follow: 0,
    size: 0,
    timeout: 0,
});

const request = new Request('');
request.clone; // $ExpectType () => SyncRequest
request.agent; // $ExpectError

new Response();
new Response('');
new Response('', {});

new Response('', {
    headers: { '': '' },
    size: 0,
    status: 0,
    statusText: '',
    timeout: 0,
    url: '',
});

new Response(new URLSearchParams());
new Response(new ArrayBuffer(0));

const response = new Response();
response.clone; // $ExpectType () => SyncResponse

Response.error; // $ExpectError
Response.redirect; // $ExpectError

new Headers({ '': '' });
new Headers([['', '']]);
new Headers(new Headers());

new FetchError('', '');
