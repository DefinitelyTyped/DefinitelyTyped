// Type definitions for node-timecodes 2.5
// Project: https://github.com/Synchronized-TV/node-timecodes
// Definitions by: Mitsuka Hanakura a.k.a. ragg <https://github.com/ra-gg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TimecodeOptions {
    frameRate?: number;
    ms?: boolean;
}

export function toSeconds(timecode: string, frameRate?: number): number;
export function fromSeconds(seconds: number, option?: TimecodeOptions): string;
export const constants: { framerate: number };

declare const _: {
    toSeconds: typeof toSeconds;
    fromSeconds: typeof fromSeconds;
    constants: typeof constants;
};

export default _;
