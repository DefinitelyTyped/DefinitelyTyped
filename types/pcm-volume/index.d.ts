// Type definitions for pcm-volume 1.0
// Project: https://github.com/reneraab/pcm-volume
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from "stream";

declare class Volume extends Transform {
    setVolume(volume: number): void;
}

export = Volume;
