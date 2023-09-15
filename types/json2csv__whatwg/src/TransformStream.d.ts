import { AsyncOptions, StreamOptions } from "@json2csv/plainjs";

export default class JSON2CSVWHATWGTransformStream<I = any, O = any> extends TransformStream {
    constructor(
        opts?: StreamOptions,
        asyncOpts?: AsyncOptions,
        writableStrategy?: QueuingStrategy<I>,
        readableStrategy?: QueuingStrategy<O>,
    );
}
