// Type definitions for spritesmith 3.4
// Project: https://github.com/twolfson/spritesmith
// Definitions by: Zenoo <https://github.com/Zenoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReadableStream } from 'stream/web';
import { BufferFile } from 'vinyl';

export interface SpritesmithOptions {
    engine?: string;
    engineOpts?: Record<string, unknown>;
}

export type SpritesmithCreateImagesSrc = Array<string | BufferFile>;
export interface SpritesmithImage {
    width: number;
    height: number;
    [key: string]: unknown;
}

export interface SpritesmithProcessImagesOptions {
    padding?: number;
    exportOpts?: {
        format?: 'png' | 'jpg' | 'jpeg' | 'webp';
        quality?: number;
        background?: string;
        [key: string]: unknown;
    };
    algorithm?: 'top-down' | 'left-right' | 'diagonal' | 'alt-diagonal' | 'binary-tree';
    algorithmOpts?: {
        sort?: boolean;
    };
}

export interface SpritesmithResult {
    image: ReadableStream;
    coordinates: Record<string, { x: number; y: number; width: number; height: number }>;
    properties: { width: number; height: number };
}

export default class Spritesmith {
    constructor(options?: SpritesmithOptions);
    static run(
        options: SpritesmithOptions & SpritesmithProcessImagesOptions & {
            src: SpritesmithCreateImagesSrc;
        },
        callback: (err: Error | null, result: SpritesmithResult) => void): void;
    createImages(src: SpritesmithCreateImagesSrc, callback: (err: Error | null, images: SpritesmithImage[]) => void): void;
    processImages(
        images: SpritesmithImage[],
        options?: SpritesmithProcessImagesOptions
    ): SpritesmithResult;
}
