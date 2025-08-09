import { destroy, FetchRequest, get, patch, post, put, RequestInterceptor } from "@rails/request.js";

interface TestJsonResponse {
    key1: string;
    key2: number;
}

const { signal } = new AbortController();

const request = new FetchRequest("post", "https://example.com", {
    body: { name: "Request.JS" },
    contentType: "application/json",
    headers: { "X-Test": "Test" },
    credentials: "include",
    query: { "test": "test" },
    responseKind: "json",
    signal,
});

// $ExpectType HeadersInit
request.headers;
// $ExpectType string | undefined
request.csrfToken;
// $ExpectType string | undefined
request.contentType;
// $ExpectType string
request.accept;
// $ExpectType BodyInit | Record<string, unknown> | null | undefined
request.body;
// $ExpectType string
request.query;
// $ExpectType AbortSignal | null | undefined
request.signal;

// $ExpectType string
request.fetchOptions.method;

// $ExpectType (HeadersInit | undefined) & HeadersInit
request.fetchOptions.headers;

let testJsonResponseVar: TestJsonResponse;
let headersVar: Headers;
let stringVar: string;
let booleanVar: boolean;
let numberVar: number;

async function main() {
    let response = await request.perform();
    if (response.ok) {
        testJsonResponseVar = await response.json;
    }

    response = await get("https://example.com");
    testJsonResponseVar = await response.json;
    headersVar = response.headers;
    stringVar = response.contentType;
    stringVar = await response.html;
    booleanVar = response.ok;
    booleanVar = response.redirected;
    numberVar = response.statusCode;
    stringVar = await response.text;

    response = await get("https://example.com", { responseKind: "json" });
    testJsonResponseVar = await response.json as TestJsonResponse;

    response = await get("https://example.com/ex/turbo-stream", { responseKind: "turbo-stream" });
    await response.renderTurboStream();

    response = await get("https://example.com/ex/script", { responseKind: "script" });
    await response.activeScript();

    response = await post("https://example.com", {
        body: new FormData(),
    });

    response = await post("https://example.com", {
        body: new FormData(),
        keepalive: true,
    });

    const emptyFile = new File([], "empty.txt", {
        type: "text/plain",
        lastModified: Date.now(),
    });

    response = await post("https://example.com", {
        body: emptyFile,
        keepalive: true,
    });

    response = await put("https://example.com", {
        query: new URLSearchParams(),
    });

    const myURL = new URL("https://example.com");

    response = await patch(myURL);

    response = await patch("https://example.com/this-will-redirect", {
        redirect: "follow",
    });

    response = await destroy("https://example.com", { body: null });

    RequestInterceptor.register(async (request) => {
        request.addHeader("Authorization", "Bearer 12345");
    });

    RequestInterceptor.reset();
}
