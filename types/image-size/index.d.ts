// Type definitions for image-size 0.7
// Project: https://github.com/image-size/image-size
// Definitions by: Elisée MAURER <https://github.com/elisee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface ImageInfo {
    width: number;
    height: number;
    type: string;
    orientation?: number;
}

declare function sizeOf(pathOrBuffer: string | Buffer): ImageInfo;
declare function sizeOf(path: string, callback: (err: Error, dimensions: ImageInfo) => void): void;

declare namespace sizeOf { }

export = sizeOf;
