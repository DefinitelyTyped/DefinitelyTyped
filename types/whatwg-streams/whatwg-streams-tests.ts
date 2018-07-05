/// <reference types="node" />

import {
    ReadableStream, ReadableStreamSource, WritableStream,
    ReadableStreamDefaultController, WritableStreamSink, WritableStreamDefaultController, ReadableByteStreamController,
    TransformStream, TransformStreamDefaultController, TransformStreamTransformer
} from "whatwg-streams";

// Examples taken from https://streams.spec.whatwg.org/#creating-examples

// 8.1. A readable stream with an underlying push source (no backpressure support)

function makeReadableWebSocketStream(url: string, protocols: string | string[]) {
    const ws = new WebSocket(url, protocols);
    ws.binaryType = "arraybuffer";

    return new ReadableStream({
        start(controller) {
            ws.onmessage = event => controller.enqueue(event.data);
            ws.onclose = () => controller.close();
            ws.onerror = () => controller.error(new Error("The WebSocket errored!"));
        },

        cancel() {
            ws.close();
        }
    });
}

{
    const writableStream = new WritableStream();

    const webSocketStream = makeReadableWebSocketStream("wss://example.com:443/", "protocol");

    webSocketStream.pipeTo(writableStream)
        .then(() => console.log("All data successfully written!"))
        .catch(e => console.error("Something went wrong!", e));
}


// 8.2. A readable stream with an underlying push source and backpressure support

function makeReadableBackpressureSocketStream(host: string, port: number) {
    const socket = createBackpressureSocket(host, port);

    return new ReadableStream({
        start(controller) {
            socket.ondata = (event: any) => {
                controller.enqueue(event.data);

                if (controller.desiredSize! <= 0) {
                    // The internal queue is full, so propagate
                    // the backpressure signal to the underlying source.
                    socket.readStop();
                }
            };

            socket.onend = () => controller.close();
            socket.onerror = () => controller.error(new Error("The socket errored!"));
        },

        pull() {
            // This is called if the internal queue has been emptied, but the
            // stream’s consumer still wants more data. In that case, restart
            // the flow of data if we have previously paused it.
            socket.readStart();
        },

        cancel() {
            socket.close();
        }
    });

    function createBackpressureSocket(host: string, port: number): any { };
}


// 8.3. A readable byte stream with an underlying push source (no backpressure support)

const DEFAULT_CHUNK_SIZE = 65536;

function makeUDPSocketStream(host: string, port: number) {
    const socket = createUDPSocket(host, port);

    return new ReadableStream({
        type: "bytes",

        start(controller: ReadableByteStreamController) {
            readRepeatedly().catch(e => controller.error(e));

            function readRepeatedly(): Promise<void> {
                return socket.select2().then(() => {
                    // Since the socket can become readable even when there’s
                    // no pending BYOB requests, we need to handle both cases.
                    let bytesRead: number;
                    if (controller.byobRequest) {
                        const v = controller.byobRequest.view;
                        bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
                        controller.byobRequest.respond(bytesRead);
                    } else {
                        const buffer = new ArrayBuffer(DEFAULT_CHUNK_SIZE);
                        bytesRead = socket.readInto(buffer, 0, DEFAULT_CHUNK_SIZE);
                        controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
                    }

                    if (bytesRead === 0) {
                        controller.close();
                        return;
                    }

                    return readRepeatedly();
                });
            }
        },

        cancel() {
            socket.close();
        }
    });

    function createUDPSocket(host: string, port: number): any { };
}


// 8.4. A readable stream with an underlying pull source

