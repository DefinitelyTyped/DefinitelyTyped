/// <reference types="node" />

import { Readable } from "stream";

export class Directory implements Iterable<string> {
    constructor(path: string, contents?: Record<string, HrxItem>, comment?: string | null);
    readonly path: string;
    readonly contents: Record<string, HrxItem>;
    readonly comment?: string;
    get(path: string): HrxItem | undefined;
    isDirectory(): this is Directory;
    isFile(): this is File;
    list(): string[];
    [Symbol.iterator](): Iterator<string>;
}

export class Archive extends Directory {
    constructor(contents?: Record<string, HrxItem>, comment?: string | null);
    readonly path: "";
}

export class File {
    constructor(path: string, body: string, comment?: string | null);
    readonly path: string;
    readonly body: string;
    readonly comment?: string;
    isDirectory(): this is Directory;
    isFile(): this is File;
}

export type HrxItem = File | Directory;

export class ParseProblem extends Error {
    constructor(message: string, position: { line: number; col: number }, details?: Record<string, unknown>);
    readonly line: number;
    readonly col: number;
    readonly details: {};
}

export class LexicalProblem extends Error {
    constructor(message: string, line: number, details?: { path?: string; [key: string]: unknown });
    readonly line: number;
    readonly details: {
        path?: string;
    };
}

export function archiveFromStream(stream: Readable): Promise<Archive>;
