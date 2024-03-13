/// <reference types="node" />

import { EventEmitter } from "events";

export interface HandbrakeOptions {
    // General
    "help"?: boolean | undefined;
    "h"?: boolean | undefined; // Alias for 'help'
    "version"?: boolean | undefined;
    "verbose"?: boolean | undefined;
    "v"?: boolean | undefined; // Alias for 'verbose'
    "preset"?: string | undefined;
    "Z"?: string | undefined; // Alias for 'preset'
    "preset-list"?: boolean | undefined;
    "z"?: boolean | undefined; // Alias for 'preset-list'
    "preset-import-file"?: string | undefined;
    "no-dvdnav"?: boolean | undefined;
    "no-opencl"?: boolean | undefined;

    // Source
    "input"?: string | undefined;
    "i"?: string | undefined; // Alias for 'input'
    "title"?: number | undefined;
    "t"?: number | undefined; // Alias for 'title'
    "min-duration"?: number | undefined;
    "scan"?: boolean | undefined;
    "main-feature"?: boolean | undefined;
    "chapters"?: string | undefined;
    "c"?: string | undefined; // Alias for 'chapters'
    "angle"?: number | undefined;
    "previews"?: string | undefined;
    "start-at-preview"?: string | undefined;
    "start-at"?: string | undefined;
    "stop-at"?: string | undefined;

    // Destination
    "output"?: string | undefined;
    "o"?: string | undefined; // Alias for 'output'
    "format"?: string | undefined;
    "f"?: string | undefined; // Alias for 'format'
    "markers"?: boolean | undefined;
    "m"?: boolean | undefined; // Alias for 'markers'
    "no-markers"?: boolean | undefined;
    "optimize"?: boolean | undefined;
    "O"?: boolean | undefined; // Alias for 'optimize'
    "ipod-atom"?: boolean | undefined;
    "I"?: boolean | undefined; // Alias for 'ipod-atom'
    "no-ipod-atom"?: boolean | undefined;
    "use-opencl"?: boolean | undefined;
    "P"?: boolean | undefined; // Alias for 'use-opencl'

    // Video
    "encoder"?: string | undefined;
    "e"?: string | undefined; // Alias for 'encoder'
    "encoder-preset"?: string | undefined;
    "encoder-preset-list"?: string | undefined;
    "encoder-tune"?: string | undefined;
    "encoder-tune-list"?: string | undefined;
    "encopts"?: string | undefined;
    "x"?: string | undefined; // Alias for 'encopts'
    "encoder-profile"?: string | undefined;
    "encoder-profile-list"?: string | undefined;
    "encoder-level"?: string | undefined;
    "encoder-level-list"?: string | undefined;
    "quality"?: number | undefined;
    "q"?: number | undefined; // Alias for 'quality'
    "vb"?: number | undefined;
    "b"?: number | undefined; // Alias for 'vb'
    "two-pass"?: boolean | undefined;
    "no-two-pass"?: boolean | undefined;
    "turbo"?: boolean | undefined;
    "T"?: boolean | undefined; // Alias for 'turbo'
    "no-turbo"?: boolean | undefined;
    "rate"?: number | undefined;
    "r"?: number | undefined; // Alias for 'rate'
    "vfr"?: boolean | undefined;
    "cfr"?: boolean | undefined;
    "pfr"?: boolean | undefined;

    // Audio
    "audio-lang-list"?: string | undefined;
    "all-audio"?: boolean | undefined;
    "first-audio"?: boolean | undefined;
    "audio"?: string | undefined;
    "a"?: string | undefined; // Alias for 'audio'
    "aencoder"?: string | undefined;
    "E"?: string | undefined; // Alias for 'aencoder'
    "audio-copy-mask"?: string | undefined;
    "audio-fallback"?: string | undefined;
    "ab"?: string | undefined;
    "B"?: string | undefined; // Alias for 'ab'
    "aq"?: string | undefined;
    "Q"?: string | undefined; // Alias for 'aq'
    "ac"?: string | undefined;
    "C"?: string | undefined; // Alias for 'ac'
    "mixdown"?: string | undefined;
    "normalize-mix"?: string | undefined;
    "arate"?: string | undefined;
    "R"?: string | undefined; // Alias for 'arate'
    "drc"?: number | undefined;
    "D"?: number | undefined; // Alias for 'drc'
    "gain"?: number | undefined;
    "adither"?: string | undefined;
    "aname"?: string | undefined;
    "A"?: string | undefined; // Alias for 'aname'

