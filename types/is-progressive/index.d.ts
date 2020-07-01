// Type definitions for is-progressive 3.0
// Project: https://github.com/sindresorhus/is-progressive#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';

/**
 * Returns whether the `buffer` is a progressive JPEG image.
 * @param buffer Buffer of a JPEG image.
 * Must be at least `65535` bytes when the file is larger than that.
 */
export function buffer(buffer: Buffer): boolean;

/**
 * Returns a Promise for a boolean indicating whether the file stream is a progressive JPEG image.
 * @param stream Data stream.
 */
export function stream(stream: Readable): Promise<boolean>;

/**
 * Returns a Promise for a boolean indicating whether the file is a progressive JPEG image.
 * @param filepath Filepath to the image.
 */
export function file(filepath: string): Promise<boolean>;

/**
 * Returns whether the buffer is a progressive JPEG.
 * @param filepath Filepath to the image.
 */
export function fileSync(filepath: string): boolean;
