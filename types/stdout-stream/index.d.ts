/// <reference types="node" />
import { Writable } from "stream";

interface StdoutStream extends Writable {
    readonly _isStdio: true;
    readonly isTTY: boolean;
}

declare var stdout: StdoutStream;

export = stdout;
