import Html5Recorder from "chivox_h5sdk/src/html5/html5recorder";

// $ExpectType Html5Recorder
new Html5Recorder({
    appKey: "1234567890",
    signature: () => {
        return {
            timestamp: "1234567890",
            sig: "1234567890",
        };
    },
    server: "wss://cloud.chivox.com",
    onInit: () => {},
    onError: () => {},
});

// @ts-expect-error
new Html5Recorder();
