/// <reference types="node" />

import { Transform } from "stream";

declare namespace LineWrapper {
    type Callback = (err: Error | null, wrappedLine: string) => void;

    type Wrapper = (line: string, cb: Callback) => void;

    interface Options {
        prefix?: string | undefined;
        suffix?: string | undefined;
        wrapper?: Wrapper | undefined;
    }
}

declare class LineWrapper extends Transform {
    prefix: string;
    suffix: string;
    wrapper: string | undefined;
    buffer: string;

    constructor(options: LineWrapper.Options);
}

export = LineWrapper;
