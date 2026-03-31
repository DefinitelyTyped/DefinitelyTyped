import {
    BeforeRequestSent,
    BytesValue,
    Cookie,
    FetchError,
    Header,
    ResponseStarted,
    SameSite,
} from "selenium-webdriver/bidi/networkTypes";

// $ExpectType "strict"
SameSite.STRICT;
// $ExpectType "lax"
SameSite.LAX;
// $ExpectType "none"
SameSite.NONE;
// $ExpectType "default"
SameSite.DEFAULT;

// $ExpectType string | null
SameSite.findByName("strict");

// $ExpectType string | null
SameSite.findByName("invalid");

// $ExpectType BytesValue
const bytesValue = new BytesValue("string", "test");
// $ExpectType string
bytesValue.type;
// $ExpectType string
bytesValue.value;
// $ExpectType Map<string, string>
bytesValue.asMap();

// $ExpectType "string"
BytesValue.Type.STRING;
// $ExpectType "base64"
BytesValue.Type.BASE64;

// $ExpectType Header
const header = new Header("content-type", bytesValue);
// $ExpectType string
header.name;
// $ExpectType BytesValue
header.value;

// @ts-expect-error
new Header("content-type", "invalid");

// $ExpectType Cookie
const cookie = new Cookie("name", bytesValue, "domain", "/", 100, true, true, "strict");
// $ExpectType string
cookie.name;
// $ExpectType BytesValue
cookie.value;
// $ExpectType string
cookie.domain;
// $ExpectType string
cookie.path;
// $ExpectType number | undefined
cookie.expires;
// $ExpectType number
cookie.size;
// $ExpectType boolean
cookie.httpOnly;
// $ExpectType boolean
cookie.secure;
// $ExpectType string
cookie.sameSite;

// $ExpectType BeforeRequestSent
const beforeRequestSent = new BeforeRequestSent(
    "id1",
    {
        context: "ctx1",
        navigation: "nav1",
        timestamp: 123456789,
        url: "https://example.com",
    },
    0,
    {
        request: "req1",
        url: "https://example.com",
        method: "GET",
        headers: [{ name: "content-type", value: new BytesValue("string", "text/html") }],
        cookies: [],
        headersSize: 100,
        bodySize: 200,
        timings: {
            originTime: 100,
            requestTime: 200,
            redirectStart: 300,
            redirectEnd: 400,
            fetchStart: 500,
            dnsStart: 600,
            dnsEnd: 700,
            connectStart: 800,
            connectEnd: 900,
            tlsStart: 1000,
            requestStart: 1100,
            responseStart: 1200,
            responseEnd: 1300,
        },
    },
    123456789,
    {
        type: "script",
        columnNumber: 1,
        lineNumber: 1,
        stackTrace: "stack trace",
        request: "req1",
    },
);

// $ExpectType string
beforeRequestSent.id;
// $ExpectType string
beforeRequestSent.request.url;

// $ExpectType ResponseStarted
const responseStarted = new ResponseStarted(
    "id1",
    {
        context: "ctx1",
        navigation: "nav1",
        timestamp: 123456789,
        url: "https://example.com",
    },
    0,
    beforeRequestSent.request,
    123456789,
    {
        url: "https://example.com",
        protocol: "https",
        status: 200,
        statusText: "OK",
        fromCache: false,
        headers: { "content-type": "text/html" },
        mimeType: "text/html",
        bytesReceived: 1000,
        headerSize: 100,
        bodySize: 900,
        content: "content",
    },
);

// $ExpectType string
responseStarted.response.url;
// $ExpectType number
responseStarted.response.status;

// $ExpectType FetchError
const fetchError = new FetchError(
    "id1",
    {
        context: "ctx1",
        navigation: "nav1",
        timestamp: 123456789,
        url: "https://example.com",
    },
    0,
    beforeRequestSent.request,
    123456789,
    "Network error",
);

// $ExpectType string
fetchError.errorText;

// @ts-expect-error
new FetchError();
