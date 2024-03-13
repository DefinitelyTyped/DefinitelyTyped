import { Transform } from "stream";
import { BufferFile } from "vinyl";

declare class Spritesmith {
    constructor(params?: Spritesmith.SpritesmithParams);
    static run(
        params:
            & Spritesmith.SpritesmithParams
            & Spritesmith.SpritesmithProcessImagesOptions
            & {
                src: Spritesmith.SpritesmithCreateImagesSrc;
            },
        callback: (err: Error | null, result: Spritesmith.SpritesmithResult) => void,
    ): void;
    createImages(
        src: Spritesmith.SpritesmithCreateImagesSrc,
        callback: (err: Error | null, images: Spritesmith.SpritesmithImage[]) => void,
    ): void;
    processImages(
        images: Spritesmith.SpritesmithImage[],
        options?: Spritesmith.SpritesmithProcessImagesOptions,
    ): Spritesmith.SpritesmithResult<Transform>;
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
            format?: "png" | "jpg" | "jpeg" | "webp";
            quality?: number;
            background?: string;
            [key: string]: unknown;
        };
        algorithm?: "top-down" | "left-right" | "diagonal" | "alt-diagonal" | "binary-tree";
        algorithmOpts?: {
            sort?: boolean;
        };
    }

    interface SpritesmithResult<Image extends Buffer | Transform = Buffer> {
        image: Image;
        coordinates: Record<string, { x: number; y: number; width: number; height: number }>;
        properties: { width: number; height: number };
    }
}

export = Spritesmith;