    // Picture
    "width"?: number | undefined;
    "w"?: number | undefined; // Alias for 'width'
    "height"?: number | undefined;
    "l"?: number | undefined; // Alias for 'height'
    "crop"?: string | undefined;
    "loose-crop"?: boolean | undefined;
    "no-loose-crop"?: boolean | undefined;
    "maxHeight"?: number | undefined;
    "Y"?: number | undefined; // Alias for 'maxHeight'
    "maxWidth"?: number | undefined;
    "X"?: number | undefined; // Alias for 'maxWidth'
    "non-anamorphic"?: boolean | undefined;
    "auto-anamorphic"?: boolean | undefined;
    "loose-anamorphic"?: boolean | undefined;
    "custom-anamorphic"?: boolean | undefined;
    "display-width"?: number | undefined;
    "keep-display-aspect"?: boolean | undefined;
    "pixel-aspect"?: string | undefined;
    "itu-par"?: boolean | undefined;
    "modulus"?: number | undefined;
    "color-matrix"?: string | undefined;
    "M"?: string | undefined; // Alias for 'color-matrix'

    // Filters
    "comb-detect"?: string | undefined;
    "no-comb-detect"?: boolean | undefined;
    "deinterlace"?: string | undefined;
    "d"?: string | undefined; // Alias for 'deinterlace'
    "no-deinterlace"?: boolean | undefined;
    "decomb"?: string | undefined;
    "no-decomb"?: boolean | undefined;
    "detelecine"?: string | undefined;
    "no-detelecine"?: boolean | undefined;
    "hqdn3d"?: string | undefined;
    "no-hqdn3d"?: boolean | undefined;
    "denoise"?: string | undefined;
    "nlmeans"?: string | undefined;
    "no-nlmeans"?: boolean | undefined;
    "nlmeans-tune"?: string | undefined;
    "deblock"?: string | undefined;
    "no-deblock"?: boolean | undefined;
    "rotate"?: string | undefined;
    "pad"?: string | undefined;
    "grayscale"?: boolean | undefined;
    "g"?: boolean | undefined; // Alias for 'grayscale'
    "no-grayscale"?: boolean | undefined;

    // Subtitle
    "subtitle-lang-list"?: string | undefined;
    "all-subtitles"?: boolean | undefined;
    "first-subtitles"?: boolean | undefined;
    "subtitle"?: string | undefined;
    "s"?: string | undefined; // Alias for 'subtitle'
    "subtitle-forced"?: number | undefined;
    "F"?: number | undefined; // Alias for 'subtitle-forced'
    "subtitle-burned"?: number | undefined;
    "subtitle-default"?: number | undefined;
    "native-language"?: string | undefined;
    "N"?: string | undefined; // Alias for 'native-language'
    "native-dub"?: boolean | undefined;
    "srt-file"?: string | undefined;
    "srt-codeset"?: string | undefined;
    "srt-offset"?: string | undefined;
    "srt-lang"?: string | undefined;
    "srt-default"?: number | undefined;
    "srt-burn"?: number | undefined;

    [key: string]: unknown;
}

export enum HandbrakeErrors {
    VALIDATION = "ValidationError",
    INVALID_INPUT = "InvalidInput",
    INVALID_PRESET = "InvalidPreset",
    OTHER = "Other",
    NOT_FOUND = "HandbrakeCLINotFound",
}

export interface HandbrakeProgress {
    readonly tasknumber: number;
    readonly taskCount: number;
    readonly percentComplete: number;
    readonly fps: number;
    readonly avgFps: number;
    readonly eta: string;
    readonly task: "Encoding" | "Muxing";
}

export interface Handbrake extends EventEmitter {
    readonly output: string;
    readonly options: HandbrakeOptions;
    readonly eError: typeof HandbrakeErrors;

    cancel(): void;

    on(event: "start" | "begin" | "end" | "complete" | "cancelled", cb: () => void): this;
    on(event: "progress", cb: (progress: HandbrakeProgress) => void): this;
    on(event: "output", cb: (output: string) => void): this;
    on(event: "error", cb: (error: Error) => void): this;
}

export function exec(options: HandbrakeOptions, cb?: (err: Error | null, stdout: string, stderr: string) => void): void;
export function run(options: HandbrakeOptions): Promise<{ stdout: string; stderr: string }>;
export function spawn(options: HandbrakeOptions): Handbrake;
