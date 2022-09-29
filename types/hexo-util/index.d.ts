// Type definitions for hexo-util 0.6
// Project: https://hexo.io/
// Definitions by: sega yuu <https://github.com/segayuu>
//                 KentarouTakeda <https://github.com/KentarouTakeda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { Transform } from "stream";
import { SpawnOptions, StdioOptions } from 'child_process';

export class CacheStream extends Transform {
    destroy(): this;
    getCache(): Buffer;
}

export function camelCaseKeys(obj: { [x: string]: any; }): { [x: string]: any; };

export function escapeRegExp(str: string): string;

export function escapeDiacritic(str: string): string;

export function escapeHTML(str: string): string;

export function hash(str: string | ArrayBufferView): Buffer;

export class HashStream extends Transform {}

export function highlight(str: string, options?: {
    hljs?: boolean | undefined;
    gutter?: boolean | undefined;
    wrap?: boolean | undefined;
    firstLine?: number | undefined;
    caption?: string | undefined;
    mark?: number[] | undefined;
    tab?: string | undefined;
    lang?: string | undefined;
    autoDetect?: boolean | undefined;
}): string;

export function htmlTag(tag: string, attrs?: string[] | ArrayLike<string> | { [x: string]: any }, text?: string | null, escape?: boolean): string;

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
        segments?: { [name: string]: string | RegExp; } | undefined;
    });
    rule: string;
    regex: RegExp;
    params: string[];
    test(str: string): boolean;
    parse(str: string): { [param: string]: any; } | undefined;
    stringify(data: { [name: string]: string; }): string;
}

export function slugize(str: string, options?: {
    separator?: string | undefined;
    transform?: 1 | 2 | undefined;
}): string;

export interface hexoSpawnOptions extends SpawnOptions {
    verbose?: boolean | undefined;
    encoding?: BufferEncoding | undefined;
}

export interface hexoSpawnDisableEncodingOptions extends SpawnOptions {
    verbose?: boolean | undefined;
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
    width?: number | undefined;
}): string;

export function truncate(str: string, options?: {
    length?: number | undefined;
    omission?: string | undefined;
    separator?: string | undefined;
}): string;
