/// <reference types="node" />
import { AsyncOptions, StreamOptions } from '@json2csv/plainjs';
import JSON2CSVWHATWGTransformStream from './TransformStream';
import { Stream } from 'node:stream';

export { AsyncOptions, StreamOptions };

export default class JSON2CSVNodeAsyncParser<I = any, O = any> {
    constructor(
        opts?: StreamOptions,
        asyncOpts?: AsyncOptions,
        writableStrategy?: QueuingStrategy<I>,
        readableStrategy?: QueuingStrategy<O>,
    );

    opts?: StreamOptions | undefined;
    // asyncOpts isn't optional since it's set to `{}` when nothing is passed
    asyncOpts: AsyncOptions;
    writableStrategy?: QueuingStrategy<I> | undefined;
    readableStrategy?: QueuingStrategy<O> | undefined;

    parse(data: string | Stream | object): ReadableStream<JSON2CSVWHATWGTransformStream>;
}
