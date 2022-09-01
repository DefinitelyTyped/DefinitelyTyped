// Type definitions for @ffmpeg/libav-core 0.1
// Project: https://github.com/ffmpegwasm/libav.wasm
// Definitions by: Jerome Wu <https://github.com/jeromewu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Pointer = number;

export interface LibavCore {
    NULL: Pointer;
}

declare function LibavCoreFactory(): Promise<LibavCore>;
export default LibavCoreFactory;
