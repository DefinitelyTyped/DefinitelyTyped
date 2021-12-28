import paypal = require('@paypal/paypalhttp');

const req: paypal.HttpRequest = {
    path: '/path',
    verb: 'POST',
    headers: {
        'X-Custom-Header': 'custom value',
    },
    body: {},
};

{
    const formPart = new paypal.FormPart('value', req.headers);

    formPart.headers; // $ExpectType HttpHeaders
    formPart.value; // $ExpectType any
}
