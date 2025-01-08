import { destroy, FetchRequest, get, patch, post, put, RequestInterceptor } from "@rails/request.js";

interface TestJsonResponse {
    key1: string;
    key2: number;
}

const request = new FetchRequest("post", "https://example.com", {
    body: { name: "Request.JS" },
    contentType: "application/json",
    headers: { "X-Test": "Test" },
    credentials: "include",
    query: { "test": "test" },
    responseKind: "json",
});

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

    response = await get("https://example.com");
    testJsonResponseVar = await response.json as TestJsonResponse;

    response = await post("https://example.com", {
        body: new FormData(),
    });

    response = await put("https://example.com", {
        query: new URLSearchParams(),
    });

    response = await patch("https://example.com");

    response = await destroy("https://example.com");

    RequestInterceptor.register(async (request) => {
        request.addHeader("Authorization", "Bearer 12345");
    });

    RequestInterceptor.reset();
}
