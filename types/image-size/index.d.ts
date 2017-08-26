// Type definitions for image-size
// Project: https://github.com/image-size/image-size
// Definitions by: Elisée MAURER <https://github.com/elisee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



interface ImageInfo {
    width: number;
    height: number;
    type: string;
}

declare function sizeOf(path: string): ImageInfo;
declare function sizeOf(path: string, callback: (err: Error, dimensions: ImageInfo) => void): void;

declare function sizeOf(buffer: Buffer): ImageInfo;

declare namespace sizeOf { }

export = sizeOf;
