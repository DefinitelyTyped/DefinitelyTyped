/// <reference types="node" />

import { Transform } from "stream";

declare namespace m {
    interface StreamMeterConstruct {
        (
            /**
             * Size (in bytes) to trigger the stream to abort.
             * It will complete whatever frame it aborted in, so the size streamed
             * will still be >= size but no more than size + highWaterMark
             * @default Number.MAX_VALUE
             */
            maxBytes?: number,
        ): StreamMeter;

        new(
            /**
             * Size (in bytes) to trigger the stream to abort.
             * It will complete whatever frame it aborted in, so the size streamed
             * will still be >= size but no more than size + highWaterMark
             * @default Number.MAX_VALUE
             */
            maxBytes?: number,
        ): StreamMeter;
    }

    interface StreamMeter extends Transform {
        /**
         * Number of bytes handled and passed through the meter.
         */
        bytes: number;

        /**
         * Size (in bytes) to trigger the stream to abort.
         * It will complete whatever frame it aborted in, so the size streamed
         * will still be >= size but no more than size + highWaterMark
         * @default Number.MAX_VALUE
         */
        maxBytes: number;
    }
}

declare const m: m.StreamMeterConstruct;

export = m;
