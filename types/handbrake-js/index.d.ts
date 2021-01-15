// Type definitions for handbrake-js 5.0
// Project: https://github.com/75lb/handbrake-js#readme
// Definitions by: Rémy Jeancolas <https://github.com/RemyJeancolas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

export interface HandbrakeOptions {
    // General
    'help'?: boolean;
    'h'?: boolean; // Alias for 'help'
    'version'?: boolean;
    'verbose'?: boolean;
    'v'?: boolean; // Alias for 'verbose'
    'preset'?: string;
    'Z'?: string; // Alias for 'preset'
    'preset-list'?: boolean;
    'z'?: boolean; // Alias for 'preset-list'
    'preset-import-file'?: string;
    'no-dvdnav'?: boolean;
    'no-opencl'?: boolean;

    // Source
    'input'?: string;
    'i'?: string; // Alias for 'input'
    'title'?: number;
    't'?: number; // Alias for 'title'
    'min-duration'?: number;
    'scan'?: boolean;
    'main-feature'?: boolean;
    'chapters'?: string;
    'c'?: string; // Alias for 'chapters'
    'angle'?: number;
    'previews'?: string;
    'start-at-preview'?: string;
    'start-at'?: string;
    'stop-at'?: string;

    // Destination
    'output'?: string;
    'o'?: string; // Alias for 'output'
    'format'?: string;
    'f'?: string; // Alias for 'format'
    'markers'?: boolean;
    'm'?: boolean; // Alias for 'markers'
    'no-markers'?: boolean;
    'optimize'?: boolean;
    'O'?: boolean; // Alias for 'optimize'
    'ipod-atom'?: boolean;
    'I'?: boolean; // Alias for 'ipod-atom'
    'no-ipod-atom'?: boolean;
    'use-opencl'?: boolean;
    'P'?: boolean; // Alias for 'use-opencl'

    // Video
    'encoder'?: string;
    'e'?: string; // Alias for 'encoder'
    'encoder-preset'?: string;
    'encoder-preset-list'?: string;
    'encoder-tune'?: string;
    'encoder-tune-list'?: string;
    'encopts'?: string;
    'x'?: string; // Alias for 'encopts'
    'encoder-profile'?: string;
    'encoder-profile-list'?: string;
    'encoder-level'?: string;
    'encoder-level-list'?: string;
    'quality'?: number;
    'q'?: number; // Alias for 'quality'
    'vb'?: number;
    'b'?: number; // Alias for 'vb'
    'two-pass'?: boolean;
    'no-two-pass'?: boolean;
    'turbo'?: boolean;
    'T'?: boolean; // Alias for 'turbo'
    'no-turbo'?: boolean;
    'rate'?: number;
    'r'?: number; // Alias for 'rate'
    'vfr'?: boolean;
    'cfr'?: boolean;
    'pfr'?: boolean;

    // Audio
    'audio-lang-list'?: string;
    'all-audio'?: boolean;
    'first-audio'?: boolean;
    'audio'?: string;
    'a'?: string; // Alias for 'audio'
    'aencoder'?: string;
    'E'?: string; // Alias for 'aencoder'
    'audio-copy-mask'?: string;
    'audio-fallback'?: string;
    'ab'?: string;
    'B'?: string; // Alias for 'ab'
    'aq'?: string;
    'Q'?: string; // Alias for 'aq'
    'ac'?: string;
    'C'?: string; // Alias for 'ac'
    'mixdown'?: string;
    'normalize-mix'?: string;
    'arate'?: string;
    'R'?: string; // Alias for 'arate'
    'drc'?: number;
    'D'?: number; // Alias for 'drc'
    'gain'?: number;
    'adither'?: string;
    'aname'?: string;
    'A'?: string; // Alias for 'aname'

    // Picture
    'width'?: number;
    'w'?: number; // Alias for 'width'
    'height'?: number;
    'l'?: number; // Alias for 'height'
    'crop'?: string;
    'loose-crop'?: boolean;
    'no-loose-crop'?: boolean;
    'maxHeight'?: number;
    'Y'?: number; // Alias for 'maxHeight'
    'maxWidth'?: number;
    'X'?: number; // Alias for 'maxWidth'
    'non-anamorphic'?: boolean;
    'auto-anamorphic'?: boolean;
    'loose-anamorphic'?: boolean;
    'custom-anamorphic'?: boolean;
    'display-width'?: number;
    'keep-display-aspect'?: boolean;
    'pixel-aspect'?: string;
    'itu-par'?: boolean;
    'modulus'?: number;
    'color-matrix'?: string;
    'M'?: string; // Alias for 'color-matrix'

    // Filters
    'comb-detect'?: string;
    'no-comb-detect'?: boolean;
    'deinterlace'?: string;
    'd'?: string; // Alias for 'deinterlace'
    'no-deinterlace'?: boolean;
    'decomb'?: string;
    'no-decomb'?: boolean;
    'detelecine'?: string;
    'no-detelecine'?: boolean;
    'hqdn3d'?: string;
    'no-hqdn3d'?: boolean;
    'denoise'?: string;
    'nlmeans'?: string;
    'no-nlmeans'?: boolean;
    'nlmeans-tune'?: string;
    'deblock'?: string;
    'no-deblock'?: boolean;
    'rotate'?: string;
    'pad'?: string;
    'grayscale'?: boolean;
    'g'?: boolean; // Alias for 'grayscale'
    'no-grayscale'?: boolean;

    // Subtitle
    'subtitle-lang-list'?: string;
    'all-subtitles'?: boolean;
    'first-subtitles'?: boolean;
    'subtitle'?: string;
    's'?: string; // Alias for 'subtitle'
    'subtitle-forced'?: number;
    'F'?: number; // Alias for 'subtitle-forced'
    'subtitle-burned'?: number;
    'subtitle-default'?: number;
    'native-language'?: string;
    'N'?: string; // Alias for 'native-language'
    'native-dub'?: boolean;
    'srt-file'?: string;
    'srt-codeset'?: string;
    'srt-offset'?: string;
    'srt-lang'?: string;
    'srt-default'?: number;
    'srt-burn'?: number;

    [key: string]: unknown;
}

export enum HandbrakeErrors {
    VALIDATION = 'ValidationError',
    INVALID_INPUT = 'InvalidInput',
    INVALID_PRESET = 'InvalidPreset',
    OTHER = 'Other',
    NOT_FOUND = 'HandbrakeCLINotFound'
}

export interface HandbrakeProgress {
    readonly tasknumber: number;
    readonly taskCount: number;
    readonly percentComplete: number;
    readonly fps: number;
    readonly avgFps: number;
    readonly eta: string;
    readonly task: 'Encoding' | 'Muxing';
}

export interface Handbrake extends EventEmitter {
    readonly output: string;
    readonly options: HandbrakeOptions;
    readonly eError: typeof HandbrakeErrors;

    cancel(): void;

    on(event: 'start' | 'begin' | 'end' | 'complete' | 'cancelled', cb: () => void): this;
    on(event: 'progress', cb: (progress: HandbrakeProgress) => void): this;
    on(event: 'output', cb: (output: string) => void): this;
    on(event: 'error', cb: (error: Error) => void): this;
}

export function exec(options: HandbrakeOptions, cb?: (err: Error | null, stdout: string, stderr: string) => void): void;
export function run(options: HandbrakeOptions): Promise<{ stdout: string, stderr: string }>;
export function spawn(options: HandbrakeOptions): Handbrake;
