import { ServerResponse } from "http";
import { Headers, RequestData, ResponseData } from "http-headers";
import httpHeaders = require("http-headers");

// test type exports
type Req = RequestData;
type Res = ResponseData;
type H = Headers;
type V = httpHeaders.HttpVersion;

declare const res: ServerResponse;

const h: RequestData | ResponseData | Headers = httpHeaders(res);
// @ts-expect-error
const h1: ResponseData | Headers = httpHeaders(res);
// @ts-expect-error
const h2: RequestData | ResponseData = httpHeaders(res);
// @ts-expect-error
const h3: RequestData | Headers = httpHeaders(res);
httpHeaders(Buffer.alloc(1));
httpHeaders("foo");

if ("method" in h) {
    const req = h as RequestData;
    req.headers; // $ExpectType Headers
    req.method; // $ExpectType string
    req.version; // $ExpectType HttpVersion
    req.version.major; // $ExpectType number
    req.version.minor; // $ExpectType number
} else if ("statusCode" in h) {
    const res = h as ResponseData;
    res.headers; // $ExpectType Headers
    res.statusCode; // $ExpectType number
    res.statusMessage; // $ExpectType string
    res.version; // $ExpectType HttpVersion
    res.version.major; // $ExpectType number
    res.version.minor; // $ExpectType number
} else {
    h["set-cookie"]; // $ExpectType string[] | undefined
    h.foo; // $ExpectType string | undefined
}
