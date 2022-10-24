import fileFetch = require('file-fetch');
import protoFetch = require('proto-fetch');

declare const customFetch: (url: any, options?: any) => unknown;

const fetch = protoFetch({
    file: fileFetch,
    http: customFetch
});

const response: Promise<Response> = fetch('http://example.com/');
