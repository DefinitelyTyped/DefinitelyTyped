// Type definitions for vinyl-buffer
// Project: https://github.com/hughsk/vinyl-buffer
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "vinyl-buffer" {
    namespace buffer {
        interface Buffer {
            (): NodeJS.ReadWriteStream;
        }
    }

    var buffer: buffer.Buffer;

    export = buffer;
}

