// Type definitions for parse-multipart 1.0
// Project: https://github.com/freesoftwarefactory/parse-multipart#readme
// Definitions by: pharrukh <https://github.com/pharrukh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface ParsedFile {
    filename: string;
    data: Buffer;
    type: string;
}

export function getBoundary(header: string): string;

export function Parse(multipartBodyBuffer: Buffer, boundary: string): ParsedFile[];

export function DemoData(): Buffer;
