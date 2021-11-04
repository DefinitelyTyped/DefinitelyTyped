// Type definitions for whatwg-encoding 1.0
// Project: https://github.com/jsdom/whatwg-encoding
// Definitions by: fengkx <https://github.com/fengkx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
export function decode(buffer: Buffer, fallbackEncodingName: string): string;
export function labelToName(label: string): string | null;
export function isSupported(name: string): boolean;
export function getBOMEncoding(buffer: Buffer): string | null;