//const fs = require("pr/fs"); // https://github.com/jden/pr
interface fs {
    open(path: string | Buffer, flags: string | number): Promise<number>;
    read(fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<number>;
    write(fd: number, buffer: Buffer | string, offset: number, length: number): Promise<number>;
    close(fd: number): Promise<void>;
}
let fs: fs;

const CHUNK_SIZE = 1024;

function makeReadableFileStream(filename: string) {
    let fd: number;
    let position = 0;

    return new ReadableStream({
        start() {
            return fs.open(filename, "r").then(result => {
                fd = result;
            });
        },

        pull(controller) {
            const buffer = new ArrayBuffer(CHUNK_SIZE);

            return fs.read(fd, <any>buffer, 0, CHUNK_SIZE, position).then(bytesRead => {
                if (bytesRead === 0) {
                    return fs.close(fd).then(() => controller.close());
                } else {
                    position += bytesRead;
                    controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
                }
            });
        },

        cancel() {
            return fs.close(fd);
        }
    });
}


// 8.5. A readable byte stream with an underlying pull source

//const fs = require("pr/fs"); // https://github.com/jden/pr
//const DEFAULT_CHUNK_SIZE = 1024;

function makeReadableByteFileStream(filename: string) {
    let fd: number;
    let position = 0;

    return new ReadableStream({
        type: "bytes",

        start() {
            return fs.open(filename, "r").then(result => {
                fd = result;
            });
        },

        pull(controller: ReadableByteStreamController) {
            // Even when the consumer is using the default reader, the auto-allocation
            // feature allocates a buffer and passes it to us via byobRequest.
            const v = controller.byobRequest.view;

            return fs.read(fd, <any>v.buffer, v.byteOffset, v.byteLength, position).then(bytesRead => {
                if (bytesRead === 0) {
                    return fs.close(fd).then(() => controller.close());
                } else {
                    position += bytesRead;
                    controller.byobRequest.respond(bytesRead);
                }
            });
        },

        cancel() {
            return fs.close(fd);
        },

        autoAllocateChunkSize: DEFAULT_CHUNK_SIZE
    });
}


// 8.6. A writable stream with no backpressure or success signals

function makeWritableWebSocketStream(url: string, protocols: string | string[]) {
    const ws = new WebSocket(url, protocols);

    return new WritableStream({
        start(controller) {
            ws.onerror = () => controller.error(new Error("The WebSocket errored!"));
            return new Promise<void>(resolve => ws.onopen = () => resolve());
        },

        write(chunk) {
            ws.send(chunk);
            // Return immediately, since the web socket gives us no easy way to tell
            // when the write completes.
        },

        close() {
            return new Promise<void>((resolve, reject) => {
                ws.onclose = () => resolve();
                ws.close();
            });
        }
    });
}

{
    const readableStream = new ReadableStream();

    const webSocketStream = makeWritableWebSocketStream("wss://example.com:443/", "protocol");

    readableStream.pipeTo(webSocketStream)
        .then(() => console.log("All data successfully written!"))
        .catch(e => console.error("Something went wrong!", e));
}


// 8.7. A writable stream with backpressure and success signals

//const fs = require("pr/fs"); // https://github.com/jden/pr

function makeWritableFileStream(filename: string) {
    let fd: number;

    return new WritableStream<string>({
        start() {
            return fs.open(filename, "w").then(result => {
                fd = result;
            });
        },

        write(chunk) {
            return fs.write(fd, chunk, 0, chunk.length);
        },

        close() {
            return fs.close(fd);
        }
    });
}

{
    const fileStream = makeWritableFileStream("/example/path/on/fs.txt");
    const writer = fileStream.getWriter();

    writer.write("To stream, or not to stream\n");
    writer.write("That is the question\n");

    writer.close()
        .then(() => console.log("chunks written and stream closed successfully!"))
        .catch(e => console.error(e));
}


// 8.8. A { readable, writable } stream pair wrapping the same underlying resource


function streamifyWebSocket(url: string, protocol: string) {
    const ws = new WebSocket(url, protocol);
    ws.binaryType = "arraybuffer";

    return {
        readable: new ReadableStream(new WebSocketSource(ws)),
        writable: new WritableStream<string>(new WebSocketSink(ws))
    };
}

class WebSocketSource implements ReadableStreamSource {
    private readonly _ws: WebSocket;

    constructor(ws: WebSocket) {
        this._ws = ws;
    }

    start(controller: ReadableStreamDefaultController) {
        this._ws.onmessage = event => controller.enqueue(event.data);
        this._ws.onclose = () => controller.close();

        this._ws.addEventListener("error", () => {
            controller.error(new Error("The WebSocket errored!"));
        });
    }

    cancel() {
        this._ws.close();
    }
}

class WebSocketSink implements WritableStreamSink {
    private readonly _ws: WebSocket;

    constructor(ws: WebSocket) {
        this._ws = ws;
    }

    start(controller: WritableStreamDefaultController) {
        this._ws.addEventListener("error", () => {
            controller.error(new Error("The WebSocket errored!"));
        });

        return new Promise<void>(resolve => this._ws.onopen = () => resolve());
    }

    write(chunk: any) {
        this._ws.send(chunk);
    }

