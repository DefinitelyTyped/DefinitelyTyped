// Type definitions for mz
// Project: https://github.com/normalize/mz
// Definitions by: Thomas Hickman <https://github.com/ThomasHickman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Modified from the node.js definitions https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts

/// <reference types="node" />

import * as zlib from "zlib";
export * from "zlib";

export function deflate(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export function deflate(buf: Buffer): Promise<Buffer>;

export function deflateRaw(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export function deflateRaw(buf: Buffer): Promise<Buffer>;

export function gzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export function gzip(buf: Buffer): Promise<Buffer>;

export function gunzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export function gunzip(buf: Buffer): Promise<Buffer>;

export function inflate(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export function inflate(buf: Buffer): Promise<Buffer>;

export function inflateRaw(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export function inflateRaw(buf: Buffer): Promise<Buffer>;

export function unzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export function unzip(buf: Buffer): Promise<Buffer>;