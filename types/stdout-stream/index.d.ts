// Type definitions for stdout-stream 1.4
// Project: https://github.com/mafintosh/stdout-stream#readme
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Writable } from "stream";

interface StdoutStream extends Writable {
    readonly _isStdio: true;
    readonly isTTY: boolean;
}

declare var stdout: StdoutStream;

export = stdout;
