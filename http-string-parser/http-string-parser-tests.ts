/// <reference path="http-string-parser.d.ts" />

import parser = require("http-string-parser");

function test_request(): void {
    var result = parser.parseRequest("HTTP/1.1 GET /\r\nHost: www.example.com\r\n\r\n");

    var body: string = result.body;
    var headers: { [key: string]: string } = result.headers;
    var method: string = result.method;
    var uri: string = result.uri;
}

function test_response(): void {
    var response = parser.parseResponse("HTTP/1.1 200 OK\r\n\r\n");

    var body: string = response.body;
    var headers: { [key: string]: string } = response.headers;
    var statusCode: string = response.statusCode;
    var statusMessage: string = response.statusMessage;
}

function test_requestLine(): void {
    var result = parser.parseRequestLine("HTTP/1.1 GET /");

    var method: string = result.method;
    var protocol: string = result.protocol;
    var uri: string = result.uri;
}

function test_statusLine(): void {
    var result = parser.parseStatusLine("HTTP/1.1 200 OK");

    var protocol: string = result.protocol;
    var statusCode: string = result.statusCode;
    var statusMessage: string = result.statusMessage;
}

function test_headers(): void {
    var result: { [key: string]: string } =
        parser.parseHeaders(["Content-Type: text/html; charset=utf-8", "Content-Length: 256"]);
}