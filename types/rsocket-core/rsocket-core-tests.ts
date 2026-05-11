import {
    decodeAuthMetadata,
    decodeCompositeMetadata,
    decodeRoutes,
    decodeSimpleAuthPayload,
    encodeCompositeMetadata,
    encodeRoute,
    encodeSimpleAuthMetadata,
    MESSAGE_RSOCKET_AUTHENTICATION,
    MESSAGE_RSOCKET_COMPOSITE_METADATA,
    MESSAGE_RSOCKET_ROUTING,
    RSocketClient,
    SIMPLE,
    TEXT_PLAIN,
} from "rsocket-core";

new RSocketClient<Buffer, Buffer>({
    // note: default `serializers` is pass-through
    setup: {
        // ms btw sending keepalive to server
        keepAlive: 60000,
        // ms timeout if no keepalive response
        lifetime: 180000,
        // format of `data`
        dataMimeType: "application/octet-stream",
        // format of `metadata`
        metadataMimeType: MESSAGE_RSOCKET_COMPOSITE_METADATA.string,
        // payload
        payload: {
            metadata: encodeCompositeMetadata([
                [TEXT_PLAIN, Buffer.from("Hello World")],
                [MESSAGE_RSOCKET_ROUTING, encodeRoute("my.route")],
                [MESSAGE_RSOCKET_AUTHENTICATION, encodeSimpleAuthMetadata("user", "pass")],
            ]),
        },
    },
    // Transports default to sending/receiving strings:
    // Use BufferEncoders to enable binary
    transport: (undefined as any),
});

const compositeMetadata = decodeCompositeMetadata(encodeCompositeMetadata([
    [TEXT_PLAIN, Buffer.from("Hello World")],
    [MESSAGE_RSOCKET_ROUTING, encodeRoute("my.route")],
    [MESSAGE_RSOCKET_AUTHENTICATION, encodeSimpleAuthMetadata("user", "pass")],
]));

let compositeMetadataIterationResult = compositeMetadata.next();
while (!compositeMetadataIterationResult.done) {
    const entry = compositeMetadataIterationResult.value;

    switch (entry.mimeType) {
        case MESSAGE_RSOCKET_ROUTING.string: {
            const routingMetadata = decodeRoutes(entry.content);

            let routingMetadataIterationResult = routingMetadata.next();
            while (!routingMetadataIterationResult.done) {
                const route = routingMetadataIterationResult.value;

                console.log(" <- ", route);

                routingMetadataIterationResult = routingMetadata.next();
            }
        }
        case MESSAGE_RSOCKET_AUTHENTICATION.string: {
            const authMetadata = decodeAuthMetadata(entry.content);

            switch (authMetadata.type.string) {
                case SIMPLE.string: {
                    console.log(" <- ", decodeSimpleAuthPayload(authMetadata.payload));
                }
            }
        }
    }

    compositeMetadataIterationResult = compositeMetadata.next();
}
