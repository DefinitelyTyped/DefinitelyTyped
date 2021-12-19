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

// {
//     const formEncoded = new paypal.FormEncoded();

//     formEncoded.contentType(); // $ExpectType RegExp
//     formEncoded.encode(req); // $ExpectType string
//     formEncoded.decode(); // $ExpectType Error
// }

// {
//     const json = new paypal.Json();

//     json.contentType(); // $ExpectType RegExp
//     json.encode(req); // $ExpectType string
//     json.decode(JSON.stringify(req.body)); // $ExpectType object
// }

// {
//     const text = new paypal.Text();

//     text.contentType(); // $ExpectType RegExp
//     text.encode(req); // $ExpectType string
//     text.decode(''); // $ExpectType string
// }

// {
//     const multipart = new paypal.Multipart();

//     multipart.contentType(); // $ExpectType RegExp
//     multipart.encode(req); // $ExpectType Buffer
//     multipart.decode(); // $ExpectType Error
//     multipart.formatHeaders(req.headers);
// }
