import paypal = require('@paypal/paypalhttp');

const env = new paypal.Environment('https://example.com');
let client = new paypal.HttpClient(env);
client = new paypal.HttpClient(env);
client.addInjector(req => {
    console.log(req);
});
client.addInjector(req => {
    req.headers['Request-Id'] = 'abcd';
});

const req: paypal.HttpRequest = {
    path: '/path/to/resource',
    verb: 'GET',
    headers: {
        'X-Custom-Header': 'custom value',
    },
    body: {},
};

client.execute(req).then(resp => {
    // $ExpectType number
    resp.statusCode;
    // $ExpectType HttpHeaders
    resp.headers;
    // $ExpectType any
    resp.result;
});

async () => {
    const resp = await client.execute(req);

    // $ExpectType number
    resp.statusCode;
    // $ExpectType HttpHeaders
    resp.headers;
    // $ExpectType any
    resp.result;
};

client
    .execute(req)
    .then(resp => {
        // $ExpectType number
        resp.statusCode;
        // $ExpectType HttpHeaders
        resp.headers;
        // $ExpectType any
        resp.result;
    })
    .catch(err => {
        if (err.statusCode) {
            // $ExpectType any
            err.statusCode;
            // $ExpectType any
            err.headers;
            // $ExpectType any
            err.message;
        } else {
            // Something else went wrong
            console.error(err);
        }
    });
