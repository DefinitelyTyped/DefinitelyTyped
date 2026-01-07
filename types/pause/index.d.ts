/// <reference types="node" />
import stream = require("stream");

export = pause;

declare function pause(stream: stream.Stream): pause.Handle;

declare namespace pause {
    interface Handle {
        end(): void;
        resume(): void;
    }
}
