// Type definitions for @ffmpeg/libav-core 0.0
// Project: https://github.com/ffmpegwasm/libav.wasm
// Definitions by: Jerome Wu <https://github.com/jeromewu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Pointer = number;

interface LibavCore {
    NULL: Pointer;
}

declare function createLibavCore(): Promise<LibavCore>;

export = createLibavCore;
