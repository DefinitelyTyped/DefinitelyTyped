import { KeyObject } from "node:crypto";
import { connect, listen, QuicEndpoint } from "node:quic";

void async function() {
    const enc = new TextEncoder();
    const alpn = "foo";
    const client = await connect("123.123.123.123:8888", { alpn });
    await client.createUnidirectionalStream({
        body: enc.encode("hello world"),
    });
};

void async function() {
    const endpoint = new QuicEndpoint({
        address: "127.0.0.1:1234",
    });

    const client = await connect("123.123.123.123:8888", { endpoint });
};

void async function() {
    const endpoint = await listen((session) => {
        // ... handle the session
    });

    // Closing the endpoint allows any sessions open when close is called
    // to complete naturally while preventing new sessions from being
    // initiated. Once all existing sessions have finished, the endpoint
    // will be destroyed. The call returns a promise that is resolved once
    // the endpoint is destroyed.
    await endpoint.close();
};

void async function() {
    const session = await connect("localhost");
    const stream = await session.createUnidirectionalStream();
    for await (const chunks of stream) {
        for (const chunk of chunks) {
            chunk; // $ExpectType Uint8Array || NonSharedUint8Array
        }
    }
};

void async function() {
    const { listen } = await import("node:quic");

    await listen((session) => {/* ... */}, {
        application: {
            maxHeaderPairs: 64,
            qpackMaxDTableCapacity: 8192,
            enableDatagrams: true,
        },
        // ... other session options
    });
};

void async function(
    defaultKey: KeyObject,
    defaultCert: Buffer,
    apiKey: KeyObject,
    apiCert: Buffer,
    wwwKey: KeyObject,
    wwwCert: Buffer,
    intKey: KeyObject,
    intCert: Buffer,
) {
    const endpoint = await listen((session) => {/* ... */}, {
        sni: {
            "*": { keys: [defaultKey], certs: [defaultCert] },
            "api.example.com": { keys: [apiKey], certs: [apiCert], port: 8443 },
            "www.example.com": { keys: [wwwKey], certs: [wwwCert] },
            "internal.example.com": { keys: [intKey], certs: [intCert], authoritative: false },
        },
    });
};

void async function() {
    const session = await connect("example.com:443", {
        // ALPN defaults to 'h3'.
        servername: "example.com",
    });
    await session.opened;

    const stream = await session.createBidirectionalStream({
        headers: {
            ":method": "GET",
            ":path": "/",
            ":scheme": "https",
            ":authority": "example.com",
        },
        onheaders(headers) {
            console.log("status:", headers[":status"]);
        },
    });

    const decoder = new TextDecoder();
    for await (const chunks of stream) {
        for (const chunk of chunks) {
            process.stdout.write(decoder.decode(chunk, { stream: true }));
        }
    }

    await session.close();
};

void async function(defaultKey: KeyObject, defaultCert: Buffer) {
    const encoder = new TextEncoder();

    const endpoint = await listen((session) => {
        // The session.onstream callback fires for each new client-initiated stream.
    }, {
        sni: { "*": { keys: [defaultKey], certs: [defaultCert] } },
        // ALPN defaults to 'h3'.
        onheaders(headers) {
            // `this` is the QuicStream. Pseudo-headers are available on the
            // request header block (`:method`, `:path`, `:scheme`,
            // `:authority`).
            if (headers[":path"] === "/health") {
                this.sendHeaders({ ":status": "200", "content-type": "text/plain" });
                const w = this.writer;
                w.writeSync(encoder.encode("ok\n"));
                w.endSync();
            } else {
                this.sendHeaders({ ":status": "404" }, { terminal: true });
            }
        },
    });

    console.log("listening on", endpoint.address);
};
