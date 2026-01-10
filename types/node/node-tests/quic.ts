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