    close() {
        return new Promise<void>((resolve, reject) => {
            this._ws.onclose = () => resolve();
            this._ws.close();
        });
    }
}

{
    const streamyWS = streamifyWebSocket("wss://example.com:443/", "protocol");
    const writer = streamyWS.writable.getWriter();
    const reader = streamyWS.readable.getReader();

    writer.write("Hello");
    writer.write("web socket!");

    reader.read().then(({ value, done }) => {
        console.log("The web socket says: ", value);
    });
}


// 8.9. A transform stream that replaces template tags


type Dictionary<T> = { [key: string]: T }

declare function fetch(input?: Request | string): Promise<Response>;
declare interface FetchEvent {
    readonly request: Request;
    respondWith(promise: Promise<Response>): void;
}
declare class Request {
    readonly url: string;
}
declare class Response {
    constructor(body?: ReadableStream);
    readonly body: ReadableStream;
}
declare class TextDecoderStream extends TransformStream<string, ArrayBufferView> {
}
declare class TextEncoderStream extends TransformStream<Uint8Array, string> {
}

class LipFuzzTransformer implements TransformStreamTransformer<string, string> {
    substitutions: Dictionary<string>;
    partialChunk: string;
    lastIndex: number | undefined;

    constructor(substitutions: Dictionary<string>) {
        this.substitutions = substitutions;
        this.partialChunk = "";
        this.lastIndex = undefined;
    }

    transform(chunk: string, controller: TransformStreamDefaultController<string>) {
        chunk = this.partialChunk + chunk;
        this.partialChunk = "";
        // lastIndex is the index of the first character after the last substitution.
        this.lastIndex = 0;
        chunk = chunk.replace(/\{\{([a-zA-Z0-9_-]+)\}\}/g, this.replaceTag.bind(this));
        // Regular expression for an incomplete template at the end of a string.
        const partialAtEndRegexp = /\{(\{([a-zA-Z0-9_-]+(\})?)?)?$/g;
        // Avoid looking at any characters that have already been substituted.
        partialAtEndRegexp.lastIndex = this.lastIndex;
        this.lastIndex = undefined;
        const match = partialAtEndRegexp.exec(chunk);
        if (match) {
            this.partialChunk = chunk.substring(match.index);
            chunk = chunk.substring(0, match.index);
        }
        controller.enqueue(chunk);
    }

    flush(controller: TransformStreamDefaultController<string>) {
        if (this.partialChunk.length > 0) {
            controller.enqueue(this.partialChunk);
        }
    }

    replaceTag(match: string, p1: string, offset: number) {
        let replacement = this.substitutions[p1];
        if (replacement === undefined) {
            replacement = "";
        }
        this.lastIndex = offset + replacement.length;
        return replacement;
    }
}

{
    const userName = "";
    const displayName = "";
    const icon = "";
    const date = "";
    const fetchEvent = {} as FetchEvent;

    const data = { userName, displayName, icon, date };
    const ts = new TransformStream(new LipFuzzTransformer(data));

    fetchEvent.respondWith(
        fetch(fetchEvent.request.url).then(response => {
            const transformedBody = response.body
                // Decode the binary-encoded response to string
                .pipeThrough(new TextDecoderStream())
                // Apply the LipFuzzTransformer
                .pipeThrough(ts)
                // Encode the transformed string
                .pipeThrough(new TextEncoderStream());
            return new Response(transformedBody);
        })
    );
}


// 8.10. A transform stream created from a sync mapper function

function mapperTransformStream<R, W>(mapperFunction: (chunk: W) => R) {
    return new TransformStream<R, W>({
        transform(chunk, controller) {
            controller.enqueue(mapperFunction(chunk));
        }
    });
}

{
    const ts = mapperTransformStream((chunk: string) => chunk.toUpperCase());
    const writer = ts.writable.getWriter();
    const reader = ts.readable.getReader();

    writer.write("No need to shout");

    // Logs "NO NEED TO SHOUT":
    reader.read().then(({ value }) => console.log(value));

}

{
    const ts = mapperTransformStream((chunk: string) => JSON.parse(chunk));
    const writer = ts.writable.getWriter();
    const reader = ts.readable.getReader();

    writer.write("[1, ");

    // Logs a SyntaxError, twice:
    reader.read().catch(e => console.error(e));
    writer.write("{}").catch(e => console.error(e));
}
