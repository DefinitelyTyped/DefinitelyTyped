// Type definitions for vinyl-buffer 1.0
// Project: https://github.com/hughsk/vinyl-buffer
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace buffer {
    type Buffer = () => NodeJS.ReadWriteStream;
}

declare var buffer: buffer.Buffer;

export = buffer;
