import fetcher from 'make-fetch-happen';

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
