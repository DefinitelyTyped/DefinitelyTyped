// Type definitions for map-stream 0.0
// Project: http://github.com/dominictarr/map-stream
// Definitions by: Konrad Perlicki <https://github.com/KonradPerlicki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = mapStream;

declare namespace mapStream {
    interface Options {
        /**
         * Continue mapping even if error occured.
         *
         * On error `map-stream` will emit `failure` event.
         *
         * Default: `false`
         */
        failures?: boolean;
    }

    type Callback = (err: null | Error, data: unknown) => void;
}

declare function mapStream(
    mapper: (data: unknown, callback: mapStream.Callback) => unknown,
    opts?: mapStream.Options,
): unknown;
