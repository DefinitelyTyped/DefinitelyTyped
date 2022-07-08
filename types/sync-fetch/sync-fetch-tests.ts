import syncFetch = require('sync-fetch');

const { FetchError, Headers, Request, Response } = syncFetch;

syncFetch(''); // $ExpectType SyncResponse
syncFetch(new URL(''));
syncFetch(new Request(''));
syncFetch('', {});
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

new Request(''); // $ExpectType SyncRequest
new Request(new URL(''));
new Request(new Request(''));
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
request.agent; // $ExpectError
request.arrayBuffer(); // $ExpectType ArrayBuffer
request.blob(); // $ExpectType Promise<Blob>
request.buffer(); // $ExpectType Buffer
request.clone(); // $ExpectType SyncRequest
request.json(); // $ExpectType any
request.text(); // $ExpectType string
request.textConverted; // $ExpectError

new Response(); // $ExpectType SyncResponse
new Response('');
new Response(new URLSearchParams());
new Response(new ArrayBuffer(0));
new Response('', {});
new Response('', {
    headers: { '': '' },
    size: 0,
    status: 0,
    statusText: '',
    timeout: 0,
    url: '',
});
Response.error; // $ExpectError
Response.redirect; // $ExpectError
const response = new Response();
response.arrayBuffer(); // $ExpectType ArrayBuffer
response.blob(); // $ExpectType Promise<Blob>
response.buffer(); // $ExpectType Buffer
response.clone(); // $ExpectType SyncResponse
response.json(); // $ExpectType any
response.text(); // $ExpectType string
response.textConverted; // $ExpectError

new Headers();
new Headers({ '': '' });
new Headers([['', '']]);
new Headers(new Headers());

new FetchError('', '');
