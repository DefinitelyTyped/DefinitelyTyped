import { StreamOptions } from "@json2csv/plainjs";
import { Stream, TransformOptions } from "node:stream";
import JSON2CSVNodeTransform from "./Transform";

export { StreamOptions, TransformOptions };

export default class JSON2CSVNodeAsyncParser {
    constructor(opts?: StreamOptions, transformOpts?: TransformOptions);
    parse(data: string | Stream | object): JSON2CSVNodeTransform;

    opts?: StreamOptions | undefined;
    transformOpts?: TransformOptions | undefined;
}
