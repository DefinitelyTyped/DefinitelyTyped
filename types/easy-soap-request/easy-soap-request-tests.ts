// import { Response } from "easy-soap-request";
import soapRequest = require("easy-soap-request");

// minimal required options
// $ExpectType Promise<Response>
const promise = soapRequest({
    url: "http://example.com/soap",
    xml: "<xml></xml>",
});

// all posible options
// $ExpectType Promise<Response>
soapRequest({
    url: "http://example.com/soap",
    xml: "<xml></xml>",
    timeout: 100000,
    headers: {
        SoapAction: "test",
    },
    maxBodyLength: 100,
    maxContentLength: 100,
    method: "PUT",
    proxy: {
        host: "http://proxy.example.com",
        port: 1080,
    },
    extraOpts: {
        // test some axios options
        maxRedirects: 1,
        decompress: false,
        socketPath: null,
    },
});

// Missing required options
// @ts-expect-error
soapRequest({});
