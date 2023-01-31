// Type definitions for spritesmith 3.4
// Project: https://github.com/twolfson/spritesmith
// Definitions by: Zenoo <https://github.com/Zenoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReadableStream } from 'stream/web';
import { BufferFile } from 'vinyl';

declare class Spritesmith {
    constructor(params?: Spritesmith.SpritesmithParams);
    static run(
        params: Spritesmith.SpritesmithParams & Spritesmith.SpritesmithProcessImagesOptions & {
            src: Spritesmith.SpritesmithCreateImagesSrc;
        },
        callback: (
            err: Error | null,
            result: Spritesmith.SpritesmithResult & {
                image: Buffer;
            }
        ) => void): void;
    createImages(src: Spritesmith.SpritesmithCreateImagesSrc, callback: (err: Error | null, images: Spritesmith.SpritesmithImage[]) => void): void;
    processImages(
        images: Spritesmith.SpritesmithImage[],
        options?: Spritesmith.SpritesmithProcessImagesOptions
    ): Spritesmith.SpritesmithResult;
}

declare namespace Spritesmith {
    interface SpritesmithParams {
        engine?: string;
        engineOpts?: Record<string, unknown>;
    }

    type SpritesmithCreateImagesSrc = Array<string | BufferFile>;
    interface SpritesmithImage {
        width: number;
        height: number;
        [key: string]: unknown;
    }

    interface SpritesmithProcessImagesOptions {
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

    interface SpritesmithResult {
        image: ReadableStream;
        coordinates: Record<string, { x: number; y: number; width: number; height: number }>;
        properties: { width: number; height: number };
    }
}

export = Spritesmith;
