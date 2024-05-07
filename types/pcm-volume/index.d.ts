/// <reference types="node" />

import { Transform } from "stream";

declare class Volume extends Transform {
    setVolume(volume: number): void;
}

export = Volume;
