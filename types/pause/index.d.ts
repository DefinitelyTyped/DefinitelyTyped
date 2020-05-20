// Type definitions for pause 0.1
// Project: https://github.com/stream-utils/pause
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as stream from 'stream';

export = pause;

declare function pause(stream: stream.Stream): pause.Handle;

declare namespace pause {
    interface Handle {
        end(): void;
        resume(): void;
    }
}
