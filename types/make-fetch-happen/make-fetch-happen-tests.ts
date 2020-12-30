import fetcher from 'make-fetch-happen';
import { Integrity } from 'ssri';
import { URL as NodeURL } from 'url';

// Needs arguments when invoked
// $ExpectError
fetcher();

// Works with no defaults applied.
// $ExpectType FetchInterface
fetcher.defaults();

// When used recursively, still needs arguments when invoked.
// $ExpectError
fetcher.defaults()();

// $ExpectType FetchInterface
fetcher.defaults();

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
fetcher('https://secure', { cache: "invalid-option" });

const cache = new Cache();
// $ExpectType Promise<Response>
fetcher('https://secure', { cacheManager: cache });

// Test using a `Request` to the `fetcher` instead of URL.
// $ExpectType Promise<Response>
fetcher(new Request('http://localhost'), { ca: 'MY_CA_PEM' });

// Test the SSRI types from `ssri`
const integrity = new Integrity();
// $ExpectType Promise<Response>
fetcher('https://url', { integrity });

// Test the `retry` types.
// $ExpectType Promise<Response>
fetcher('http://url', { retry: { retries: 1, maxTimeout: 1 }});

// Test both the DOM URL and the Node.js `url` module.
// $ExpectType Promise<Response>
fetcher('http://url', { proxy: new URL('http://secure-proxy') });
// $ExpectType Promise<Response>
fetcher('http://url', { proxy: new NodeURL('http://secure-proxy') });

// Test the imported `tls` type `rejectUnauthorized` remapped to `strictSSL`.
// $ExpectType Promise<Response>
fetcher('https://url', { strictSSL: true });
