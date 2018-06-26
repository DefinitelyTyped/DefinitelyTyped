import * as Chain from 'stream-chain';
import * as StreamBase from './StreamBase';

export = StreamValues;

declare class StreamValues extends StreamBase {
    constructor(options?: StreamBase.StreamOptions);
}

declare namespace StreamValues {
    function make(options?: StreamBase.StreamOptions): StreamValues;

    namespace make {
        type Constructor = StreamValues;
        const Constructor: typeof StreamValues;
    }

    function streamValues(options?: StreamBase.StreamOptions): StreamValues;

    namespace streamValues {
        type Constructor = StreamValues;
        const Constructor: typeof StreamValues;
    }

    function withParser(options?: StreamBase.StreamOptions): Chain;
}
