import ChivoxRecorder from 'chivox_h5sdk/src/html5/html5recorder';

// $ExpectType ChivoxRecorder
new ChivoxRecorder({
    appKey: '1234567890',
    signature: () => {
        return {
            timestamp: '1234567890',
            sig: '1234567890',
        }
    },
    server: 'wss://cloud.chivox.com',
    onInit: () => { },
    onError: () => { },
});

// @ts-expect-error
new ChivoxRecorder();
