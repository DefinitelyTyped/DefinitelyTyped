import CertStreamClient from "certstream";

// $ExpectType typeof CertStreamClient
CertStreamClient;

new CertStreamClient(
    (message, context) => {
        // $ExpectType any
        message;
        // $ExpectType any
        context;
    },
);

new CertStreamClient(
    (message, context) => {
        // $ExpectType any
        message;
        // $ExpectType any
        context;
    },
    true,
);

declare let client: CertStreamClient;

// $ExpectType Callback
client.callback;
// $ExpectType any
client.context;
// $ExpectType boolean
client.skipHeartbeats;
// $ExpectType void
client.connect();
