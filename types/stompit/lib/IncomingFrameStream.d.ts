import { Transform, Readable, TransformOptions } from "stream";

declare class IncomingFrameStream extends Transform {
    constructor(opts?: TransformOptions);

    setVersion(versionId: string): boolean;
}

export = IncomingFrameStream;

declare namespace IncomingFrameStream {
    // Internal class, which is not exported
    interface IncomingFrame extends Readable {
        readEmptyBody(callback?: (isEmpty: boolean) => void): void;
        readString(encoding: string, callback?: (err: Error | null, buffer?: string) => void): void;
    }
}
