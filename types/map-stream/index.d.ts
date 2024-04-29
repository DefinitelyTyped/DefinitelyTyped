/// <reference types="node"/>

import { Stream } from "stream";

export = mapStream;

declare namespace mapStream {
    interface Options {
        /**
         * Continue mapping even if error occured.
         *
         * On error `map-stream` will emit `failure` event.
         *
         * @default false
         */
        failures?: boolean;
    }

    interface mapStream extends Stream {
        resume(): void;
        pause(): void;
        destroy(): void;
        end(): void;
        write(): boolean | never;
    }

    type Callback = (err: null | Error, data: unknown) => void;
}

declare function mapStream(
    mapper: (data: unknown, callback: mapStream.Callback) => void,
    opts?: mapStream.Options,
): mapStream.mapStream;
