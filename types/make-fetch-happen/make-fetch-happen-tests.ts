import fetcher = require('make-fetch-happen');
import { Integrity } from 'ssri';
import { URL as NodeURL } from 'url';
import { Agent } from 'http';
import { Headers } from 'node-fetch';

// Needs arguments when invoked
// $ExpectError
fetcher();

// Works with no defaults applied.
// $ExpectType FetchInterface
fetcher.defaults();

// When used recursively, still needs arguments when invoked.
// $ExpectError
fetcher.defaults()();

// Recursively, should do the same!
// $ExpectType FetchInterface
fetcher.defaults().defaults();

// Returns a Response when fetched.
// $ExpectType Promise<Response>
fetcher('http://url');

// $ExpectType Promise<Response>
fetcher.defaults('http://default-uri')({
    cert: 'MY_PEM',
});

// $ExpectType Promise<Response>
fetcher('http://default-uri', {
    cert: 'MY_PEM',
});

// $ExpectType Promise<Response>
fetcher.defaults()('http://url');

// $ExpectType Promise<Response>
fetcher.defaults().defaults()('http://url');

// $ExpectError
fetcher('https://secure', { cache: 'invalid-option' });

// Test existence of a couple important types from the `dom` lib (`Cache`, `Request`)
// These are type errors when the `dom` types aren't referenced
// via the triple slash directive <reference lib="dom" />
// $ExpectType Cache
const cache = new Cache();
// $ExpectType Request
const req = new Request('http://localhost');

// $ExpectType Promise<Response>
fetcher('https://secure', { cacheManager: cache });

// Test using a `Request` to the `fetcher` instead of URL.

// $ExpectType Promise<Response>
fetcher(req, { ca: 'MY_CA_PEM' });

// Test the SSRI types from `ssri`
const integrity = new Integrity();
// $ExpectType Promise<Response>
fetcher('https://url', { integrity });

// Test the `retry` types.
// $ExpectType Promise<Response>
fetcher('http://url', { retry: { retries: 1, maxTimeout: 1 } });

// Test both the DOM URL and the Node.js `url` module.
// $ExpectType Promise<Response>
fetcher('http://url', { proxy: new URL('http://secure-proxy') });
// $ExpectType Promise<Response>
fetcher('http://url', { proxy: new NodeURL('http://secure-proxy') });

// Test the imported `tls` type `rejectUnauthorized` remapped to `strictSSL`.
// $ExpectType Promise<Response>
fetcher('https://url', { strictSSL: true });

// Test the various types of `headers` that can be passed in as options
// $ExpectType Promise<Response>
fetcher('http://url', { headers: { key: 'value' } });
// $ExpectType Promise<Response>
fetcher('http://url', { headers: new Headers({ key: 'value' }) });
// $ExpectType Promise<Response>
fetcher('http://url', { headers: [['key', 'value']] });

// Test the various types of `agent` that can be passed in as options
// $ExpectType Promise<Response>
fetcher('http://url', { agent: new Agent() });
// $ExpectType Promise<Response>
fetcher('http://url', { agent: () => new Agent() });

// Test the `Cache` return type of the `delete` method.
// $ExpectType Promise<boolean>
fetcher.delete('http://ok');
// $ExpectType Promise<boolean>
fetcher.delete('http://ok', { cacheManager: cache });
