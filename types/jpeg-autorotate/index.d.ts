// Type definitions for jpeg-autorotate 4.0
// Project: https://github.com/johansatge/jpeg-autorotate#readme
// Definitions by: Slessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

export enum errors {
    read_file = "read_file",
    read_exif = "read_exif",
    no_orientation = "no_orientation",
    unknown_orientation = "unknown_orientation",
    correct_orientation = "correct_orientation",
    rotate_file = "rotate_file",
}

export interface CustomError extends Error {
    code: errors;
}

export function rotate(
    path_or_buffer: string | Buffer,
    options?: { quality?: number },
    module_callback?: (
        error: CustomError | null,
        buffer: Buffer | null,
        orientation: number | null,
        dimensions: { height: number; width: number } | null,
    ) => void,
): void;
