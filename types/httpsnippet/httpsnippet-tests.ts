import HTTPSnippet = require('httpsnippet');

const snippet = new HTTPSnippet({
    method: 'POST',
    url: 'https://asd',
    httpVersion: '2.0',
    cookies: [],
    headers: [],
    bodySize: 0,
    headersSize: 12,
    queryString: [],
});

// $ExpectType string | false
snippet.convert('c', 'libcurl');
