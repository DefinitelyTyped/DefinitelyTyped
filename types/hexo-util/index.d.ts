// Type definitions for hexo-util 0.6
// Project: https://hexo.io/
// Definitions by: sega yuu <https://github.com/segayuu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { Transform } from "stream";
import { SpawnOptions, StdioOptions } from 'child_process';

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

export interface Pattern<T> {
    test(str: string): boolean;
    match(str: string): T;
}

export const Pattern: {
    new<T>(rule: Pattern<T> | ((str: string) => T)): Pattern<T>;
    new(rule: RegExp): Pattern<RegExpMatchArray | null>;
    new(rule: string): Pattern<{ 0: string; [index: number]: any; } & { [name: string]: any; } | undefined>;
};

export class Permalink {
    constructor(rule: string, options?: {
        segments?: { [name: string]: string | RegExp; };
    });
    rule: string;
    regex: RegExp;
    params: string[];
    test(str: string): boolean;
    parse(str: string): { [param: string]: any; } | undefined;
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
    stdio: StdioOptions;
}

export interface hexoSpawnDisableEncodingAndOverrideStdioOptions extends hexoSpawnDisableEncodingOptions {
    stdio: StdioOptions;
}

export function spawn(command: string, args: string[], options: hexoSpawnDisableEncodingAndOverrideStdioOptions): Promise<Buffer | undefined>;
export function spawn(command: string, args: string[], options: hexoSpawnOverrideStdioOptions): Promise<string | undefined>;
export function spawn(command: string, args: string[], options: hexoSpawnDisableEncodingOptions): Promise<Buffer>;
export function spawn(command: string, args: string[], options?: hexoSpawnOptions): Promise<string>;

export function spawn(command: string, options: hexoSpawnDisableEncodingAndOverrideStdioOptions): Promise<Buffer | undefined>;
export function spawn(command: string, options: hexoSpawnOverrideStdioOptions): Promise<string | undefined>;
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
