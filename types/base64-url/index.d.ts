// Type definitions for base64-url 2.2
// Project: https://github.com/joaquimserafim/base64-url
// Definitions by: Uri Shaked <https://github.com/urish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function decode(value: string, encoding?: string): string;
export function encode(value: string, encoding?: string): string;
export function escape(value: string): string;
export function unescape(value: string): string;
