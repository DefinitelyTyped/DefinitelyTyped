// Type definitions for images 2.2
// Project: https://github.com/zhangyuanwei/node-images
// Definitions by: Ding Weizhe <https://github.com/DingWeizhe/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace images {
    interface ImagesConfig {
        [key: string]: any;
    }
    type SupportType = "png" | "jpg" | "gif" | "bmp" | "raw" | "webp";
    class ImagesStatic {
        fill(red: number, green: number, blue: number, alpha?: number): ImagesStatic;
        draw(image: ImagesStatic, x: number, y: number): ImagesStatic;
        loadFromBuffer(buffer: Buffer): ImagesStatic;
        encode(type: string, config?: ImagesConfig): void;
        save(file: string, type?: SupportType, config?: ImagesConfig): void;
        save(file: string, config?: ImagesConfig): void;
        size(): { width: number, height: number };
        size(width: number, height?: number): ImagesStatic;
        resize(width: number, height?: number, filter?: string): ImagesStatic;
        resize(width: number, height: number, filter?: string): ImagesStatic;
        width(): number;
        width(width: number): ImagesStatic;
        height(): number;
        height(height: number): ImagesStatic;
        setLimit(width: number, height: number): void;
        setGCThreshold(value: number): void;
        getUsedMemory(): void;
        gc(): void;
    }
}

/* tslint:disable:unified-signatures */
declare function images(file: string): images.ImagesStatic;
declare function images(width: number, height: number): images.ImagesStatic;
declare function images(buffer: Buffer, start?: number, end?: number): images.ImagesStatic;
declare function images(image: images.ImagesStatic): images.ImagesStatic;
declare function images(image: images.ImagesStatic, x: number, y: number, width: number, height: number): images.ImagesStatic;
/* tslint:enable:unified-signatures */

export = images;
