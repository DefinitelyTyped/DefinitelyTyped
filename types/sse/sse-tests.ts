import SSE = require("sse");
import * as express from "express";
import { createServer } from "http";

const expressApp = express();

new SSE(expressApp); // $ExpectType SSE
new SSE(expressApp, { path: "/sse", verifyRequest: null }); // $ExpectType SSE
const options: SSE.Options = {
    path: "/sse",
    verifyRequest: (req) => {
        return false;
    },
};
new SSE(expressApp, options); // $ExpectType SSE

const sse = new SSE(expressApp); // $ExpectType SSE
sse.handleRequest(expressApp.request, expressApp.response, "query"); // $ExpectType void
sse.matchesPath("/sse", "/sse"); // $ExpectType boolean
sse.server; // $ExpectType EventEmitter

SSE.Client; // $ExpectType typeof Client
const sseClient = new SSE.Client(expressApp.request, expressApp.response); // $ExpectType Client
sseClient.initialize(); // $ExpectType void
sseClient.send(); // $ExpectType void
sseClient.send("event"); // $ExpectType void
sseClient.send("event", "data"); // $ExpectType void
sseClient.send("event", "data", "id"); // $ExpectType void
sseClient.send({ event: "event" }); // $ExpectType void
sseClient.send({ event: "event", data: "data" }); // $ExpectType void
sseClient.send({ event: "event", data: "data", id: "id" }); // $ExpectType void
sseClient.close(); // $ExpectType void

const clientOptions: SSE.Client.SendObject = {
    event: "event",
    data: "data",
    id: "id",
    retry: 1000,
};
sseClient.send(clientOptions); // $ExpectType void
sseClient.req; // $ExpectType IncomingMessage
sseClient.res; // $ExpectType ServerResponse<IncomingMessage>

const server = createServer();
new SSE(server); // $ExpectType SSE
