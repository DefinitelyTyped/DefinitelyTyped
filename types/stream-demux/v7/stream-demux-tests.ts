import StreamDemux = require('stream-demux');

const demux = new StreamDemux<string>();

(async () => {
    // Consume data from 'abc' stream.
    const substream = demux.stream('abc');

    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const packet of substream) {
        console.log('ABC:', packet);
    }
})();

(async () => {
    // Consume data from 'def' stream.
    const substream = demux.stream('def');

    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const packet of substream) {
        // $ExpectType string
        packet;
        console.log('DEF:', packet);
    }
})();

(async () => {
    // Consume data from 'def' stream.
    // Can also work with a while loop for older environments.
    // Can have multiple loops consuming the same stream at
    // the same time.
    // Note that you can optionally pass a number n to the
    // createConsumer(n) method to force the iteration to
    // timeout after n milliseconds of innactivity.
    const consumer = demux.stream('def').createConsumer();
    while (true) {
        const packet = await consumer.next();
        if (packet.done) break;

        // $ExpectType string
        packet.value;
        console.log('DEF (while loop):', packet.value);
    }
})();

(async () => {
    for (let i = 0; i < 10; i++) {
        await wait(10);
        demux.write('abc', 'message-abc-' + i);
        demux.write('def', 'message-def-' + i);
    }
    demux.close('abc');
    demux.close('def');
})();

// Utility function for using setTimeout() with async/await.
function wait(duration: number) {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

// Log the next received packet from the abc stream.
(async () => {
    // The returned promise never times out.
    // $ExpectType string
    const packet = await demux.stream('abc').once();
    console.log('Packet:', packet);
})();

// Same as above, except with a timeout of 10 seconds.
(async () => {
    try {
        // $ExpectType string
        const packet = await demux.stream('abc').once(10000);
        console.log('Packet:', packet);
    } catch (err) {
        // If no packets are written to the 'abc' stream before
        // the timeout, an error will be thrown and handled here.
        // The err.name property will be 'TimeoutError'.
        console.log('Error:', err);
    }
})();
