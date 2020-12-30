import fetcher from 'make-fetch-happen';
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

// Test both the DOM URL and the Node.js `url` module.
// $ExpectType Promise<Response>
fetcher('http://url', { proxy: new URL('http://secure-proxy') });
// $ExpectType Promise<Response>
fetcher('http://url', { proxy: new NodeURL('http://secure-proxy') });
