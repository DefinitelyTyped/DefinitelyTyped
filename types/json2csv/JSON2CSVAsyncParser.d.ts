import { Transform, TransformOptions, Writable, Readable } from "stream";
import JSON2CSVBase = require("./JSON2CSVBase");
import JSON2CSVTransform = require("./JSON2CSVTransform");

declare class JSON2CSVAsyncParser<T> extends JSON2CSVBase<T> {
    input: Transform;
    processor: Writable;
    transform: JSON2CSVTransform<T>;

    constructor(opts?: json2csv.Options<T>, transformOpts?: TransformOptions);

    fromInput(input: Readable): JSON2CSVAsyncParser<T>;

    throughTransform(transform: Transform): JSON2CSVAsyncParser<T>;

    toOutput(output: Writable): JSON2CSVAsyncParser<T>;

    promise(returnCSV?: boolean): Promise<undefined | string>;
}

export = JSON2CSVAsyncParser;
