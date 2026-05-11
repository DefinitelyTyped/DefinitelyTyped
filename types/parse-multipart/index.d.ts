/// <reference types="node" />

export interface ParsedFile {
    filename: string;
    data: Buffer;
    type: string;
}

export function getBoundary(header: string): string;

export function Parse(multipartBodyBuffer: Buffer, boundary: string): ParsedFile[];

export function DemoData(): Buffer;
