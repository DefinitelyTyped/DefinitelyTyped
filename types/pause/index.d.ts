/// <reference types="node" />
import * as stream from "stream";

export = pause;

declare function pause(stream: stream.Stream): pause.Handle;

declare namespace pause {
    interface Handle {
        end(): void;
        resume(): void;
    }
}
