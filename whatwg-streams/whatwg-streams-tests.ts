/// <reference path="whatwg-streams.d.ts" />

function makeReadableWebSocketStream(url: string, protocols: string[]) {
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

function makeReadableBackpressureSocketStream(host: string, port: number) {
    const socket = createBackpressureSocket(host, port);

    return new ReadableStream({
        start(controller) {
            socket.ondata = (event: any) => {
                controller.enqueue(event.data);

                if (controller.desiredSize <= 0) {
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

const DEFAULT_CHUNK_SIZE = 65536;

function makeUDPSocketStream(host: string, port: number) {
    const socket = createUDPSocket(host, port);

    return new ReadableStream({
        type: "bytes",

        start(controller) {
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

function makeWritableWebSocketStream(url: string, protocols: string[]) {
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

function streamifyWebSocket(url: string, protocol: string) {
    const ws = new WebSocket(url, protocol);
    ws.binaryType = "arraybuffer";

    return {
        readable: new ReadableStream(new WebSocketSource(ws)),
        writable: new WritableStream(new WebSocketSink(ws))
    };
}

class WebSocketSource implements ReadableStreamSource {
    private _ws: WebSocket

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
    private _ws: WebSocket

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

const streamyWS = streamifyWebSocket("wss://example.com:443/", "protocol");
const writer = streamyWS.writable.getWriter();
const reader = streamyWS.readable.getReader();

writer.write("Hello");
writer.write("web socket!");

reader.read().then(({ value, done }) => {
    console.log("The web socket says: ", value);
});