import Response = require('responselike');

const response = new Response(200, { foo: 'bar' }, Buffer.from('Hi!'), 'https://example.com');

response.statusCode; // $ExpectType number
response.headers; // $ExpectType { [header: string]: string | string[] | undefined; }
response.body; // $ExpectType Buffer
response.url; // $ExpectType string

response.pipe(process.stdout);
