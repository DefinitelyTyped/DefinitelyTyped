// Type definitions for stream-to-string 1.1
// Project: https://github.com/jasonpincin/stream-to-string
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = streamToString;

declare function streamToString(stream: NodeJS.ReadableStream, cb?: Callback): Promise<string>;
declare function streamToString(
    stream: NodeJS.ReadableStream,
    enc: string,
    cb?: Callback
): Promise<string>;

type Callback = (error: Error | undefined, str: string) => void;
