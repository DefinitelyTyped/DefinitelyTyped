// Type definitions for hexo-util 0.6
// Project: https://hexo.io/
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from "stream";
import { SpawnOptions } from 'child_process';

export class CacheStream extends Transform {
    destroy(): void;
    getCache(): Buffer;
}

export function camelCaseKeys(obj: { [x: string]: any; }): { [x: string]: any; };

export function escapeRegExp(str: string): string;

export function escapeDiacritic(str: string): string;

export function escapeHTML(str: string): string;

export function hash(str: string | ArrayBufferView): Buffer;

export class HashStream extends Transform {}

export function highlight(str: string, options?: {
    hljs?: boolean;
    gutter?: boolean;
    wrap?: boolean;
    firstLine?: number;
    caption?: string;
    mark?: number[];
    tab?: string;
    lang?: string;
    autoDetect?: boolean;
}): string;

export function htmlTag(tag: string, attrs?: string[] | ArrayLike<string> | { [x: string]: any }, text?: string | null): string;

export class Pattern {
    constructor(rule: Pattern | ((str: string) => any) | RegExp | string);
    test(str: string): boolean;
    match(str: string): any;
}

export class Permalink {
    constructor(rule: string, options?: {
        segments?: { [name: string]: string | RegExp; };
    });
    rule: string;
    regex: RegExp;
    params: string;
    test(str: string): boolean;
    parse(str: string): any[];
    stringify(data: { [name: string]: string; }): string;
}

export function slugize(str: string, options?: {
    separator?: string;
    transform?: 1 | 2;
}): string;

export interface hexoSpawnOptions extends SpawnOptions {
    verbose?: boolean;
    encoding?: BufferEncoding;
}

export interface hexoSpawnDisableEncodingOptions extends SpawnOptions {
    verbose?: boolean;
    encoding: '' | false | null;
}

export interface hexoSpawnOverrideStdioOptions extends hexoSpawnOptions {
    stdio: any[] | string;
}

export interface hexoSpawnDisableEncodingAndOverrideStdioOptions extends hexoSpawnDisableEncodingOptions {
    stdio: any[] | string;
}

export function spawn(command: string, args: string[], options: hexoSpawnDisableEncodingAndOverrideStdioOptions): Promise<Buffer | void>;
export function spawn(command: string, args: string[], options: hexoSpawnOverrideStdioOptions): Promise<string | void>;
export function spawn(command: string, args: string[], options: hexoSpawnDisableEncodingOptions): Promise<Buffer>;
export function spawn(command: string, args: string[], options?: hexoSpawnOptions): Promise<string>;

export function spawn(command: string, options: hexoSpawnDisableEncodingAndOverrideStdioOptions): Promise<Buffer | void>;
export function spawn(command: string, options: hexoSpawnOverrideStdioOptions): Promise<string | void>;
export function spawn(command: string, options: hexoSpawnDisableEncodingOptions): Promise<Buffer>;
export function spawn(command: string, options?: hexoSpawnOptions): Promise<string>;

export function stripHTML(str: string): string;

export function wordWrap(str: string, options?: {
    width?: number;
}): string;

export function truncate(str: string, options?: {
    length?: number;
    omission?: string;
    separator?: string;
}): string;
