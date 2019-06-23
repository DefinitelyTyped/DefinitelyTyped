// Type definitions for tsscmp 1.0
// Project: https://github.com/suryagh/tsscmp#readme
// Definitions by: Gareth Jones <https://github.com/g-rath>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = timeSafeCompare;

declare function timeSafeCompare(a: number, b: number): boolean;
declare function timeSafeCompare(a: string, b: string): boolean;
