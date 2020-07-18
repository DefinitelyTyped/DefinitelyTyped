import AGChannel = require('ag-channel');
import AGSimpleBroker = require('ag-simple-broker');
import StreamDemux = require('stream-demux');

const broker = new AGSimpleBroker();
const exchange = broker.exchange();

const channel = new AGChannel<number>('dummy', exchange, new StreamDemux(), new StreamDemux());

(async () => {
    await channel.listener('subscribe').once();
    console.log('subscribed');
})();

// $ExpectType ChannelState
channel.state;

(async () => {
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const message of channel) {
        // $ExpectType number
        message;
    }
})();

(async () => {
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const event of channel.listener('subscribe')) {
        // $ExpectType number
        event;
    }

    await channel.transmitPublish(`hello`);
})();

// $ExpectType number
channel.getBackpressure();

channel.close();
