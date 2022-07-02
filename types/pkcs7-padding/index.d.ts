// Type definitions for pkcs7-padding 0.1
// Project: https://github.com/neeh/pkcs7-padding#readme
// Definitions by: Svet Nikolov <https://github.com/svetkomir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function pad(data: Buffer, size?: number): Buffer;
export function pad(data: string, size?: number): string;
export function unpad(data: Buffer): Buffer;
export function unpad(data: string): string;
