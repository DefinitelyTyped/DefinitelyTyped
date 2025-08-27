/// <reference types="node" />

import { Writable } from "stream";

declare class ByteCounter extends Writable {
    readonly bytes: number;

    on(event: "progress", listener: () => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}

export = ByteCounter;
