import * as stream from "readable-stream";
import StreamObject from "./StreamObject";

export { Context } from './StreamObject';

export default class Pipeline extends StreamObject {
    readable: boolean;
    readableObjectMode: boolean;
    writable: boolean;
    writableObjectMode: boolean;
    onInit: () => void;
    init: () => void;
    stream: stream.Readable | stream.Writable;

    get firstChild(): StreamObject;
    get lastChild(): StreamObject;

    destroy(err: Error): void;
    finish(): stream['push'];
}

export {};
