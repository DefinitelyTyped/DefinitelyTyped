import ConsumableStream = require("consumable-stream");

import StreamDemux = require(".");

declare class DemuxedConsumableStream<T> extends ConsumableStream<T> {
    name: string;
    usabilityMode: boolean;

    constructor(streamDemux: StreamDemux<T>, name: string, usabilityMode?: unknown);

    createConsumer(timeout?: number): ConsumableStream.Consumer<T>;
}

export = DemuxedConsumableStream;
