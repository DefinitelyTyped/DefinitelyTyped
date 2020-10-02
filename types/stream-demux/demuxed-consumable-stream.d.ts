import ConsumableStream = require('consumable-stream');

import StreamDemux = require('.');

declare class DemuxedConsumableStream<T> extends ConsumableStream<T> {
    name: string;

    constructor(streamDemux: StreamDemux<T>, name: string);

    createConsumer(timeout?: number): ConsumableStream.Consumer<T>;
}

export = DemuxedConsumableStream;
