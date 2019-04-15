import { Transform, TransformOptions, Writable, Readable } from "stream";

import JSON2CSVBase, { json2csv } from "./JSON2CSVBase";
import JSON2CSVTransform from "./JSON2CSVTransform";

declare class JSON2CSVAsyncParser<T> extends JSON2CSVBase<T> {
    public input: Transform;
    public processor: Writable;
    public transform: JSON2CSVTransform<T>;

    constructor(opts?: json2csv.Options<T>, transformOpts?: TransformOptions);

    public fromInput(input: Readable): JSON2CSVAsyncParser<T>;

    public throughTransform(transform: Transform): JSON2CSVAsyncParser<T>;

    public toOutput(output: Writable): JSON2CSVAsyncParser<T>;

    public promise(): Promise<string>;
}

export default JSON2CSVAsyncParser;
