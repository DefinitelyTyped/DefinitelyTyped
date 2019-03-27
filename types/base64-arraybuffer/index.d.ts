// Type definitions for base64-arraybuffer 0.1
// Project: https://github.com/niklasvh/base64-arraybuffer
// Definitions by: Ben Cook <https://github.com/jbencook>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function encode(arraybuffer: ArrayBuffer): string;
export function decode(base64: string): ArrayBuffer;
