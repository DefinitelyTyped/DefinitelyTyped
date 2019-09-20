// Type definitions for url-safe-base64 1.1
// Project: https://github.com/commenthol/url-safe-base64#readme
// Definitions by: John Wright <https://github.com/johngeorgewright>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function decode(safe: string): string;

export function encode(base64: string): string;

export function isBase64(string: string): string;

export function isUrlSafeBase64(string: string): string;

export function trim(string: string): string;
